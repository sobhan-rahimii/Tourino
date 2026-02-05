import getTourDetails from "@/core/services/getTourDetails";
import Image from "next/image";
import React from "react";
import arbil from "../../../assets/images/icon/arbil.png";

import usertick from "../../../assets/images/icon/usertick.png";
import map from "../../../assets/images/icon/map.png";
import star from "../../../assets/images/icon/star.png";
import routing from "../../../assets/images/icon/routing.png";
import calendarr from "../../../assets/images/icon/calendarr.png";
import calendars from "../../../assets/images/icon/calendars.png";
import bus from "../../../assets/images/icon/bus.png";
import profileuserr from "../../../assets/images/icon/profileuserr.png"
import security from "../../../assets/images/icon/security.png"
import Link from "next/link";
import { sp } from "@/core/utils/formatNumber";
import ReservButton from "@/components/atoms/ReservButton";



async function TourDetails({ params }) {
  const { id } =await params;
  const data = await getTourDetails(id)
  console.log(data);
  return (
    <div className="w-[1188px] h-[427px] border border-solid boder-[#00000033] rounded-[10px] mt-[36px] mr-auto ml-auto bg-[#FFFFFF] ">
      <div className="flex  ">
        <Image
          src={data.image}
          width={397}
          height={265}
          alt="arbil"
          unoptimized={true}
          className="mr-[20px] mt-[29px]   "
        />
        <div className="flex-col">
          <h1 className="font-bold text-[32px] mt-[29px] mr-[24px]">
            {data.title}
          </h1>
          <p className="font-[20px] font-normal mr-[24px] mt-[16px]">5روز</p>
          <div className="flex">
            <Image
              src={usertick}
              width={24}
              height={24}
              alt="user-tick"
              className="mt-[35.5px] mr-[32px]"
            />
            <p className="mt-[32px] mr-[8px] content-center font-normal font-[20px] text-[#7D7D7D]">
              تور لیدر از مبدا
            </p>
            <Image
              src={map}
              width={24}
              height={24}
              alt="map"
              className="mr-[32px] w-[24px] h-[24px] mt-[35.5px]"
            />
            <p className="mr-[8px] mt-[32px] font-normal text-[20px] text-[#7D7D7D]">
              برنامه سفر
            </p>
            <Image
              src={star}
              width={24}
              height={24}
              alt="star"
              className="w-[24px] h-[24px] mr-[32px] mt-[35.5px]"
            />
            <p className="mr-[8px] mt-[32px] font-normal font-[20px] text-[#7D7D7D]">
              تضمین کیفیت
            </p>
          </div>
          <div className="flex">
            <span className="mt-[32px] mr-[24px]">{sp(data.price)} تومان</span>
            <ReservButton id={id} />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <Image
              src={routing}
              width={20}
              height={20}
              alt="routing"
              className="mr-[28px] mt-[42px]"
            />
            <p className="mt-[38px] mr-[8px] text-[#444444] font-normal text-[18px]">
              مبدا
            </p>
          </div>
          <p className="mr-[30px] mt-[12px] font-medium text-[#000000] text-[16px]">
            {data.origin.name}
          </p>
        </div>

        <div className="w-[84px] h-0 border border-solid border-[#00000040] rotate-90 mt-[65px] mb-[20px] mr-[30px]"></div>

        <div className="flex flex-col">
          <div className="flex">
            <Image
              src={calendarr}
              width={20}
              height={20}
              alt="routing"
              className="mr-[2px] mt-[42px]"
            />
            <p className="mt-[38px] mr-[8px] text-[#444444] font-normal text-[18px]">
              تاریخ رفت
            </p>
          </div>
          <p className="mr-[2px] mt-[12px] text-[#000000] font-normal text-[16px] ">
            مهرماه
          </p>
        </div>

        <div className="w-[84px] h-0 border border-solid border-[#00000040] rotate-90 mt-[65px] mb-[20px] mr-[2px]"></div>

        <div className="flex flex-col">
          <div className="flex">
            <Image
              src={calendars}
              width={20}
              height={20}
              alt="calendars"
              className="mt-[42px] mr-[2px]"
            />
            <p className="mt-[38px] mr-[8px]">تاریخ برگشت</p>
          </div>
          <p className="mr-[2px] mt-[12px]">28مهرماه</p>
        </div>

        <div className="w-[84px] h-0 border border-solid border-[#00000040] rotate-90 mt-[65px] mb-[20px] mr-[2px]"></div>

        <div className="flex flex-col">
          <div className="flex">
            <Image
              src={bus}
              width={20}
              height={20}
              alt="bus"
              className="mt-[42px]"
            />
            <p className="mt-[38px] mr-[8px]">حمل و نقل</p>
          </div>
          <p className="mt-[16px]">{data.fleetVehicle}</p>
        </div>

        <div className="w-[84px] h-0 border border-solid border-[#00000040] rotate-90 mt-[65px] mb-[20px] mr-[2px]"></div>

        <div className="flex flex-col">
          <div className="flex">
            <Image src={profileuserr} width={20} height={20} alt="profileuser" className="mt-[42px] " />
            <p className="mr-[8px] mt-[38px]">ظرفیت</p>

          </div>
          <p className="mt-[16px]">حداکثر {data.availableSeats} نفر</p>

        </div>
        <div className="w-[84px] h-0 border border-solid border-[#00000040] rotate-90 mt-[65px] mb-[20px] mr-[2px]"></div>

        <div className="flex flex-col">
          <div className="flex">
            <Image src={security} width={20} height={20} alt="security" className="mt-[42px]" />
            <p className="mt-[38px] mr-[8px]">بیمه</p>

          </div>
          <p className="mt-[16px]">بیمه 50 هزار دیناری</p>

        </div>

      </div>
    </div>
  );
}
export default TourDetails;
