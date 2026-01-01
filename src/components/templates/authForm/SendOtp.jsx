"use client";

import { useModal } from "@/components/partials/containers/ModalContainer";

import { useState } from "react";
import {isValidMobile} from "../../../core/utils/validation"
import { useSendOtp } from "@/core/services/mutations";
import toast from "react-hot-toast";


function SendOtp() {
  const { isOpen, setIsOpen, step, setStep,mobile,setMobile } = useModal();
  
  const [error,setError] = useState()
  const {isPending,mutate} = useSendOtp()

  const submitHandler = (event)=>{
    event.preventDefault()
    if (isPending) return
    if(!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید")
    setError("")

    mutate({mobile},{
      onSuccess: (data)=>{
        console.log(data);
        toast.success(data?.data?.message)
        toast(data?.data?.code)
        setStep(2)
      },
      onError:(error)=>{
        console.log(error);
      }
    })
  }

  return (
    <div className="fixed top-0 right-0 w-screen h-screen bg-black/20 z-50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[561px] h-[362px] bg-white rounded-[20px]">
        <p className="text-center mt-[59px]">ورود به تورینو</p>
        <form onSubmit={submitHandler}>
          <label className="block mt-[36px] mr-[30px] ml-[363px]">شماره موبایل خود را وارد کنید</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="0912***4253"
            className="w-[491px] h-[54px] mt-[10px] mr-[30px] ml-[40px] bg-white border border-[#00000040] rounded px-4"
          />
          {!!error && <p className="text-red-500 mt-1">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-[491px] h-[54px] mt-[41px] mr-[30px] ml-[40px] bg-[#28A745] text-white rounded"
          >
            {isPending ? "در حال ارسال پیامک..." : "ارسال کد تایید"}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 w-6 h-6"
          >
            X
          </button>
        </form>
      </div>
    </div>
  )
}
export default SendOtp
