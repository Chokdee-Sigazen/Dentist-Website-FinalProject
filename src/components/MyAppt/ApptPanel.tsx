import { getAppointments } from "@/lib/getAppointments";
import { getDentist } from "@/lib/getDentists";
import ApptCard , { ApptInfoProps } from "./ApptCard";

export default async function ApptPanel() {

  let appointment = await getAppointments();
  const appointmentData: ApptInfoProps[] = appointment.data;
  console.log(appointmentData);
  const dentistData = getDentist();
  
    return (
        <div className="flex flex-col justify-center w-[80%] mx-auto py-2">
          {appointmentData.map((card, index) => {
            return <ApptCard key={index} {...card} />;
          })}
        </div>
      );
}