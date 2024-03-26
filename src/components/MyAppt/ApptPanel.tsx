import { getAppointments } from "@/lib/getAppointments";
import ApptCard, { ApptInfoProps } from "./ApptCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function ApptPanel() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const profile = session.user;
    const role = profile._doc?.role;
    const id = profile._doc?._id;

    let appointments = await getAppointments();
    console.log(appointments.data);
    const appointmentData: ApptInfoProps[] = appointments.data.filter(
      (appointment: ApptInfoProps) => {
        return (
          appointment.finish === false &&
          (role === "user" ? appointment.user === id : true)
        );
      }
    );

    return (
      <div className="flex flex-col justify-center w-[80%] mx-auto py-2">
        {appointmentData.map((card, index) => {
          return <ApptCard key={index} {...card} />;
        })}
      </div>
    );
  }
}
