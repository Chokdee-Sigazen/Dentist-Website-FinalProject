'use client'
import { useState } from "react";
import ChangePasswordPopup from "@/components/Profile/ChangePasswordPopup";

const MockProfile = {
    image: "/images/Patient/review1.png",
    name: "นายสมศักดิ์ อาสาสมัคร",
    tel: "098-848-1994",
    email: "chokdee50@gmail.com"
}

export default function profilePage() {

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <main className="w-full flex flex-col items-center bg-[#FAE3D9] rounded-md mx-4 my-4 px-4 pt-5 drop-shadow-sm">
            <div className="text-3xl font-bold text-[#895355] pb-5">My Profile</div>
            <section className="flex flex-col md:flex-row bg-[#F1C2C4] rounded-md px-8 py-6 text-[#895355] drop-shadow-sm mx-5 my-5">
                <img src={MockProfile.image} className="w-40 h-auto object-cover mx-auto md:mr-8 md:ml-0" />
                <div className="flex flex-col justify-between mx-5 my-2">
                    <div className="font-bold text-lg">{MockProfile.name}</div>
                    <div className="mt-2">
                        <span className="font-bold">tel:</span> {MockProfile.tel}<br />
                        <span className="font-bold">email:</span> {MockProfile.email}
                    </div>
                    <div className="flex justify-end mt-4 md:mt-0">
                        <button className="bg-[#FFB6B9] rounded-md py-2 px-4 mr-4 hover:bg-[#FF8C94] transition-colors duration-300 font-bold drop-shadow-md">
                            แก้ไข
                        </button>
                        <button className="bg-[#FFB6B9] rounded-md py-2 px-4 hover:bg-[#FF8C94] transition-colors duration-300 font-bold drop-shadow-md" 
                            onClick={openPopup}>
                            เปลี่ยนรหัสผ่าน
                        </button>
                    </div>
                </div>
            </section>
            <ChangePasswordPopup isOpen={isOpen} onClose={closePopup}/>
        </main>
    );
}
