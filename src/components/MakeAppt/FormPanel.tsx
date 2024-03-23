import { Select, MenuItem } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export default function FormPanel(){
    return(
        <div className="bg-[#F1C2C4] rounded-md px-10 py-10 justify-center space-y-10 font-bold text-[#895355] text-[14pt] drop-shadow-sm mx-5 my-5">
            <div className="flex flex-row grid grid-cols-2">
                หัวข้อ :
                <Select variant="standard" name="type" id="type" className="h[2em]">
                    <MenuItem value="test1">TestType</MenuItem>
                </Select>
            </div>

            <div className="flex flex-row grid grid-cols-2">
                หมอ :
                <Select variant="standard" name="dentist" id="dentist" className="h[2em]">
                    <MenuItem value="test1">TestDentist</MenuItem>
                </Select>
            </div>

            <div className="flex flex-row items-center grid grid-cols-2">
                วันที่นัด :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white"/>
                </LocalizationProvider>
            </div>

            <div className="flex flex-row items-center grid grid-cols-2">
                เวลานัด :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker className="bg-white"/>
                </LocalizationProvider>
            </div>

            <button name="Book Vaccine" className="w-[100%] block rounded-md bg-[#61C0BF] 
                hover:bg-cyan-700 px-3 py-2 text-white shadow-md">Submit
            </button>
        </div>
    );
}