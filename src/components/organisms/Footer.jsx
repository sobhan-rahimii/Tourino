import Image from "next/image";
import React from "react";
import LoginIcon from "../atoms/icon/LoginIcon";
import LogoImg from "../../assets/images/icon/LogoImg.png";
import aria from "../../assets/images/icon/aria.png";
import samandehi from "../../assets/images/icon/samandehi.png";
import qrcode from "../../assets/images/icon/qrcode.png";
import passenger from "../../assets/images/icon/passenger.png";
import airline from "../../assets/images/icon/airline.png";

function Footer() {
  return (
    <>
      <footer className="">
        <hr className="w-[1188px] mr-[126px] ml-[126px] " />
        <div className=" flex  mr-[126px]">
          <div>
            <ul>
              <li className="mt-[21px]">تورینو</li>
              <li className="mt-[24px]">درباره ما</li>
              <li className="mt-[8px]">تماس با ما</li>
              <li className="mt-[8px]">چرا تورینو</li>
              <li className="mt-[8px]">بیمه مسافرتی</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="mt-[21px] mr-[141px]">خدمات مشتریان</li>
              <li className="mt-[24px] mr-[143px]">پشتیبانی آنلاین</li>
              <li className="mt-[8px] mr-[126px]">راهنمای خرید</li>
              <li className="mr-[131px] mt-[8px]">راهنمای استرداد</li>
              <li className="mt-[8px] mr-[100px]">پرسش و پاسخ</li>
            </ul>
          </div>
          <div className="  flex-wrap items-start  ">
            <Image
              src={LogoImg}
              width={146}
              height={44}
              alt="logo"
              className="mr-[661px] mt-[30px]"
            />
            <div className="">
              <p className="mt-[20px] mr-[686px]  ">تلفن پشتیبانی:021-8574</p>
              <div className="flex">
                <Image
                  src={airline}
                  width={78}
                  height={74}
                  alt="airline"
                  className="mr-[393px] mt-[153px] mb-[28px]"
                />
                <Image
                  src={passenger}
                  width={71}
                  height={74}
                  alt="pass"
                  className="mr-[32px] mt-[153px] mb-[28px]"
                />
                <Image
                  src={qrcode}
                  width={68}
                  height={74}
                  alt="pass"
                  className="mr-[32px] mt-[153px] mb-[28px]"
                />
                <Image
                  src={samandehi}
                  width={67}
                  height={74}
                  alt="pass"
                  className="mr-[32px] mt-[153px] mb-[28px]"
                />
                <Image
                  src={aria}
                  width={68}
                  height={74}
                  alt="pass"
                  className="mr-[32px] mt-[153px] mb-[28px]"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="  w-full border border-solid border-[#00000033]" />
        <p className="text-center mr-auto ml-auto mt-[12px] mb-[12px] ">کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </footer>
    </>
  );
}

export default Footer;
