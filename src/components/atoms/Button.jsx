"use client";

import React, { use, useState } from "react";
import LoginIcon from "./icon/LoginIcon";
import profile from "../../assets/images/icon/profile.png";
import Image from "next/image";
import { useModal } from "../partials/containers/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import user from "../../assets/images/icon/user.png";
import profileuser from "../../assets/images/icon/profileuser.png";
import logout from "../../assets/images/icon/logout.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Button() {
  const { setIsOpen } = useModal();
  const { data } = useGetUserData();
  const router = useRouter();
  const handleLogOut = () => {
    document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    
    window.location.reload()
  };
  return (
    <div>
      {data?.data ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex">
                <span className="flex text-[#28A745]  w-[180px] h-[44px]  mt-[15px] ">
                  {data.data.mobile}
                  <ChevronDown className="text-[#28A745] mr-[2px] " />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[246px] h-[152px] rounded-2xl mt-[74px ] bg-[#FFFFFF] inline-block mr-[1106px] ml-[88px] mt-[1px] ">
              <DropdownMenuItem className="  flex justify-end  disabled:cursor-not-allowed w-[246px] h-[44px]  bg-[#F4F4F4] z-10">
                <div className="text-[#10411B]">{data.data.mobile}</div>
                <Image
                  src={user}
                  alt="user"
                  width={28}
                  height={28}
                  className="bg-[#D9D9D9] rounded-[50%]  inline-block ml-[8px]   "
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex mt-[16px    ] justify-end ">
                <Link href="profile">اطلاعات حساب کاربری</Link>
                <Image
                  src={profileuser}
                  width={20}
                  alt="userprofile"
                  height={20}
                  className="ml-[8px]"
                />
              </DropdownMenuItem>
              <div>
                <hr className=" w-[222px] mt-[8px] mb-[16px ]" />
              </div>
              <DropdownMenuItem
                onClick={handleLogOut}
                className="flex justify-end mt-[16px] pt-[8px] font-yekan text-[#D40000] "
              >
                خروج از حساب کاربری
                <Image src={logout} width={20} alt="logout" height={20} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="border-[2px] border-solid border-[#28A745] pl-[15px]  pt-[8px] pb-[8px] mt-[15px] mb-[15px] mr-[293px] w-[166px] h-[44px]  rounded-lg"
        >
          <span className="flex ">
            <Image
              src={profile}
              width={24}
              height={24}
              className="mr-[10px]"
              alt="profilee"
            />
            <p className="pl-[15px] pr-[4px] w-[108px] h-[28px] pb-[8px] text-[#28A745] font-yekan font-medium font-[18px] font-normal">
              {" "}
              ورود | ثبت نام
            </p>
          </span>
        </button>
      )}
    </div>
  );
}

export default Button;
