
export  async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    "http://localhost:3000/api/users"
  );
  if (!response.ok) {
    throw new Error("Error failed to fetch");
  }

  return await response.json();
}
