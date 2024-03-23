'use client'
import FormPanel from "@/components/MakeAppt/FormPanel";
export default function Booking () {
    return(
        <main className="w-[100%] flex flex-col items-center bg-[#FAE3D9] rounded-md mx-4 my-4 px-4 drop-shadow-sm">
            <div className="text-2xl font-bold text-[#895355] font-bolder py-5">Make Appointment</div>
            <FormPanel/>
        </main>
    );
}