import { Appointment } from "@/interface"; // Import the Appointment interface from your interface file
import { getAppointments } from "./getAppointments";

export async function updateAppointment(ApptData: Appointment): Promise<void> {
    try {
        const allAppt = await getAppointments();
        const ApptID = allAppt.find(ApptData)._id;
        if(!ApptID){console.error("Cant find ID");}
        console.log(ApptID);
        const response = await fetch("https://dentist-website-final-project.vercel.app/api/appointment", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({//Fix me plz
                appointmentDate: ApptData.appointmentDate,
                user: ApptData.user,
                dentist: ApptData.dentist,
                finish: ApptData.finish,
                createdAt: ApptData.createdAt,
                appointmentId: ApptID
            })
           
        });

        if (!response.ok) {
            throw new Error("Failed to update appointment");
        }

    } catch (error) {
        console.error("Error updating appointment  : ", error);
        throw error;
    }
}
