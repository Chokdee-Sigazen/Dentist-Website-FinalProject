"use client";
import { deleteAppointment } from "@/lib/deleteAppt";
import { updateAppointment } from "@/lib/updateAppointment"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Appointment, Dentist, allArea } from "@/interface";
import { useSession } from "next-auth/react";

export default function AppCardMotion(props: {
  date: string;
  dentistWork: string;
  dentistName: string;
  dentistId: string;
  createdDate: Date;
  index: number;
  user: string;
  allDentist: any;
}) {
  const [hide, setHide] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  //Edit Data Area
  const [newDate, setNewDate] = useState<Dayjs|null>(dayjs(props.date));
  const [newTime, setNewTime] = useState<Dayjs|null>(dayjs(props.date));
  const [newTopic, setNewTopic] = useState<string|null>(props.dentistWork);
  const [newDentist, setNewDentist] = useState<string>(props.dentistId);

  const [filteredDentists, setFilteredDentists] = useState<Dentist[]>([]);

  useEffect(() => {
    const fetchDentistData = async () => {
      if (newTopic) {
        setFilteredDentists(
          props.allDentist.data.filter((x: Dentist) =>
            x.areaOfExpertise.includes(newTopic)
          )
        );
      } else {
        setFilteredDentists(props.allDentist.data);
      }
    };
    fetchDentistData();
  }, [newTopic]);

  const session = useSession();

  const updateAppt = () => {
    if (!newTopic || !newDentist || !newDate || !newTime) {
      alert('Please fill all the boxes before submit');
      return;
    }
    const combinedDateTime = newDate
      .hour(newTime.hour())
      .minute(newTime.minute());

    const item: Appointment = {
      appointmentDate: new Date(
        dayjs(combinedDateTime.toDate()).toISOString()
      ),
      user: session.data!.user._doc?._id,
      dentist: newDentist,
      finish: false,
      createdAt: new Date(Date.now()),
    };
    console.log(item);

    updateAppointment(item)
      .then(() => {
        alert("Appointment successfully changed");
      })
      .catch((error) => {
        console.log(error);
        alert("Error changing appointment: " + error.message);
      });
  };

  const DeleteClick = () => {
    const item: Appointment = {
      appointmentDate: new Date (props.date),
      user: props.user,
      dentist: props.dentistId,
      finish: false,
      createdAt: new Date(Date.now()),
    };
    console.log(item);

    deleteAppointment(item)
      .then(() => {
        alert("Appointment successfully deleted");
      })
      .catch((error) => {
        console.log(error);
        alert("Error deleting appointment: " + error.message);
      });
  };
  return (
      <motion.div
        whileHover={{ x: 20 }}
        className={`w-[100%] h-auto ${
          props.index % 2 == 0 ? "bg-[#FFB6B9]" : "bg-[#cb9092]"
        } text-[#FFFFFF] rounded-md drop-shadow-md my-2 px-4 py-3 ${
          hide ? "hidden" : ""
        }`}
      >
        <motion.svg
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsEditOpen(!isEditOpen)}
            className="w-[47px] h-[47px] text-white-800 dark:text-white absolute top-0 right-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                clipRule="evenodd"
            />
            <path
                fillRule="evenodd"
                d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                clipRule="evenodd"
            />
        </motion.svg>
        
        <motion.svg
          whileHover={{ scale: 1.1 }}
          onClick={DeleteClick}
          className="w-[47px] h-[47px] text-white-800 dark:text-white absolute bottom-0 right-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </motion.svg>
        {
          isEditOpen
          ?<div>
            <div className="pl-2 text-[13pt] sm:text-[15pt] md:text-[18pt] font-bold space-y-2">
              <div className="flex items-center">
                <span className="mr-5">วันที่ : </span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="bg-white"
                    value={newDate}
                    minDate={dayjs()}
                    onChange={(value) => {
                      setNewDate(value);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center">
                <span className="mr-4">เวลา : </span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    className="bg-white"
                    value={newTime}
                    onChange={(value) => {
                      setNewTime(value);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center">
                <span className="mr-3">หัวข้อ : </span>
                <Select
                  variant="standard"
                  name="type"
                  id="type"
                  value={newTopic}
                  className="bg-white w-[64%] pl-2"
                  onChange={(e) => setNewTopic(e.target.value)}
                >
                  {allArea.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-center">
                <span className="mr-5">หมอ : </span>
                <Select
                  variant="standard"
                  name="dentist"
                  id="dentist"
                  value={newDentist}
                  className="bg-white w-[64%] pl-2"
                  onChange={(e) => setNewDentist(e.target.value)}
                >
                  {filteredDentists.map((dentist: Dentist) => (
                    <MenuItem key={dentist.id} value={dentist.id}>
                      {dentist.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <button className="flex flex-col items-center w-[90%] bg-[#61C0BF] rounded-md drop-shadow-md font-bold my-2"
              onClick={updateAppt}
              >ยืนยันการแก้ไข</button>
          </div>

          :<div>
            <div className="text-[16pt] sm:text-[18pt] md:text-[20pt] font-bold">
              นัดที่กำลังจะมาถึง : {props.date}
            </div>
            <div className="pl-5 text-[13pt] sm:text-[15pt] md:text-[18pt]">
              <span className="font-bold">หัวข้อ : </span>
              {props.dentistWork} <br></br>
              <span className="font-bold">หมอ : </span>
              {props.dentistName} <br></br>
              <span className="font-bold">สร้างเมื่อ : </span>
              {props.createdDate.toLocaleString()} <br></br>
              {
                session.data?.user.role == "admin"
                ?<div><span className="font-bold">สร้างโดย : </span>{props.user} <br></br></div>
                :null
              }
            </div>
          </div>
        }
          
      </motion.div>
  );
}
