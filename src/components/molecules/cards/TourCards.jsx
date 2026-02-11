"use client";

import { sp } from "@/core/utils/formatNumber";
import Image from "next/image";
import Link from "next/link";

function TourCards(props) {
  const {id, image, title, price } = props;

 
  console.log(props);
  return (
    <div>
      <div className=" flex flex-wrap w-full h-[277px] lg:w-[278.44px] lg:h-[277px] border border-solid border-[#0000001F] rounded-xl">
        <img src={image} className="w-full lg:" />
        <h5 className="mt-[8px] mr-[8.25px]">{title}</h5>
        <div className="w-full">
          <hr className=" w-full h-0 border border-solid border-[#0000001F]   mt-[6px]  lg:w-[278.44px] lg:mt-[35px] text-[#D9D9D9]"></hr>
        </div>
        <div className="flex">
          <Link
            href={`/tours/${id}`}
            className="  lg:ml-[82px] lg:mb-[8px] lg:mr-[8px] lg:w-[64px] lg:pr-[20px]  lg:pb[1px] lg:pl-[20px  ] w-[99px] h-[29px] text-center  lg:h-[25px] rounded-sm bg-[#28A745] lg:mt-[8px] mr-[8.44px] mt-[6px] "
          >
            رزرو
          </Link>

          <p className=" font-normal text-base text-blue-600  inline-block lg:mt-[8px] lg:mb-[8px] lg:mr-[30px] mr-[102px] mt-[8px] ">
            
          {sp(price)}
          <span className="text-xs font-normal ]">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourCards;
