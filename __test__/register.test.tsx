import { registerUser } from "@/lib/register";
import SignInPage from "@/app/signup/page";
import { getByTestId, render } from "@testing-library/react";

jest.mock("next-auth/react");

describe('SignInPage Component', () => {
    it('should renders sign up form', async () => {
        const { getByText, getByTestId } = render(<SignInPage />);
        expect(getByText('Sign Up')).toBeInTheDocument();
        expect(getByTestId('Name')).toBeInTheDocument();
        expect(getByTestId('Email')).toBeInTheDocument();
        expect(getByTestId('Tel')).toBeInTheDocument();
        expect(getByTestId('Password')).toBeInTheDocument();
        expect(getByTestId('ConPass')).toBeInTheDocument();
        expect(getByText('สมัครเลย')).toBeInTheDocument();
      });
    

    it('should registers user and login successfully', async () => {
        const mockFetch = jest.fn().mockResolvedValue({ ok: true });
        global.fetch = mockFetch; 

        const RegisterDataTest = {
            name: 'Tester',
            email: 'tester@example.com',
            tel: '0123456789',
            password: '123456789',
            confirmPassword: '123456789',
        };

        await registerUser(RegisterDataTest);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('https://dentist-website-final-project.vercel.app/api/users', {
            mode: "no-cors",    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: RegisterDataTest.name,
                email: RegisterDataTest.email,
                tel: RegisterDataTest.tel,
                password: RegisterDataTest.password
            })
        })
    })
});