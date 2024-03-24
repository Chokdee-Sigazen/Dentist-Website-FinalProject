export default function Banner() {
  return (
    <section className=" relative overflow-hidden h-[65vh] w-full bg-[url('/images/hospital.png')] bg-cover bg-center bg-no-repeat">
      {/* //bg-gradient-to-r from-[#DCEFED] to-[#8DC9C1] */}
      <div className="w-[100%] h-full flex mx-auto">
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        <div className="ps-[280px]">
           <p className="font-bold text-[45px] text-[#2F7F7E] center">Morfun ganpat</p>
          <p className="text-[#2F7F7E] text-[35px]">หมอฟันการแพทย์</p>
          <p className=" mt-10">
            ลูกค้า 9 ใน 10 ยืนยัน{" "}
            <span className="text-[#D80000] font-bold">เจ็บจริง</span>
          </p>
           <section className="flex mt-4 space-x-2">
            <button className="h-10 w-28 hover:bg-[#55a9a7] transition-colors duration-150 bg-[#61C0BF] rounded-xl text-white font-bold p-2 px-3">
              Get Start
            </button>
            <button className="h-10 w-28 hover:bg-[#55b1a0] transition-colors duration-150 bg-[#61C0AF] rounded-xl text-white font-bold p-2 px-3">
              Sign In
            </button>
          </section>
        </div>
        </div>
        <section className="h-[] w-[80%] bg-[url('/images/doctor1.png')] mx-auto bg-contain bg-no-repeat bg-center "></section> 
        </div>

  );
    </section>
    
  );
}
