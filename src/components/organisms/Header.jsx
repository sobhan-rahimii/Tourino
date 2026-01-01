import React from "react";
import Logo from "../atoms/icon/Logo";
import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
import LogoImg from "../../assets/images/icon/LogoImg.png"

function Header() {
  return (
    <header>
        <div className="w-screen h-[76px]">

      <div  className="flex"  >
        <Image src={LogoImg} width={146} height={44}  alt="logo" className="mr-[126px] pt-[15px] pb-[15px]"    />
         <div>
          <ul className="flex">
          <li className="mr-[84px] pt-[24px] pt-[25px] ml-[17.67px]">
          <Link href="/"  >صفحه اصلی</Link>
          </li>
          <li className="pt-[24px] pb-[25px]">
          <Link href="/">خدمات گردشگری</Link>
          </li>
          <li className="mr-[17.67px] pt-[24px] pb-[25px] ">
          <Link href="/">درباره ما</Link>
          </li>
          <li className="mr-[17.67px] pt-[24px] pb-[25px]">
          <Link href="/">تماس با ما</Link>
          </li>
          </ul>
          </div> 
         <div className="mr-[293px]">
          <Button />
          </div> 
      </div>
          </div>
    </header>
  );
}

export default Header;
