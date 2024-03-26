"use client";
import { useState } from "react";
import ChangePasswordPopup from "./ChangePasswordPopup";
import { motion } from "framer-motion";

type ProfileProps = {
  name: string;
  image: string;
  tel: string;
  email: string;
};

export default function Profile(props: ProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <main className="w-[97%] mx-auto min-h-[87vh] flex flex-col items-center bg-[#FAE3D9] rounded-md  my-4 px-4 pt-5 drop-shadow-sm">
      <div className="text-3xl font-bold text-[#895355] pb-5">My Profile</div>
      <motion.section
        className="flex flex-col md:flex-row bg-gradient-to-r from-[#fbc3c3] to-[#ffd8d8] rounded-md shadow-lg px-8 py-6 text-[#895355] drop-shadow-sm mx-5 my-5"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={props.image}
          className="w-40 bg-[#895355] rounded-full h-auto object-cover mx-auto md:mr-8 md:ml-0"
        />
        <div className="flex flex-col justify-between mx-5 my-2">
          <div className="font-bold text-lg">{props.name}</div>
          <div className="mt-2 mb-5 ">
            <p className="font-bold mb-2">tel: {props.tel}</p>
            <p className="font-bold">email: {props.email}</p>
          </div>
          <div className="flex justify-start mt-4 md:mt-0">
            <button className="bg-[#FFB6B9] rounded-md py-2 px-4 mr-4 hover:bg-[#FF8C94] transition-colors duration-300 font-bold drop-shadow-md">
              แก้ไข
            </button>
            <button
              className="bg-[#FFB6B9] rounded-md py-2 px-4 hover:bg-[#FF8C94] transition-colors duration-300 font-bold drop-shadow-md"
              onClick={openPopup}
            >
              เปลี่ยนรหัสผ่าน
            </button>
          </div>
        </div>
      </motion.section>
      <ChangePasswordPopup isOpen={isOpen} onClose={closePopup} />
    </main>
  );
}
