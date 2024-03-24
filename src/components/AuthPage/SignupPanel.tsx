'use client'
import React , { useRef } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";

const SignupPanel = () => {
    const userEmail = useRef("");
    const userPassword = useRef("");
    const checkPassword = useRef("");

    return(
        <div className="w-[100%] bg-[#FADDD9] rounded-md px-3 py-3 flex flex-col space-y-2">
            <TextField id="Email" name="Email" label="อีเมล :" variant="outlined" className="bg-white rounded-sm" required
                onChange={(e) => (userEmail.current = e.target.value)}/>
            <TextField id="Password" name="Password" label="รหัสผ่าน :" variant="outlined" className="bg-white rounded-sm" required 
                onChange={(e) => (userPassword.current = e.target.value)}/>
            <TextField id="Check" name="Check" label="ยืนยันรหัสผ่านอีกครั้ง :" variant="outlined" className="bg-white rounded-sm" required 
                onChange={(e) => (checkPassword.current = e.target.value)}/>
            <button name="Submit" className="block rounded-md bg-[#61C0BF] 
                hover:bg-[#346E6D] px-3 py-2 text-white shadow-md">สมัครเลย</button>
                {/*add onclick later*/}
        </div>
    );
}

export default SignupPanel;