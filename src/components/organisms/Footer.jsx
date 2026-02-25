import Image from "next/image";
import React from "react";
import LoginIcon from "../atoms/icon/LoginIcon";
import LogoImg from "../../assets/images/icon/LogoImg.png";
import aria from "../../assets/images/icon/aria.png";
import samandehi from "../../assets/images/icon/samandehi.png";
import qrcode from "../../assets/images/icon/qrcode.png";
import passenger from "../../assets/images/icon/passenger.png";
import airline from "../../assets/images/icon/airline.png";
import { icons } from "lucide-react";
import Logo from "../atoms/icon/Logo";

function Footer() {
  return (
    <>
      <footer className="w-full">
        <hr className="max-w-[1200px] mx-auto   " />
          <div className=" max-w-[1200px] mr-[] mx-auto flex items-center justify-between  ">
        <div className="flex">
            <ul className="flex-col mr-[126px] mt-[21px] mb-[37px]  ">
              <li>تورینو</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
            <ul className="flex-col mt-[21px] mr-[141px]">
              <li>خدمات مشتریان</li>
              <li>پشتیبانی انلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
        </div>
            <div className="flex-col mt-[30px]  ">
              <Image src={LogoImg} width={146} height={44} alt="logo" />
              <p>تلفن پشتیبانی:021-8574</p>
              <div className="flex mt-[36px] mb-[28px] items-end gap-5  ">
                <Image src={aria} width={68} height={74} alt="aria"/>
                <Image src={samandehi} width={67} height={74} alt="saman"/>
                <Image src={qrcode} width={67} height={74} alt="QR"/>
                <Image src={passenger} width={67} height={74} alt="p"/>
                <Image src={airline} width={67} height={74} alt="m"/>

              </div>
            </div>
          </div>
        <hr className="  w-full border border-solid border-[#00000033]" />
        <p className="text-center mr-auto ml-auto mt-[12px] mb-[12px] ">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </footer>
    </>
  );
}

export default Footer;
