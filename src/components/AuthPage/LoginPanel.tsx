"use client";
import React, { useRef } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import { login } from "@/lib/login"; // Assuming login.ts is in the same directory

const LoginPanel = () => {
  const userEmail = useRef("");
  const userPassword = useRef("");

  const handleLogin = async () => {
    try {
      const username = userEmail.current;
      const password = userPassword.current;

      // Call login function to authenticate user
      const responseData = await login(username, password);

      // Assuming login is successful, redirect user to dashboard or any other page
      console.log("User authenticated:", responseData);
      // Redirect logic goes here
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, show error message to the user, etc.
    }
  };

  return (
    <div className="w-[100%] bg-[#FADDD9] rounded-md px-3 py-3 flex flex-col space-y-2">
      <TextField
        id="Email"
        name="Email"
        label="อีเมล :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => (userEmail.current = e.target.value)}
      />
      <TextField
        id="Password"
        name="Password"
        label="รหัสผ่าน :"
        variant="outlined"
        className="bg-white rounded-sm"
        required
        onChange={(e) => (userPassword.current = e.target.value)}
      />
      <div className=" text-sm text-[#128281] underline">
        ลืมรหัสผ่าน? โทดทีเราช่วยไม่ได้หรอกนะ
      </div>
      <button
        name="Submit"
        className="block rounded-md bg-[#61C0BF] hover:bg-[#346E6D] px-3 py-2 text-white shadow-md"
        onClick={handleLogin}
      >
        ลงชื่อเข้าใช้
      </button>
      <Link
        href="/signup"
        className=" text-sm text-[#128281] font-bold underline"
      >
        ยังไม่มีบัญชีอีกหรอ สมัครเลย!!{" "}
      </Link>
    </div>
  );
};

export default LoginPanel;
