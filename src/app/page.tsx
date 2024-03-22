import Archive from "@/components/Homepage/Archive";
import Banner from "@/components/Homepage/Banner";
import CardList from "@/components/Homepage/CardList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFB6B9] min-h-[200vh]">
      <Banner></Banner>
      <div className="m-5 bg-[#FAE3D9] rounded-2xl w-[98%] mx-auto h-[200vh]">
        <section className="w-[86%] h-full mx-auto">
          <CardList></CardList>
          <Archive></Archive>
        </section>
      </div>
    </div>
  );
}
