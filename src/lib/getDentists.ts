export async function getDentist() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch("http://localhost:3000/api/dentists");
   
    if (!response.ok) {
        throw new Error("Error failed to fetch");
    }
    const data = await response.json()
    console.log(data)
    return  data;
}