const fetch = require("node-fetch");

export default async function userLogIn(
  userEmail: string,
  userPassword: string
) {
  const response = await fetch(
    "https://dentist-website-final-project.vercel.app/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }
  return await response.json();
}
