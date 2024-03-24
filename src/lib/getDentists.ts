export async function getDentist() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch("https://dentist-website-final-project.vercel.app/api/dentists");
   
    if (!response.ok) {
        throw new Error("Error failed to fetch");
    }
    const data = await response.json()
    return  data;
}