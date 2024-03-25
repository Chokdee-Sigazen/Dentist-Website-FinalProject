"use client";

import CardInfo, { CardInfoProps } from "./CardInfo";

const cardList: CardInfoProps[] = [
  {
    title: "มือหมอเบา แต่ไม่ใช่กับเครื่องมือ",
    subtitle: "ระบบรักโลก ไม่ใช้ยาชา ",
    description:
      "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
    image: "/images/info1.png",
    link: "/",
  },

  {
    title: "เชื่อหมอ หมอเรียนมา",
    subtitle: "ด้วยประสบการณ์มากกว่า 1 วัน ",
    description:
      "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
    image: "/images/info3.png",
    link: "/",
  },
  {
    title: "เครื่องมือสุดทันสมัย",
    subtitle: "มั่นใจเรื่องคุณภาพอย่างแน่นอน",
    description:
      "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
    image: "/images/info2.png",
    link: "/",
  },
];

export default function CardList() {
  return (
    <div className="flex  pt-10 w-[85%] mx-auto  space-x-3">
      {cardList.map((card, index) => {
        return <CardInfo key={index} {...card} />;
      })}
    </div>
  );
}
