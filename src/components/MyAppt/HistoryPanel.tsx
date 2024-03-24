import ApptCard , { ApptInfoProps } from "./PastApptCard";

const HistoryList: ApptInfoProps[] = [
    {
        pastDate: "วันที่ 1"
        , work: "เจาะปาก"
        , doctor: "โชค โบกไปมา"
        , createAt: new Date("2022-01-01")
    },
    {
        pastDate: "วันที่ 2"
        , work: "ถอนฟัน"
        , doctor: "อมร นอนไม่พอ"
        , createAt: new Date("2022-01-02")
    }
];

export default function HistoryPanel(){
    return (
        <div className="flex flex-col justify-center w-[80%] mx-auto py-2">
          {HistoryList.map((card, index) => {
            return <ApptCard key={index} {...card} />;
          })}
        </div>
      );
}