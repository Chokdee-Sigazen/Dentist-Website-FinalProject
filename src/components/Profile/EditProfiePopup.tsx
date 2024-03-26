'use client'
import { TextField } from "@mui/material";
import { useState } from "react";

export default function EditProfilePopup({isOpen, onClose, oldData}:{isOpen : boolean, onClose : Function, oldData:{name: string, tel: string, image: string}}){//Add oldData.image
    const [newName, setNewName] = useState<string>(oldData.name);
    const [newTel, setNewTel] = useState<string>(oldData.tel);
    // const [newImage, setNewImage] = useState<File|null>(null);

    if (!isOpen) return null;

    const updateProfile = () => {
        //Add Something
    }

    return(
        <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-50 flex justify-center items-center z-100">
            <div className="w-[60%] max-w-[600px] min-w-[400px] bg-white rounded-lg text-[#128281] p-4">
                <div className="flex justify-between">
                    <div className="text-2xl font-bold">แก้ไขข้อมูลส่วนตัว</div>
                    <button className="text-gray-500 hover:text-gray-800" onClick={() => {setNewName(oldData.name); setNewTel(oldData.tel); onClose()}}>X</button>
                </div>
                <div className="bg-[#DCEFE7] text-[18px] font-bold rounded-lg pt-5 pb-3 px-3 space-y-3">
                    <div className="flex flex-row ">
                        <div className="mr-2">ชื่อ-นามสกุล :</div>
                        <TextField id="newName" name="newName" value={newName} variant="standard" className="w-[60%] bg-white" onChange={(e) => setNewName(e.target.value)}/>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-9">เบอร์โทร :</div>
                        <TextField id="newTel" name="newTel" value={newTel} variant="standard" className="w-[60%] bg-white" onChange={(e) => setNewTel(e.target.value)}/>
                    </div>
                    {/*Add image input here*/}
                    <button className="w-[100%] bg-[#128281] rounded-md text-white text-[18px] font-bold px-2" onClick={() => {updateProfile; onClose();}}>ยืนยัน</button>
                </div>
            </div>
        </div>
    );
}
