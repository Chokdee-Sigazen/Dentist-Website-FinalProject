import { useState } from "react";
import ChangePasswordPopup from "@/components/Profile/ChangePasswordPopup";
import Profile from "@/components/Profile/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import getUserProfile from "@/lib/getUserProfile";

const MockProfile = {
  image: "/images/Patient/review1.png",
  name: "นายสมศักดิ์ อาสาสมัคร",
  tel: "098-848-1994",
  email: "chokdee50@gmail.com",
};

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const profile = session.user;
    console.log(profile);
    if (profile) {
      return <Profile {...profile} />;
    }
  }
}
