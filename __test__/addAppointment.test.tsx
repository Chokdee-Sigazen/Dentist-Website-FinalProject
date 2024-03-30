import { registerUser } from "@/lib/register";
import { getByTestId, render } from "@testing-library/react";
import FormPanel from "@/components/MakeAppt/FormPanel";
import dayjs from "dayjs";
import { makeAppointment } from "@/lib/makeAppointment";

jest.mock("next-auth/react");

describe("SignInPage Component", () => {
  it("should renders Appointment form", async () => {
    const { getByText, getByTestId } = render(<FormPanel />);
    expect(getByText("หัวข้อ :")).toBeInTheDocument();
    expect(getByText("หมอ :")).toBeInTheDocument();
    expect(getByText("วันที่นัด :")).toBeInTheDocument();
    expect(getByText("เวลานัด :")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should create appointment successfully", async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: true });
    global.fetch = mockFetch;
    const combindedDateTime = dayjs("2022-12-12T12:00:00.000Z");

    const AppointmentDataTest = {
      appointmentDate: new Date(
        dayjs(combindedDateTime.toDate()).toISOString()
      ),
      user: "65e4d7ad0417954f9aa5e869",
      dentist: "65e3ae8f9c6077e4106d99c2",
      finish: false,
      createdAt: new Date(Date.now()),
    };

    await makeAppointment(AppointmentDataTest);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://dentist-website-final-project.vercel.app/api/appointment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentDate: AppointmentDataTest.appointmentDate,
          user: AppointmentDataTest.user,
          dentist: AppointmentDataTest.dentist,
          finish: AppointmentDataTest.finish,
          createdAt: AppointmentDataTest.createdAt,
        }),
      }
    );
  });

  it("should throw error when failed to create appointment when user id wrong", async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: false });
    global.fetch = mockFetch;

    const combindedDateTime = dayjs("2022-12-12T12:00:00.000Z");

    const AppointmentDataTest = {
      appointmentDate: new Date(
        dayjs(combindedDateTime.toDate()).toISOString()
      ),
      user: "no one",
      dentist: "65e3ae8f9c6077e4106d99c2",
      finish: false,
      createdAt: new Date(Date.now()),
    };

    await expect(makeAppointment(AppointmentDataTest)).rejects.toThrow(
      "Failed to make appointment"
    );
  });
  it("should throw error when failed to create appointment when dentist id wrong", async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: false });
    global.fetch = mockFetch;

    const combindedDateTime = dayjs("2022-12-12T12:00:00.000Z");

    const AppointmentDataTest = {
      appointmentDate: new Date(
        dayjs(combindedDateTime.toDate()).toISOString()
      ),
      user: "65e4d7ad0417954f9aa5e869",
      dentist: "no one",
      finish: false,
      createdAt: new Date(Date.now()),
    };

    await expect(makeAppointment(AppointmentDataTest)).rejects.toThrow(
      "Failed to make appointment"
    );
  });
});
