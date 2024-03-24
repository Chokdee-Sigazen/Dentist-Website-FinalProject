export interface ApptInfoProps {
    pastDate: string;
    work: string;
    doctor : string;
    createAt: Date;
}

export default function ApptCard(props: ApptInfoProps) {
    return (
        <div className="w-[100%] h-[170px] bg-[#FFB6B9] text-[#FFFFFF] rounded-md drop-shadow-md my-2 px-4 py-3 ">
            <div className="text-[20pt] font-bold">นัดที่กำลังจะมาถึง {props.pastDate}</div>
            <div className=" pl-5 text-[16pt]"> 
                <span className="font-bold">หัวข้อ : </span>{props.work} <br></br>
                <span className="font-bold">หมอ : </span>{props.doctor} <br></br>
                <span className="font-bold">สร้างเมื่อ : </span>{props.createAt.toLocaleDateString()} <br></br>
            </div>
        </div>
    );
}

