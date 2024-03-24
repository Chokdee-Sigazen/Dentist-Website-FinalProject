import AboutUs from "@/components/Homepage/AboutUs";
import Archive from "@/components/Homepage/Archive";
import Banner from "@/components/Homepage/Banner";
import CardList from "@/components/Homepage/CardList";

export default async function Home() {
  return (
    <div className="bg-[#FFB6B9] min-h-[200vh]">
      <Banner></Banner>
      <div className=" bg-[#FAE3D9] rounded-2xl w-[98%] mx-auto">
        <section className="w-full h-full mx-auto">
          <CardList></CardList>
          <Archive></Archive>
          <AboutUs></AboutUs>
        </section>
      </div>
    </div>
  );
}
