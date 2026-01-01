"use client"

import { useModal } from "@/components/partials/containers/ModalContainer"

function SendOtp() {
    const {isOpen,setIsOpen,step,setStep} = useModal()
  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center ">
        <div className=" relative w-[561px] h-[362] bg-white rounded-[20px]">
      
          <p className="text-center mt-[59px] mr-auto ml-auto">
            ورود به تورینو
          </p>
          <h1 className=" w-[168px] mt-[36px] mr-[30px] ml-[363px]">
            شماره موبایل خود را وارد کنید
          </h1>
          <input placeholder="0912***4253" className="w-[491px] h-[54px] mr-[30px] ml-[40px] mt-[10px] bg-[#FFFFFF] border border-solid border-[#00000040]"  />
          
          <button onClick={()=> setStep(2)} className="w-[491px] h-[54px] mt-[41px] mr-[30px] ml-[40px] bg-[#28A745] pr-auto pl-auto pt-auto pb-auto ">ارسال کد تایید</button>
          <button onClick={()=> setIsOpen(false)} className="absolute w-[24px] h-[24px] top-0 left-0   ">X</button>
        </div>
      </div>
    </div>
  )
}

export default SendOtp