import Review from "./Review";

export default function AboutUs() {
  return (
    <div className="relative z-40">
      <div className=" bg-gradient-to-t from-[#ffd4d6] to-transparent w-full h-[20vh]"></div>
      <div className="bg-gradient-to-t from-[#FFB6B9] to-[#ffd4d6]  pt-10 items-center text-center relative">
        <section className="  w-[85%] mx-auto  text-center">
          <p className="text-[#744143] text-[42px] font-bold">
            รู้จักเรามากขึ้น
          </p>
          <video className="bg-[#B5686B] my-10 rounded-xl items-center" controls autoPlay muted loop>
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <p className="text-[#744143] text-[32px] font-bold text-start">
            ที่อยู่คลินิค
          </p>
          <div className=" h-[80vh] w-full bg-[#B5686B] mt-10 mb-5 rounded-xl">
            <iframe className="rounded-xl"
              width="100%"
              height="520"
              title="Clinic Map"
              src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(Your+Business+Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
              />
          </div>
          <p className="text-[#744143] text-[25px]  text-start">
            99/11 หมู่ 1 ต.บางเสาธง อ.เมือง จ.สมุทรปราการ 10270
          </p>
          <Review></Review>
        </section>
      </div>
    </div>
  );
}
