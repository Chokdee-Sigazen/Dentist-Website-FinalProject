import { getAppointments } from "@/lib/getAppointments";
import PastApptCard , { ApptInfoProps } from "./PastApptCard";

export default async function PastApptPanel() {

  let appointments = await getAppointments();
  const appointmentData: ApptInfoProps[] = appointments.data.filter(
    (appointment: ApptInfoProps) => appointment.finish
  );

  
    return (
        <div className="flex flex-col justify-center w-[80%] mx-auto py-2">
          {appointmentData.map((card, index) => {
            return <PastApptCard key={index} {...card} />;
          })}
        </div>
      );
}