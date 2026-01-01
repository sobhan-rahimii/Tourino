"use client";

import { useModal } from "@/components/partials/containers/ModalContainer";
import { useCheckOtp } from "@/core/services/mutations";
import { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react18-input-otp";

function CheckOtpForm() {
  const [code, setCode] = useState("");
  const { setStep, mobile,setIsOpen } = useModal();
  const {isPending,mutate} = useCheckOtp()
  const handleChange = (otp) => setCode(otp);

  const submitHandler = async (event) => {
    event.preventDefault()
    if(isPending) return
    mutate({mobile,code},{
      onSuccess:(data)=>{
        setStep(1)
        setIsOpen(false)
        toast.success("ورود به حساب کاربری")

      },
      onError:(error)=>{
        console.log(error);
      }
    })

  };

  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center ">
        <div className=" relative w-[561px] h-[362] bg-white rounded-[20px]">
          <p className="text-center mt-[59px] mr-auto ml-auto">
            کد تایید را وارد کنید.
          </p>
          <form onSubmit={submitHandler}>
            <label className=" w-[295px] h-[25px] mt-[8px] mr-auto ml-auto">
              کد تایید به شماره {mobile} ارسال شد
            </label>
            <div
              style={{
                direction: "ltr",
                marginLeft: "35px",
                // marginRight: "116px",
                marginTop: "18px",
              }}
            >
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                inputStyle={{
                  border: "1px solid silver ",
                  borderRadius: "5px",
                  width: "58px",
                  height: "53px",
                  margin: "12px",
                }}
              />
            </div>

            <button
              type="submit"
              onClick={() => setStep(2)}
              className="w-[491px] h-[54px] mt-[41px] mr-[30px] ml-[40px] bg-[#28A745] pr-auto pl-auto pt-auto pb-auto "
            >
              {isPending ? "در حال اعتبارسنجی...":"ورود به تورینو"}
            </button>
            <button
              onClick={() => setStep(1)}
              className="absolute w-[24px] h-[24px] top-0 left-0   "
            >
              -
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOtpForm;
