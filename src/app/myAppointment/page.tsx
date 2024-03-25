import ApptPanel from "@/components/MyAppt/ApptPanel";
import HistoryPanel from "@/components/MyAppt/HistoryPanel";

export default function MyAppointment () {
    return(
        <main className="w-[100%] flex flex-col items-center bg-[#FAE3D9] rounded-md mx-4 my-4 px-4 pt-5 drop-shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-[#895355] font-bolder py-5">My Appointment</div>
            <ApptPanel />
            <div className="py-5"></div>
            <div className="w-[80%] h-px border-2 border-white"></div>
            <div className="text-2xl md:text-3xl font-bold text-[#895355] font-bolder py-5 pt-10">ประวัติการนัด</div>
            <HistoryPanel />
        </main>
    );
}