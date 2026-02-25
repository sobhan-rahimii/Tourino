import Image from "next/image";
import React from "react";
import queicon from "../../assets/images/icon/queicon.png";
import questionn from "../../assets/images/icon/questionn.png";
import Slider from "./Slider";
import group1 from "../../assets/images/icon/group1.png";
import messageicon from "../../assets/images/icon/messageicon.png";
import rezayaticon from "../../assets/images/icon/rezayaticon.png";

const features = [
  {
    id: 1,
    title: "به صرفه ترین قیمت",
    desc: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
    icon: group1,
  },
  {
    id: 2,
    title: "پشتیبانی",
    desc: "پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر شما.",
    icon: messageicon,
  },
  {
    id: 3,
    title: "رضایت کاربران",
    desc: "رضایت بیش از ۱۰ هزار کاربر از تور های ما.",
    icon: rezayaticon,
  },
];

function WhyTourino() {
  return (
    <>
      <div className="w-full mt-[102px]  h-[676px]">
        <div className=" flex  lg:mr-[152px] lg:mt-[94px] mr-[47px]   ">
          <Image
            src={queicon}
            width={59}
            height={68}
            alt="que"
            className="w-[59px] h-[68px]   "
          />
          {/* <span className="absolute right-[21px] top-[9px] left-[22px] buttom-[22px] font-[900] text-[38px] ">
            ؟
          </span> */}

          <span className="mr-[15px] content-center ">چراتورینو؟</span>
        </div>
        <h1 className="mr-[152px] mt-[32px] hidden lg:block ">
          تور طبیعت گردی
        </h1>
        <div className="lg:flex flex-row flex-col   ">
          <p className="w-[517px] h-[264px] font-[400] hidden lg:block text-[20px] leading-[220.00000000000003%] mr-[152px] mt-[16px] ">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
          <div className=" inline-block mr-[31px] mt-[16px]">
            <Slider />
          </div>
          {/* border: 1px solid #00000033 */}
        </div>
        <hr className="w-full border border-solid border-[#00000033 ]  " />
      </div>
      <div></div>
      <div className="flex  flex-col text-wrap mr-[150px]  lg:max-w-[1200px] w-full  lg:flex-row justify-center lg:mt-[33px]  ml-[29px] gap-[40px] ">
        <div className="flex  items-center w-full lg:w-auto">
          <Image
            src={group1}
            width={121.42}
            height={109.03}
            alt="gr"
            className=""
          />
          <div className="  flex flex-col">
            <h1 className="">به صرفه ترین قیمت</h1>

            <p className=" max-w-[180px]  ">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full lg:w-auto">
          <Image
            src={messageicon}
            width={109.03}
            height={99.12}
            alt="message"
            className=" "
          />
          <div className="flex flex-col ">
            <h1 className="">پشتیبانی</h1>
            <p className=" max-w-[180px] ">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src={rezayaticon}
            width={104.08}
            height={104.08}
            alt="rezayat"
          />
          <div className="flex flex-col">
            <h1 className="">رضایت کاربران</h1>
            <p className="max-w-[180px]">رضایت بیش از 10هزار کاربر از تور های ما. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyTourino;
