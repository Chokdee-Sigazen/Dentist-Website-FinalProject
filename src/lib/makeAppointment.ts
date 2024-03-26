import { Appointment } from "@/interface"; // Import the Appointment interface from your interface file

export async function makeAppointment(appointmentData: Appointment): Promise<void> {
    try {
        const response = await fetch("https://dentist-website-final-project.vercel.app/api/appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointmentData)
        });

        if (!response.ok) {
            throw new Error("Failed to make appointment");
        }

    } catch (error) {
        console.error("Error making appointment  : ", error);
        throw error;
    }
}
