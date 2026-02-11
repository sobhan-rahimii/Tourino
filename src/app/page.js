import CardTitle from "@/components/atoms/CardTitle";
import Title from "@/components/atoms/Title";
import TourCards from "@/components/molecules/cards/TourCards";
import Banner from "@/components/organisms/Banner";
import BannerPhone from "@/components/organisms/BannerPhone";
import SearchBox from "@/components/organisms/SearchBox";
import Slider from "@/components/organisms/Slider";
import WhyTourino from "@/components/organisms/WhyTourino";
import getTours from "@/core/services/getTours";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home({ searchParams }) {
  const sParams = await searchParams;

  const filters = {};
  if (sParams.originId) filters.originId = sParams.originId;
  if (sParams.destinationId) filters.destinationId = sParams.destinationId;
  if (sParams.startDate) filters.startDate = sParams.startDate;
  if (sParams.endDate) filters.endDate = sParams.endDate;
  const tours = await getTours(filters);

  return (
    <>
      <Banner />

      <Title />
      <SearchBox />
      <div className="w-full  lg:max-w-[1200px] mr-[31px] ml-[265px] lg:mr-[75px] mt-[84px] ">
        <CardTitle />
      </div>
      <div className=" w-full  lg:max-w-[1200px] lg:grid lg:grid-cols-4 gap-[24px]  flex flex-col mt-[11px]  pl-[31px] pr-[31.56px] lg:mr-auto lg:ml-auto">
        {tours.map((tour) => (
          <TourCards key={tour.id} {...tour} />
        ))}
      </div>
      <BannerPhone />

      <WhyTourino />
    </>
  );
}
