import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export  async function updatePassword(newPassword: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("User not found");
  }

  const response = await fetch(
    "https://dentist-website-final-project.vercel.app/api/me",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: newPassword,
        email: session.user.email,
        name: session.user.name,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Error failed to fetch");
  }
  return await response.json();
}
