'use client'
import { Select, MenuItem } from "@mui/material"
import { LocalizationProvider, DatePicker, TimePicker} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getDentist } from "@/lib/getDentists";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Appointment, Dentist, allArea } from "@/interface";
import { makeAppointment } from "@/lib/makeAppointment";
import { getSession } from "next-auth/react";

export default function FormPanel(){
    const [topic, setTopic] = useState<string|null>(null);
    const [dentistSelected, setDentist] = useState<string|null>(null);
    const [dateAppt, setDateAppt] = useState<Dayjs|null>(null);
    const [timeAppt, setTimeAppt] = useState<Dayjs|null>(null);

    const [filteredDentists, setFilteredDentists] = useState<Dentist[]>([]);

    useEffect(() => {
        const fetchDentistData = async () => {
            try {
                const allDentist = await getDentist();

                if(topic){
                    setFilteredDentists(allDentist.data.filter((x:Dentist) => x.areaOfExpertise.includes(topic))); 
                }
                else{setFilteredDentists(allDentist.data);}
            } catch (error) {
                console.error('Error fetching dentist data:', error);
            }
            
        };
        fetchDentistData();
      }, [topic]);

    const MakeAppt = async () => {
        if (topic && dentistSelected && dateAppt && timeAppt){
            const combinedDateTime = dateAppt.hour(timeAppt.hour()).minute(timeAppt.minute());
            try {
                const session = await getSession();
                if (!session) {
                    console.error('User session not found');
                    return;
                }
    
                const userID = session?.user._doc._id;
    
                if (!userID) {
                    console.error('User not found');
                    return;
                }

                const item: Appointment = {
                    appointmentDate: combinedDateTime.toDate(),
                    user: userID,
                    dentist: dentistSelected,
                    finish: false,
                    createdAt: dayjs().toDate()
                }
                console.log(item);
                
                makeAppointment(item)
                .then(() => {
                    console.log("Appointment successfully made");
                })
                .catch(error => {
                    console.error("Error making appointment:", error);
                });
            }
            catch (error) {
                console.error("Error:", error);
            }
        }
    }

    return(
        <div className="bg-[#F1C2C4] rounded-md px-10 py-10 justify-center space-y-10 font-bold text-[#895355] text-[14pt] drop-shadow-sm mx-5 my-5">
            <div className="flex flex-row grid grid-cols-2">
                หัวข้อ :
                <Select variant="standard" name="type" id="type" value={topic} className="h[2em]" onChange={(e) => setTopic(e.target.value)}>
                    {allArea.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </div>

            <div className="flex flex-row grid grid-cols-2">
                หมอ :
                <Select variant="standard" name="dentist" id="dentist" value={dentistSelected} className="h[2em]" onChange={(e) => setDentist(e.target.value)}>
                {filteredDentists.map((dentist:Dentist) => (
                    <MenuItem key={dentist.id} value={dentist.id}>{dentist.name}</MenuItem>
          ))}
                </Select>
            </div>

            <div className="flex flex-row items-center grid grid-cols-2">
                วันที่นัด :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white" value={dateAppt} 
                        minDate={dayjs()}
                        onChange={(value) => {setDateAppt(value)}}/>
                </LocalizationProvider>
            </div>

            <div className="flex flex-row items-center grid grid-cols-2">
                เวลานัด :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="bg-white" value={timeAppt}
                        minTime={dayjs().startOf('day').hour(8)}
                        maxTime={dayjs().startOf('day').hour(20)}
                        onChange={(value) => {setTimeAppt(value)}}/>
                </LocalizationProvider>
            </div>

            <button name="Book Vaccine" className="w-[100%] block rounded-md bg-[#61C0BF] 
                hover:bg-cyan-700 px-3 py-2 text-white shadow-md" onClick={MakeAppt}>Submit</button>
        </div>
    );
}