import { registerUser } from "@/lib/register"; 
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Mock the useRouter hook
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// Mock the useSession hook
jest.mock("next-auth/react");

describe('SignInPage Component', () => {
  test('registers user and login successfully', async () => {
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

    // Mock the useRouter function to return a push function
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    const LoginDataTest = {
      email : RegisterDataTest.email,
      password : RegisterDataTest.password
    }

    // Call the signIn function
    await signIn("credentials", {
      email: LoginDataTest.email,
      password: LoginDataTest.password,
      retdirect: true,
      callbackUrl: "https://dentist-website-final-project.vercel.app/",
    });

    // Assert that useRouter.push is called with the expected URL
    expect(pushMock).toHaveBeenCalledWith("/");

    // Check if the router push function was called with the expected URL
    expect(pushMock).toHaveBeenCalledWith("/expected-url");
  });
});
