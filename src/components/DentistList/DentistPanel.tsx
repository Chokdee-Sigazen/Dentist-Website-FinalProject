import DentistBlock from "./DentistBlock";
import { Dentist } from "@/interface";

export default function DentistPanel(props: { DentistList: Dentist[] }) {
  return (
    <div className="flex flex-col justify-center w-[85%] mx-auto py-2">
      {props.DentistList.map((card, index) => {
        return <DentistBlock key={index} index={index} Dentist={card} />;
      })}
    </div>
  );
}
