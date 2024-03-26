
export  async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    "https://dentist-website-final-project.vercel.app/api/users"
  );
  if (!response.ok) {
    throw new Error("Error failed to fetch  ");
  }

  return await response.json();
}
