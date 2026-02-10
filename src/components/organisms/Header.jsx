"use client";
import { useState } from "react";

import Logo from "../atoms/icon/Logo";
import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
import LogoImg from "../../assets/images/icon/LogoImg.png";
import HambergerMenu from "../atoms/HambergerMenu";
import { HiMenu,HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" w-full lg:max-w-[1200px] h-[74px] mx-auto ">
      <div className="flex justify-between w-full h-full  items-center  ">
        <div className="flex flex-row  items-center   ">
          <button className="lg:hidden w-[20px] h-[16px] mr-[31px] " onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX/> : <HiMenu/>}
          </button>
          <Image
            src={LogoImg}
            width={146}
            height={44}
            alt="logo"
            className="gap-[50px] hidden lg:block"
          />

          <ul className="flex items-center gap-[17.67px] mr-[80px] hidden lg:flex  ">
            <Link href="/">صفحه اصلی</Link>
            <Link href="/">خدمات گردشگری</Link>
            <Link href="/">درباره ما</Link>
            <Link href="/">تماس با ما</Link>
          </ul>
        </div>
        <div className="flex items-center  ">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
