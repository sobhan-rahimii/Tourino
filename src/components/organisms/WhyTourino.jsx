import Image from "next/image";
import React from "react";
import queicon from "../../assets/images/icon/queicon.png";
import questionn from "../../assets/images/icon/questionn.png";
import Slider from "./Slider";
import group1 from "../../assets/images/icon/group1.png";
import messageicon from "../../assets/images/icon/messageicon.png";
import rezayaticon from "../../assets/images/icon/rezayaticon.png"

function WhyTourino() {
  return (
    <>
      <div className="w-full mt-[102px]  h-[676px]">
        <div className=" flex  mr-[152px] mt-[94px]   ">
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
        <h1 className="mr-[152px] mt-[32px] ">تور طبیعت گردی</h1>
        <div className="flex   ">
          <p className="w-[517px] h-[264px] font-[400] text-[20px] leading-[220.00000000000003%] mr-[152px] mt-[16px] ">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>

          <Slider />
          {/* border: 1px solid #00000033 */}
        </div>
        <hr className="w-full border border-solid border-[#00000033 ]  " />
      </div>
      <div className="flex">
        <Image
          src={group1}
          width={121.42}
          height={109.03}
          alt="gr"
          className="mr-[152.47px] mt-[23px]"
        />
        <div className="  flex-wrap">
          <h1 className="mt-[30px] mr-[8.11px]">به صرفه ترین قیمت</h1>

          <p className=" w-[202px] mt-[4px] mr-[8.11px] font-[300] text-[16px] leading-[100%]  ">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>

        <div className="flex">
          <Image
            src={messageicon}
            width={109.03}
            height={99.12}
            alt="message"
            className="mr-[66.89px] mt-[31px] "
          />
          <div className="flex-wrap">
            <h1 className="mt-[33px] mr-[8.08px]">پشتیبانی</h1>
            <p className="mt-[4px] mr-[8.08px] w-[248px]  ">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
            </p>
          </div>
          <div className="flex">
            <Image src={rezayaticon} width={104.08} height={104.08} alt="rezayat" className="mt-[32.91px] mr-[66.92px]" />
            <div className="flex-wrap">
                <h1 className="mt-[30px] mr-[8px] ">رضایت کاربران</h1>
                <p className="w-[192px] mt-[4px] mr-[8px]">رضایت بیش از 10هزار کاربر از تور های ما. </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default WhyTourino;
