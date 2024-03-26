"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button className="bg-zinc-50 p-2" onClick={() => signOut()}>
      {" "}
      Sign Out
    </button>
  );
}
