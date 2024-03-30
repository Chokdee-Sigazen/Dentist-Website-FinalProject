import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInPage from '@/app/signup/page';
import { signIn } from 'next-auth/react';

// Mock the signIn function
jest.mock('next-auth/react', () => ({
    signIn: jest.fn(),
}));

describe('SignInPage Component', () => {
  //test1 check elements
  test('should renders sign up form', () => {
    const { getByText } = render(<SignInPage />);
    
    expect(getByText('Sign Up')).toBeInTheDocument();
    expect(getByText('ชื่อ :')).toBeInTheDocument();
    expect(getByText('อีเมล :')).toBeInTheDocument();
    expect(getByText('เบอร์โทรศัพท์ :')).toBeInTheDocument();
    expect(getByText('รหัสผ่าน :')).toBeInTheDocument();
    expect(getByText('ยืนยันรหัสผ่านอีกครั้ง :')).toBeInTheDocument();
    expect(getByText('สมัครเลย')).toBeInTheDocument();
  });

  //test2 check signup-login flow
  test('registers user and logs in successfully', async () => {
  // Render the sign-up page
  const { getByText } = render(<SignInPage />);

  // Fill in the sign-up form
  userEvent.type(getByText('ชื่อ :'), 'Tester');
  userEvent.type(getByText('อีเมล :'), 'tester@example.com');
  userEvent.type(getByText('เบอร์โทรศัพท์ :'), '1234567890');
  userEvent.type(getByText('รหัสผ่าน :'), 'password');
  userEvent.type(getByText('ยืนยันรหัสผ่านอีกครั้ง :'), 'password');

  // Submit the sign-up form
  fireEvent.click(getByText('สมัครเลย'));

  // Wait for registration success alert
  await waitFor(() => {
      expect(alert).toHaveBeenCalledWith('Registration Successful!');
  });

  // Check if the login form is rendered
  const emailInput = getByText('อีเมล :');
  const passwordInput = getByText('รหัสผ่าน :');
  const loginButton = getByText('ลงชื่อเข้าใช้');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();

  // Fill in the login form with registered credentials
  userEvent.type(emailInput, 'tester@example.com');
  userEvent.type(passwordInput, 'password');

  // Submit the login form
  fireEvent.click(loginButton);

  // Wait for login function to be called
  await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
      email: 'tester@example.com',
      password: 'password',
      redirect: true,
      callbackUrl: 'https://dentist-website-final-project.vercel.app/',
      });
  });
});

  //test3 check submit with missing info
  test('handles registration errors', async () => {
    const { getByLabelText, getByText } = render(<SignInPage />);
    
    // Fill info
    userEvent.type(getByLabelText('ชื่อ :'), 'Tester');
    userEvent.type(getByLabelText('อีเมล :'), 'tester@example.com');
    userEvent.type(getByLabelText('รหัสผ่าน :'), 'password');
    userEvent.type(getByLabelText('ยืนยันรหัสผ่านอีกครั้ง :'), 'password');
    
    // Submit
    fireEvent.click(getByText('สมัครเลย'));

    // Wait for error alert
    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith("Please fill all the boxes before submit");
    });
  });
});
