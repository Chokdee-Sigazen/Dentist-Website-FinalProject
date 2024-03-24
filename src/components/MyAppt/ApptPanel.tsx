import ApptCard , { ApptInfoProps } from "./ApptCard";

const ApptList: ApptInfoProps[] = [
    {
        pastDate: "วันที่ 1"
        , work: "เจาะปาก"
        , doctor: "โชค โบกไปมา"
        , createAt: new Date("2022-01-01")
    }
];

export default function ApptPanel(){
    return (
        <div className="flex flex-col justify-center w-[80%] mx-auto py-2">
          {ApptList.map((card, index) => {
            return <ApptCard key={index} {...card} />;
          })}
        </div>
      );
}