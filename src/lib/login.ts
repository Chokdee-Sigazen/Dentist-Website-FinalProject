import connectDB from "@/lib/connectDB";
import { User } from "next-auth";
import User2 from "@/models/User";
import { NextResponse } from "next/server";

type LoginFn = (email: string, password: string) => Promise<User>;

export const login: LoginFn = async (email, password) => {
  try {
    await connectDB();
    if (!email || !password) {
      return null
    }
    const user = await User2.findOne({ email }).select("+password");
    if (!user) {
      return null
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return null
    }
    NextResponse.json({
      success: true,
      login: true,
      token: user.getSignedJwtToken(),
    });
    user.password = "";
    return user;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false, msg: err });
  }
};
