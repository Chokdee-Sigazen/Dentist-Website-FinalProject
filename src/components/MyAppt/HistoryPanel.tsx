import { getAppointments } from "@/lib/getAppointments";
import PastApptCard, { ApptInfoProps } from "./PastApptCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function PastApptPanel() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const profile = session.user;
    const role = profile._doc?.role;
    const id = profile._doc?._id;

    let appointments = await getAppointments();

    const appointmentData: ApptInfoProps[] = appointments.data.filter(
      (appointment: ApptInfoProps) => {
        return (
          appointment.finish === true &&
          (role === "user" ? appointment.user === id : true)
        );
      }
    );

    return (
      <div className="flex flex-col justify-center w-[80%] mx-auto py-2">
        {appointmentData.map((card, index) => {
          return <PastApptCard key={index} {...card} />;
        })}
      </div>
    );
  }
}
