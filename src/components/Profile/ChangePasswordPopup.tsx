'use client'
import { TextField } from "@mui/material";
import { useState } from "react";

export default function ChangePasswordPopup({isOpen, onClose}:{isOpen : boolean, onClose : Function}){
    const [newPass, setNewPass] = useState<string|null>(null);
    const [checkPass, setCheckPass] = useState<string|null>(null);

    if (!isOpen) return null;

    return(
        <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-50 flex justify-center items-center z-100">
            <div className="w-[60%] max-w-[600px] min-w-[400px] bg-white rounded-lg text-[#128281] p-4">
                <div className="flex justify-between">
                    <div className="text-2xl font-bold">แก้ไขรหัสผ่าน</div>
                    <button className="text-gray-500 hover:text-gray-800" onClick={() => onClose()}>X</button>
                </div>
                <div className="bg-[#DCEFE7] text-[18px] font-bold rounded-lg pt-5 pb-3 px-3 space-y-3">
                    <div className="flex flex-row ">
                        <div className="mr-6">รหัสผ่านใหม่ :</div>
                        <TextField id="newPass" name="newPass" variant="standard" className="w-[60%] bg-white" onChange={(e) => setNewPass(e.target.value)}/>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-2">ยืนยันรหัสผ่าน :</div>
                        <TextField id="checkPass" name="checkPass" variant="standard" className="w-[60%] bg-white" onChange={(e) => setCheckPass(e.target.value)}/>
                    </div>
                    <button className="w-[100%] bg-[#128281] rounded-md text-white text-[18px] font-bold px-2">ยืนยัน</button>
                </div>
            </div>
        </div>
    );
}
