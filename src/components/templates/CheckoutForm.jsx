"use client";
import Image from "next/image";
import React, { useState } from "react";
import profilecheck from "../../assets/images/icon/profilecheck.png";
import calendardate from "../../assets/images/icon/calendardate.png"

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";



function CheckoutForm() {

    const [birthDate, setBirthDate] = useState();

  return (
    <div className="flex">
      <div className="w-[865] h-[228px] rounded-[10px] border border-solid border-[#00000033] mr-[126px] mt-[36px] ">
        <div className="flex">
          <Image
            src={profilecheck}
            width={24}
            height={24}
            alt="profilecheck"
            className="mr-[20px] mt-[27px]"
          />
          <p className="mt-[27px] mr-[12px ] ">مشخصات مسافر</p>
        </div>
        <div className="flex flex-wrap ">
          <input
            placeholder="نام و نام خانوادگی"
            className="w-[262] h-[50px] border border-solid border-[#00000080] rounded-[5px] mr-[23.35px] mt-[17px]"
          />
          <input
            placeholder="کد ملی"
            className="w-[261px] h-[50px] border border-solid border-[#00000080] rounded-[5px] mr-[16px] mt-[17px]"
          />
          <div className="relative  ">
          <DatePicker calendar={persian} value={birthDate} onChange={setBirthDate} locale={persian_fa} render={(value,openCalendar)=>{
            return (
                <div onClick={openCalendar} className="relative " >
                    <input value={value} placeholder="تاریخ تولد" readOnly className="w-[264px] border border-solid pr-9 pt-14px pb-14px  border-[#00000080] rounded-[5px] h-[50px] mt-[17px] mr-[15.65px]" />
                    <Image src={calendardate} width={16} height={16} alt="calendar"  className="absolute   top-8 right-8 left-8 "  />
                </div>
            )
          }} />

          </div>
          <input
            placeholder="جنسیت"
            className="w-[265px] h-[50px] border border-solid border-[#00000080] rounded-[5px]  mt-[24px] mr-[20px]"
          />
        </div>
      </div>
      <div className="w-[307] h-[228px] rounded-[10px] border border-solid  border-[#00000033] inline-block  ml-[126px] mr-[16px] mt-[36px]"></div>
    </div>
  );
}

export default CheckoutForm;
