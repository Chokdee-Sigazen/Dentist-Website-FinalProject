import Link from "next/link";

import { motion } from "framer-motion";

export interface CardInfoProps {
  link: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function CardInfo(props: CardInfoProps) {
  return (
    <motion.div
      className="card h-[25rem] w-[33%] bg-[#f6f6f6] rounded-2xl shadow-xl"
      whileHover={{ y: -7 }}
    >
      <div
        className="w-full h-[47%] bg-cover bg-center rounded-t-2xl"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="w-[87%] mx-auto mt-3">
        <p className="text-[#835A5C] font-bold text-[17px] md:text-[22px] line-clamp-2">{props.title}</p>
        <p className=" text-[#B4696D] text-[14px] md:text-[18px] line-clamp-2">{props.subtitle}</p>
        <p className="text-[#372122] text-[11px] md:text-[14px] mb-4 mt-1 line-clamp-3">
          {props.description}
        </p>
        <Link
          href={props.link}
          className="rounded-lg bg-[#A06264] text-[9px] md:text-[12px] hover:bg-[#be7477] transition-colors duration-200 text-white font-bold p-2 px-5"
        >
          อ่านเพิ่มเติม
        </Link>
      </div>
    </motion.div>
  );
}
