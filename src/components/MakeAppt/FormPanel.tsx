import { Select, MenuItem } from "@mui/material"
import { LocalizationProvider, DatePicker, TimePicker} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Appointment } from "@/interface";

export default function FormPanel(){

    const [topic, setTopic] = useState<string|null>(null);
    const [dentist, setDentist] = useState<string|null>(null);
    const [dateAppt, setDateAppt] = useState<Dayjs|null>(null);
    const [timeAppt, setTimeAppt] = useState<Dayjs|null>(null);
    //const dispatch = useDispatch<AppDispatch>();

    const MakeAppt = () => {
        if (topic && dentist && dateAppt && timeAppt){
            const combinedDateTime = dateAppt.hour(timeAppt.hour()).minute(timeAppt.minute());

            const item: Appointment = {
                appointmentDate: combinedDateTime.toDate(),
                user:"",//Add Later
                dentist: dentist,
                finish: false,
                createdAt: dayjs().toDate()
            }
            console.log(item);
            //dispatch(addAppt(item))
        }
    }

    return(
        <div className="bg-[#F1C2C4] rounded-md px-10 py-10 justify-center space-y-10 font-bold text-[#895355] text-[14pt] drop-shadow-sm mx-5 my-5">
            <div className="flex flex-row grid grid-cols-2">
                หัวข้อ :
                <Select variant="standard" name="type" id="type" value={topic} className="h[2em]" onChange={(e) => setTopic(e.target.value)}>
                    <MenuItem value="test1">TestType</MenuItem>
                </Select>
            </div>

            <div className="flex flex-row grid grid-cols-2">
                หมอ :
                <Select variant="standard" name="dentist" id="dentist" value={dentist} className="h[2em]" onChange={(e) => setDentist(e.target.value)}>
                    <MenuItem value="test1">TestDentist</MenuItem>
                </Select>
            </div>

            <div className="flex flex-row items-center grid grid-cols-2">
                วันที่นัด :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white" value={dateAppt} onChange={(value) => {setDateAppt(value)}}/>
                </LocalizationProvider>
            </div>

            <div className="flex flex-row items-center grid grid-cols-2">
                เวลานัด :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="bg-white" value={timeAppt} onChange={(value) => {setTimeAppt(value)}}/>
                </LocalizationProvider>
            </div>

            <button name="Book Vaccine" className="w-[100%] block rounded-md bg-[#61C0BF] 
                hover:bg-cyan-700 px-3 py-2 text-white shadow-md" onClick={MakeAppt}>Submit</button>
        </div>
    );
}