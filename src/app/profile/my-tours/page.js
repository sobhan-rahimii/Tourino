"use client";
import React, { useEffect, useState } from "react";

import tourname from "../../../assets/images/icon/tourname.png";
import Image from "next/image";

import airplane from "../../../assets/images/icon/airplane.png";
import buss from "../../../assets/images/icon/buss.png";
import api from "@/core/config/api";
import formatPersianDate from "@/core/utils/formatPersianDate";
import { sp } from "@/core/utils/formatNumber";

function MyTours() {
  const [mytours, setMyTours] = useState([]);
  const travelIcon = {
    Airplane: {
      label: "سفر با هواپیما",
      icon: airplane,
    },
    Bus: {
      label: "سفر با اتوبوس",
      icon: buss,
    },
  };

  useEffect(() => {
    const fetchMyTours = async () => {
      const res = await api.get("/user/tours");
      setMyTours(res?.data);
    };
    fetchMyTours();
  }, []);

  console.log(mytours);

  return (
    <div className="w-[872px] h-fit border border-solid border-[#00000033] rounded-[10px] mr-[18px] mt-[36px]">
      {mytours?.map((tour,index) => {
        const currentFleet =
          travelIcon[tour.fleetVehicle] || travelIcon.Airplane;

        return (
          <div key={`${tour.id}-${index}`} className="flex felx-col">
            <div className="w-[832px] h-[168px] border border-solid border-[#00000033] rounded-[10px] mr-[20px] mt-[13px]">
              <div className="flex ">
                <Image
                  src={tourname}
                  width={24}
                  height={24}
                  alt="tour"
                  className="mr-[16px] mt-[17px]"
                />
                <p className="mr-[8px] mt-[18px]">{tour?.title}</p>
                {currentFleet.icon&&  (
                  <Image
                    src={currentFleet.icon}
                    width={24}
                    height={24}
                    alt="image"
                    className="w-[24px] h-[24px] mr-[155px] mt-[16px] "
                  />
                )}

                <p className="mr-[8px] mt-[16px]">{currentFleet.label}</p>
              </div>
              <div className="flex">
                <p className="mr-[18px] mt-[23px]">
                  {tour?.origin?.name} به {tour?.destination?.name}
                </p>
                <p className="mr-[15px] mt-[23px]">
                  {formatPersianDate(tour?.startDate)}
                </p>
                <p className="mt-[20px] mr-[35px]">تاریخ برگشت</p>
                <p className="mt-[20px] mr-[20px]">{formatPersianDate(tour?.endDate)}</p>
              </div>
              <div className="w-[830px] h-0 border mt-[18px] border-solid border-[#00000033] rotate-180"></div>
              <div className="flex">
                <p className="mr-[18px] mt-[20px]">شماره تور</p>
                <span className="mt-[20px] mr-[8px]">102095404</span>
                <div className="w-[30px] h-[0] rotate-90 border border-solid border-[#00000033] mt-[27px] mr-[4px] "></div>
                <p className="mr-[22px] mt-[20px]">مبلغ پرداخت شده</p>
                <p className="mr-[8px] mt-[20px]">{sp(tour?.price)}</p>
                <span className="mt-[20px] mr-[8px]">تومان</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyTours;
