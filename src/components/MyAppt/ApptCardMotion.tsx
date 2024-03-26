"use client";
import { motion } from "framer-motion";

export default function AppCardMotion(props: {
  date: string;
  dentistWork: string;
  dentistName: string;
  createdDate: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 20 }}
      className="w-[100%] h-auto bg-[#FFB6B9] text-[#FFFFFF] rounded-md drop-shadow-md my-2 px-4 py-3 "
    >
      <div className="text-[16pt] sm:text-[18pt] md:text-[20pt] font-bold">
        นัดที่กำลังจะมาถึง : {props.date}
      </div>
      <div className=" pl-5 text-[13pt] sm:text-[15pt] md:text-[18pt]">
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
