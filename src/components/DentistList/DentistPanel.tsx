import DentistBlock, { DentistInfoProps } from "./DentistBlock";

const DentistList: DentistInfoProps[] = [
    {
        name: "อมร นอนไม่พอ",
        yearsOfExperience: 2,
        areaOfExpertise :["ถอนฟัน", "ทำฟันปลอม"]
    },
    {
        name: "ไกด์ สไลด์เดอร์",
        yearsOfExperience: 0,
        areaOfExpertise :["ทำร้ายคนไข้", "ปั่นราคา"]
    },
    {
        name: "โชค โบกไปมา",
        yearsOfExperience: 0,
        areaOfExpertise :["เขียนโค้ด", "ทำเว็บหมอฟัน"]
    },
    {
        name: "ต้นกล้า ผ้าไม่ซัก",
        yearsOfExperience: 99,
        areaOfExpertise :["ทุกอย่างเท่าที่โลกใบนี้จะมี"]
    }
];

export default function DentistPanel(){
    return (
        <div className="flex flex-col justify-center w-[85%] mx-auto py-2">
          {DentistList.map((card, index) => {
            return <DentistBlock key={index} {...card} />;
          })}
        </div>
      );
}