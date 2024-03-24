"use client";
import { Dentist } from "@/interface";

export default function DentistBlock(props: {
  Dentist: Dentist;
  index: number;
}) {
  return (
    <div
      className={`w-[100%]  ${
        props.index % 2 == 0
          ? "bg-[#F1C2C4] text-[#895355]"
          : "bg-[#A4E0DF] text-[#536C89]"
      }  rounded-md drop-shadow-md my-2 px-4 py-3 `}
    >
      <div className="text-[15pt] font-bold">หมอ {props.Dentist.name}</div>
      <div className="pl-5 text-[12pt]">
        <span className="font-bold">ประสบการณ์ทำงาน : </span>
        {props.Dentist.yearsOfExperience} ปี <br></br>
        <span className="font-bold">เชี่ยวชาญด้าน : </span>
        {props.Dentist.areaOfExpertise &&
        Array.isArray(props.Dentist.areaOfExpertise)
          ? props.Dentist.areaOfExpertise.join(", ")
          : "Nodata"}
      </div>
    </div>
  );
}
