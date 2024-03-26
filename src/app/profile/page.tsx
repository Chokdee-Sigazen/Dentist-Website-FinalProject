import { useState } from "react";
import ChangePasswordPopup from "@/components/Profile/ChangePasswordPopup";
import Profile from "@/components/Profile/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import getUserProfile from "@/lib/getUserProfile";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const profile = session.user;
    profile.tel = profile._doc?.tel;
    console.log(profile);
    if (profile) {
      return <Profile {...profile} />;
    }
  }
}
