import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <section className="fixed z-50 top-0 left-0 bg-[#FFFFFF] justify-between flex h-14 w-full py-2 px-6">
      <Link href="/">
        <img
          src="/images/logo.png"
          className="h-[100%] rounded-md drop-shadow-md"
        ></img>
      </Link>
      <section className="flex space-x-2 text-[9pt] md:text-[11pt] lg:text-[13pt] items-center">
        <Link
          href="/makeAppointment"
          className="p-2 text-[#835A5C] font-bold hover:underline"
        >
          Create Appointment
        </Link>
        <Link
          href="/dentistList"
          className="p-2 text-[#835A5C] font-bold hover:underline"
        >
          Dentist List
        </Link>
        <Link
          href="/myAppointment"
          className="p-2 text-[#835A5C] font-bold hover:underline"
        >
          My Appointment
        </Link>
        {session ? (
          <div>Hello {session.user.name}</div>
        ) : (
          <div className=" flex space-x-2">
            <Link
              href="/login"
              className="flex items-center justify-center h-10 p-2 font-bold hover:bg-[#7db4b3] transition-colors duration-200 rounded-full text-white px-5 bg-[#72A3A2]"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="flex items-center justify-center h-10 p-2 font-bold hover:bg-[#7db4b3] transition-colors duration-200 rounded-full text-white px-5 bg-[#72A3A2]"
            >
              Sign up
            </Link>
          </div>
        )}
      </section>
    </section>
  );
}
