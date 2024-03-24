
export default async function getUsers() {
  const response = await fetch(
    "http://localhost:3000/api/users"
  );
  if (!response.ok) {
    throw new Error("Error failed to fetch");
  }

  return await response.json();
}
