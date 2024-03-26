export async function getMe() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch('https://dentist-website-final-project.vercel.app/api/me');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
  }