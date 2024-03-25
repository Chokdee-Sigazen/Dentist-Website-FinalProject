import { getDentist } from "@/lib/getDentists";
export interface ApptInfoProps {
    appointmentDate: string;
    work: string| null;
    dentist : string;
    createdAt: Date;
    finish: boolean;
}

export default async function PastApptCard(props: ApptInfoProps) {

    const dentistData = await getDentist();
    const dentistName = dentistData.data.find((dentist: { id: string }) => dentist.id === props.dentist)?.name;
    const dentistWork = dentistData.data.find((dentist: { id: string }) => dentist.id === props.dentist)?.areaOfExpertise;
    const date = new Date(props.appointmentDate).toLocaleString()
    const createdDate = new Date(props.createdAt).toLocaleString()

    return (
        <div className="w-[100%] h-[170px] bg-[#61C0BF] text-[#FFFFFF] rounded-md drop-shadow-md my-2 px-4 py-3 ">
            <div className="text-[20pt] font-bold">นัดที่กำลังจะมาถึง {date}</div>
            <div className=" pl-5 text-[16pt]"> 
                <span className="font-bold">หัวข้อ : </span>{dentistWork} <br></br>
                <span className="font-bold">หมอ : </span>{dentistName} <br></br>
                <span className="font-bold">สร้างเมื่อ : </span>{createdDate} <br></br>
                <span className="font-bold">เสร็จ : </span>{props.finish ? "เสร็จแล้ว" : "ยังไม่เสร็จ"} <br></br>
            </div>
        </div>
    );
}


