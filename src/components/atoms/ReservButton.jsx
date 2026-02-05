"use client";

import addToBasket from "@/core/services/addToBasket";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function ReservButton({id}) {
    
    const router = useRouter()
    const reservHandler = async (event)=>{
        event.preventDefault()
        const result = await addToBasket(id)
        console.log(result);
        if(result) toast.success(result.message)
        router.push(`/checkout/${id}`)


        

    }
  return (
    <button
      className="mr-[343px] mt-[26px] bg-[#28A745] w-[204px] h-[56px] rounded-[10px] pr-[46px] pl-[46px] pt-[9px]  pb-[9px] text-center font-[24px] font-normal"
      onClick={reservHandler}
    >
      رزرو و خرید
    </button>
  );
}

export default ReservButton;
