import React from 'react';
import { getDentist } from "@/lib/getDentists";

export interface ApptInfoProps {
    user: string;
    appointmentDate: string;
    work: string | null;
    dentist: string;
    createdAt: Date;
    finish: boolean;
}

export default async function ApptCard(props: ApptInfoProps) {

    const dentistData = await getDentist();
    const dentistName = dentistData.data.find((dentist: { id: string }) => dentist.id === props.dentist)?.name;
    const dentistWork = dentistData.data.find((dentist: { id: string }) => dentist.id === props.dentist)?.areaOfExpertise;
    const date = new Date(props.appointmentDate).toLocaleString()
    const createdDate = new Date(props.createdAt).toLocaleString()


    return (
        <div className="w-[100%] h-auto bg-[#FFB6B9] text-[#FFFFFF] rounded-md drop-shadow-md my-2 px-4 py-3 ">
            <svg
                className="w-[47px] h-[47px] text-white-800 dark:text-white absolute top-0 right-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                    clipRule="evenodd"
                />
                <path
                    fillRule="evenodd"
                    d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                    clipRule="evenodd"
                />
            </svg>
            <svg
                className="w-[47px] h-[47px] text-white-800 dark:text-white absolute bottom-0 right-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18 17.94 6M18 18 6.06 6"
                />
            </svg>

            <div className="text-[16pt] sm:text-[18pt] md:text-[20pt] font-bold">นัดที่กำลังจะมาถึง : {date}</div>
            <div className="pl-5 text-[13pt] sm:text-[15pt] md:text-[18pt]">
                <span className="font-bold">หัวข้อ : </span>{dentistWork} <br></br>
                <span className="font-bold">หมอ : </span>{dentistName} <br></br>
                <span className="font-bold">สร้างเมื่อ : </span>{createdDate} <br></br>
            </div>
             </div>
    );
}
