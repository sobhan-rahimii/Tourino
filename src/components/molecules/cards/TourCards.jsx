"use client";

import Image from "next/image";
import Link from "next/link";

function TourCards(props) {
  const { image, title, price } = props;

 
  console.log(props);
  return (
    <div>
      <div className=" flex flex-wrap w-[278.44px] h-[277px] border border-solid border-[#0000001F] rounded-xl">
        <img src={image} />
        <h5 className="mt-[8px] mb-[35px] mr-[8.25px]">{title}</h5>
        <div className="">
          <hr className="border border-solid border-[#D9D9D9 ] w-[278.44px] text-[#D9D9D9]"></hr>
        </div>
        <div className="flex">
          <Link
            href="{`/tours/${tour?.id}`}"
            className="ml-[82px] mb-[8px] mr-[8px] w-[64px] pr-[20px]  pb[1px] pl-[20px  ] h-[25px] rounded-sm bg-[#28A745] mt-[8px]"
          >
            رزرو
          </Link>

          <p className="   inline-block mt-[8px] mb-[8px] ml-[8.44px] ">
            
            {price}تومان
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourCards;
