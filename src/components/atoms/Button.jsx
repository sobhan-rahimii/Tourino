"use client"

import React, { useState } from "react";
import LoginIcon from "./icon/LoginIcon";
import profile from "../../assets/images/icon/profile.png"
import Image from "next/image";
import { useModal } from "../partials/containers/ModalContainer";


function Button() {
 const {setIsOpen} = useModal()
  return (
    <div>
      <button onClick={()=>setIsOpen(true)} className="border-[2px] border-solid border-[#28A745] pt-[8px] pb-[8px] mt-[15px] mb-[15px] ml-[126px]  rounded-lg">
        
        <span  className="flex " >
            <Image src={profile}  width={24} height={24} className="mr-[10px]"  alt="profilee"/>
          <p className="pl-[15px] pb-[8px] text-[#28A745]">  ورود | ثبت نام</p>
            </span>
      </button>
    </div>
  );
}

export default Button;
