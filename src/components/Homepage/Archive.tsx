"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const imageList: string[] = [
  "/images/PictureSlide/PictureSlide1.png",
  "/images/PictureSlide/PictureSlide2.png",
  "/images/PictureSlide/PictureSlide3.png",
  "/images/PictureSlide/PictureSlide4.png",
  "/images/PictureSlide/PictureSlide1.png",
  "/images/PictureSlide/PictureSlide2.png",
  "/images/PictureSlide/PictureSlide3.png",
  "/images/PictureSlide/PictureSlide4.png",
];
export default function Archive() {
  return (
    <div className="mt-10">
      <p className=" text-[#A25D60] font-bold text-[42px]">ภาพผลงาน</p>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className={`w-screen  p-10`}
      >
        {imageList.map((image, index) => {
          return (
            <motion.div
              whileHover={{ y: -7 }}
              key={index}
              className="w-72 h-[30rem] mx-3 bg-cover bg-center rounded-3xl shadow-lg"
              style={{ backgroundImage: `url(${image})` }}
            ></motion.div>
          );
        })}
      </Marquee>
    </div>
  );
}
