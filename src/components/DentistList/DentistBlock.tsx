export interface DentistInfoProps {
    name: string;
    yearsOfExperience: number;
    areaOfExpertise : string[]
}

export default function DentistBlock(props: DentistInfoProps) {
    return (
        <div className="w-[100%] bg-[#F1C2C4] text-[#895355] rounded-md drop-shadow-md my-2 px-4 py-3 ">
            <div className="text-[15pt] font-bold">หมอ {props.name}</div>
            <div className="pl-5 text-[12pt]"> 
                <span className="font-bold">ประสบการณ์ทำงาน : </span>{props.yearsOfExperience} ปี <br></br>
                <span className="font-bold">เชี่ยวชาญด้าน : </span>{props.areaOfExpertise.join(', ')}
            </div>
        </div>
    );
}