import Review from "./Review";

export default function AboutUs() {
  return (
    <div className="relative z-40">
      <div className=" bg-gradient-to-t from-[#FFB6B9] to-transparent w-full h-[20vh]"></div>
      <div className="bg-[#FFB6B9] w-full  pt-10 items-center text-center relative">
        <section className="  w-[85%] mx-auto  text-center">
          <p className="text-[#744143] text-[42px] font-bold">
            รู้จักเรามากขึ้น
          </p>
          <video className=" h-[75vh] w-full bg-[#B5686B] my-10 rounded-xl"></video>
          <p className="text-[#744143] text-[32px] font-bold text-start">
            ที่อยู่คลินิค
          </p>
          <div className=" h-[60vh] w-full bg-[#B5686B] mt-10 mb-5 rounded-xl"></div>
          <p className="text-[#744143] text-[25px]  text-start">
            99/11 หมู่ 1 ต.บางเสาธง อ.เมือง จ.สมุทรปราการ 10270
          </p>
          <Review></Review>
        </section>
      </div>
    </div>
  );
}