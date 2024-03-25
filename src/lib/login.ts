export async function login(username: string, password: string) {
    try {
        const response = await fetch('https://dentist-website-final-project.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Login failed');
        }

        const responseData = await response.json();
        
        // Assuming the response contains authentication token or other relevant data
        const authToken = responseData.token;
        
        // Do something with the authentication token, like storing it in local storage or session
        localStorage.setItem('authToken', authToken);

        console.log('Login successful');
        return responseData; // Optionally return any additional data from the response
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}
