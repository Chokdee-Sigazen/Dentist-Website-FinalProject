"use client";
import React, { useRef } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import { signIn } from "next-auth/react";

type Props = {
  classname?: string;
  callbackUrl?: string;
  error?: string;
};

const LoginPanel = (props: Props) => {
  const userEmail = useRef("");
  const userPassword = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userEmail.current, userPassword.current);
    await signIn("credentials", {
      email: userEmail.current,
      password: userPassword.current,
      retdirect: true,
      callbackUrl:
        props.callbackUrl ??
        "https://dentist-website-final-project.vercel.app/",
    });
  };

  return (
    <div className=" space-y-4">
      {props.error && (
        <div className="w-full bg-red-200 py-4 font-bold text-center text-red-600">
          Wrong email or password
        </div>
      )}
      <div className="w-[100%] bg-[#FADDD9] rounded-md px-3 py-3 flex flex-col space-y-2">
        <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
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
            type="password"
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
            className="block rounded-md bg-[#61C0BF] hover:bg-[#346E6D] px-3 py-2 text-white font-bold drop-shadow-md"
            type="submit"
          >
            ลงชื่อเข้าใช้
          </button>
          <Link
            href="/signup"
            className=" text-sm text-[#128281] font-bold underline"
          >
            ยังไม่มีบัญชีอีกหรอ สมัครเลย!!{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPanel;
