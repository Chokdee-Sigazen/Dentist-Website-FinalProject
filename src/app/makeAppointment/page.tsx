"use client";
import FormPanel from "@/components/MakeAppt/FormPanel";
export default function makeAppt() {
  return (
    <main className="w-[97%] min-h-[87vh] flex flex-col items-center bg-[#FAE3D9] rounded-md mx-auto my-4 px-4 drop-shadow-sm">
      <div className="text-2xl font-bold text-[#895355] font-bolder py-5">
        Make Appointment
      </div>
      <FormPanel />
    </main>
  );
}
