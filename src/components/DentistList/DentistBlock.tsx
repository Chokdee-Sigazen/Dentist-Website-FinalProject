"use client";
import { Dentist } from "@/interface";

export default function DentistBlock(props: {
  Dentist: Dentist;
  index: number;
}) {
  return (
    <div
      className={`w-[100%] h-[20vh] ${
        props.index % 2 == 0
          ? "bg-[#F1C2C4] text-[#895355] bg-gradient-to-r from-[#ffdddf]"
          : "bg-[#A4E0DF] text-[#536C89] bg-gradient-to-r from-[#DCEFE7]"
      }  rounded-md drop-shadow-md my-2 px-4 py-3 `}
    >
      <div className="text-[25pt] font-bold"> {props.Dentist.name}</div>
      <div className="pl-5 text-[12pt]">
        <p className="font-bold  text-[20px]">
          ประสบการณ์ทำงาน :{" "}
          <span className="font-normal">
            {props.Dentist.yearsOfExperience} ปี{" "}
          </span>
        </p>
        <p className="font-bold text-[20px]">
          เชี่ยวชาญด้าน :{" "}
          <span className="font-normal">
            {props.Dentist.areaOfExpertise &&
            Array.isArray(props.Dentist.areaOfExpertise)
              ? props.Dentist.areaOfExpertise.join(", ")
              : "Nodata"}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
