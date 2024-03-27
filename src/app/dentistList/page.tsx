import DentistPanel from "@/components/DentistList/DentistPanel";
import { getDentist } from "@/lib/getDentists";
import { useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function DentistList() {
  const dentistList = await getDentist();
  return (
    <main className="w-[97%] flex flex-col items-center bg-[#FAE3D9] shadow-xl rounded-md mx-auto my-4 px-4 drop-shadow-sm">
      <div className="text-2xl font-bold text-[#895355] font-bolder py-5">
        Dentist List
      </div>
      <DentistPanel DentistList={dentistList.data}></DentistPanel>
    </main>
  );
}
