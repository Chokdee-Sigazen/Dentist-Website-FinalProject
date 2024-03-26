
import {RegisterUser} from "../interface"

export async function registerUser(registerUser : RegisterUser): Promise<void> {
    try {
        const register = {
            name: registerUser.name,
            email: registerUser.email,
            tel: registerUser.tel,
            password: registerUser.password,
            
        }
        if(register.password !== registerUser.confirmPassword){
            throw new Error("Password and Confirm Password do not match");
        }
        const response = await fetch("https://dentist-website-final-project.vercel.app/api/users", {   
            mode: "no-cors",    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(register)
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        console.log("Register success")
    } catch (error) {
        console.error("Error making appointment:", error)
        throw error;
    }
}