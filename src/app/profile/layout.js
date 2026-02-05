"use client"
import AuthProvider from "@/components/partials/providers/AuthProvider";
import Link from "next/link";
import React from "react";
import profilee from "../../assets/images/icon/profilee.png";
import Image from "next/image";
import sun from "../../assets/images/icon/sun.png"
import convert from "../../assets/images/icon/convert.png"

import { usePathname } from "next/navigation";

function ProfileLayout({ children }) {
  const pathName = usePathname()

  const getActiveStyle = (path)=>{
    return pathName === path ? "bg-[#28A74540] text-[#28A745]" :"bg-with"
  }

  return (
    <AuthProvider>
      <div className="flex">

      <div className="w-[284px] h-[170px] rounded-[10px] mr-[126px] mt-[36px] border border-solid border-[#00000033] ">
        <ul className="flex flex-col">
          <li className={getActiveStyle("/profile")}>
            <Link href="/profile" className="flex">
              <Image
                src={profilee}
                width={20}
                height={20}
                alt="profile"
                className="mr-[12px] mt-[21px] mb-[18px]"
                />
              <span className="mt-[20px] mb-[17px] mr-[8px]">پروفایل</span>
            </Link>
          </li>
          <div className="w-[258px]  mr-[14px] ml-[12px] mt-[7px] h-0 rotate-180 border border-solid border-[#00000033]  "></div>
          <li className={getActiveStyle("/profile/my-tours")}>
            <Link href="/profile/my-tours" className="flex">
            <Image src={sun} width={20} height={20} alt="sun" className="mr-[12px] mt-[17px]" />
            <span className="mt-[16px] mr-[8px]">تور های من</span>
            </Link>
          </li>
          <div className="w-[258px] mr-[14px] ml-[12px] mt-[7px] h-0 rotate-180 border border-solid border-[#00000033]  "></div>
          <li className={getActiveStyle("/profile/transactions")}>
            <Link href="/profile/transactions" className="flex">
            <Image src={convert} width={20} height={20} alt="convert" className="mr-[12px] mt-[17px]"  />
            <span className="mt-[16px] mr-[8px]">تراکنش ها</span>
            </Link>
          </li>
        </ul>
      </div>
      <main className="flex ">
      {children}

      </main>
                </div>
    </AuthProvider>
  );
}

export default ProfileLayout;
