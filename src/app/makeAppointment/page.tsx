'use client'
import { Select, MenuItem } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export default function Booking () {
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 bg-orange-100 rounded-md mx-4 my-2">
            <div className="text-2xl font-medium text-red-800 font-bolder py-5">Make Appointment</div>
            <div className="bg-red-100 rounded-md px-10 py-10 justify-center space-y-10">
                <div className="flex flex-row">
                    หัวข้อ :
                    <Select variant="standard" name="type" id="type"className="h[2em] w-[200px]">
                        <MenuItem value="test1">TestType</MenuItem>
                    </Select>
                </div>

                <div className="flex flex-row">
                    หมอ :
                    <Select variant="standard" name="dentist" id="dentist" className="h[2em] w-[200px]">
                        <MenuItem value="testDentist">TestDentist</MenuItem>
                    </Select>
                </div>

                <div className="flex flex-row">
                    วันที่นัด :
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white"/>
                    </LocalizationProvider>
                </div>

                <div className="flex flex-row">
                    เวลานัด :
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker label="Time Appt" className="bg-white"/>
                    </LocalizationProvider>
                    
                </div>

                <button name="Book Vaccine" className="w-[100%] block rounded-md bg-cyan-500 
                    hover:bg-cyan-700 px-3 py-2 text-white shadow-md">Submit</button>
                <div></div>
            </div>
        </main>
    );
}