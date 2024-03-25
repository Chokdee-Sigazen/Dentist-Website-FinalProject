"use client";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";

const reviewData: {
  name: string;
  review: string;
  rating: number;
  img: string;
}[] = [
  {
    name: "นายสมศักดิ์ อาสาสมัคร 1",
    review:
      "สุดยอดมากครับ หมอทุกคนใจดีมาก ผมจากเดิมเป็นคนที่ไม่ค่อยมีความรู้เรื่องฟันเท่าไหร่ แต่คุณหมดเขาอธิบายเรื่องต่างๆ พร้อมทั้งเสนอวิธีการป้องกันอย่างละเอียดเลยครับ แนะนำมากๆๆๆๆๆๆๆๆๆ",
    rating: 5,
    img: "/images/Patient/review1.png",
  },
  {
    name: "นายสมศักดิ์ อาสาสมัคร 2",
    review:
      "ขอบคุณคุณหมออมรมากค่ะ ตอนแรกทางนี้ก็เดาว่าหมอจะมือหนักรึเปล่า แต่เห็นจากข้างนอกแล้ว ไม่ต้องเดาแล้วค่ะ มือหมอหนักจริง แต่อย่างน้อย คุณหมอก็ให้กำลังใจตลอดทางพลางเรียกชื่อไปด้วย ติดอยู่อย่างเดียว ทำไมหมอเรียกชื่อตัวเองแต่ไม่เรียกชื่อหนู",
    rating: 3,
    img: "/images/Patient/review2.png",
  },
];

export default function Review() {
  return (
    <div className="text-[#744143] text-[32px] font-bold text-start mt-16">
      <p>รีวิวจากผู้ใช้งาน</p>
      <section className="flex space-x-2 mt-10 ">
        <div className="hidden md:block h-[60vh] w-[35%] bg-[url('/images/doctor2.png')] bg-contain bg-center bg-no-repeat "></div>
        <div className=" h-[70vh] w-[100%] md:w-[65%] ">
          <div className=" space-y-5">
            {reviewData.map((review, index) => {
              return (
                <motion.section
                  whileHover={{ x: 10 }}
                  key={index}
                  className={` flex px-10 py-2 rounded-2xl w-full shadow-lg bg-gradient-to-l ${
                    index % 2 == 0
                      ? "bg-[#ffffff] text-[#79494B] from-[#f1f1f1]"
                      : "bg-[#ffffff] text-[#79494B] from-[#f1f1f1]"
                  }`}
                >
                  <div
                    className="h-32 w-32 rounded-full bg-cover bg-center  my-auto"
                    style={{ backgroundImage: `url(${review.img})` }}
                  >
                    {" "}
                  </div>
                  <div className="ml-8 w-[70%]  ">
                    <p className="text-[22px] md:text-[26px] font-[600]">{review.name}</p>
                    <div className="text-[16px] md:text-[18px] font-[500] flex ">
                      <span className=" text-[25px] mr-2">&#34;</span>
                      <p className="mt-3 line-clamp-4">{review.review}</p>
                    </div>
                    <Rating
                      name="read-only"
                      value={review.rating}
                      className={`${
                        index % 2 == 0 ? "text-[#79494B]" : "text-[#79494B]"
                      }`}
                      readOnly
                    />
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
