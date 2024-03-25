"use client";
import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import { registerUser } from "@/lib/register";

const SignupPanel = () => {
  const [info, setinfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    tel: "",
  });

  return (
    <div className="w-[100%] bg-[#FADDD9] rounded-md px-3 py-3 flex flex-col space-y-2">
      {/* <div>
        <p>{info.email}</p>
        <p>{info.password}</p>
        <p>{info.confirmPassword}</p>
        <p>{info.name}</p>
        <p>{info.tel}</p>
      </div> */}
      <TextField
        id="Name"
        name="Name"
        label="ชื่อ :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => setinfo({ ...info, name: e.target.value })}
      />
      <TextField
        id="Email"
        name="Email"
        label="อีเมล :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => setinfo({ ...info, email: e.target.value })}
      />
      <TextField
        id="Telephone"
        name="Telephone"
        label="เบอร์โทรศัพท์ :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => setinfo({ ...info, tel: e.target.value })}
      />
      <TextField
        id="Password"
        name="Password"
        label="รหัสผ่าน :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => setinfo({ ...info, password: e.target.value })}
      />
      <TextField
        id="ConfirmPassword"
        name="ConfirmPassword"
        label="ยืนยันรหัสผ่านอีกครั้ง :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => setinfo({ ...info, confirmPassword: e.target.value })}
      />

      <button
        name="Submit"
        className="block rounded-md bg-[#61C0BF] 
                hover:bg-[#346E6D] px-3 py-2 text-white font-bold drop-shadow-md"
        onClick={() => {
          registerUser(info);
        }}
      >
        สมัครเลย
      </button>
      {/*add onclick later*/}
    </div>
  );
};

export default SignupPanel;
