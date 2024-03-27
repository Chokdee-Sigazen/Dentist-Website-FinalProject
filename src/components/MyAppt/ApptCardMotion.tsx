"use client";
import { deleteAppointment } from "@/lib/deleteAppt";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AppCardMotion(props: {
  date: string;
  dentistWork: string;
  dentistName: string;
  createdDate: string;
  index: number;
}) {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    setHide(true);
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
        onClick={handleClick}
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

      <div className="text-[16pt] sm:text-[18pt] md:text-[20pt] font-bold">
        นัดที่กำลังจะมาถึง : {props.date}
      </div>
      <div className="pl-5 text-[13pt] sm:text-[15pt] md:text-[18pt]">
        <span className="font-bold">หัวข้อ : </span>
        {props.dentistWork} <br></br>
        <span className="font-bold">หมอ : </span>
        {props.dentistName} <br></br>
        <span className="font-bold">สร้างเมื่อ : </span>
        {props.createdDate} <br></br>
      </div>
    </motion.div>
  );
}
