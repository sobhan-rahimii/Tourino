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

export default async function Home({searchParams}) {

  const sParams = await searchParams

  const filters = {}
  if(sParams.originId) filters.originId = sParams.originId
  if(sParams.destinationId) filters.destinationId = sParams.destinationId
  if(sParams.startDate) filters.startDate = sParams.startDate
  if(sParams.endDate) filters.endDate=sParams.endDate
  const tours = await getTours(filters)

  return (
    <>
      <Banner />

      <Title />
      <SearchBox />
      <div className="w-[1440px] mr-[75px] mt-[84px]">
        <CardTitle />
      </div>
      <div className=" w-[1140px] grid grid-cols-4  mt-[11px]  mr-auto ml-auto gap-x-[24.75px] gap-y-[30px]">
        {tours.map((tour) => (
          <TourCards key={tour.id} {...tour} />
        ))}
      </div>
      <BannerPhone />
      {/* <div className="w-[300px]">
      <Slider/>

      </div> */}

      <WhyTourino />
    </>
  );
}
