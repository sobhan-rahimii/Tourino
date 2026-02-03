"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilecheck from "../../assets/images/icon/profilecheck.png";
import calendardate from "../../assets/images/icon/calendardate.png";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import order from "@/services/order";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "@/core/utils/checkoutSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import getUserBasket from "@/services/getUserBasket";
import { sp } from "@/core/utils/formatNumber";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { da } from "zod/v4/locales";
import { date } from "zod";

function CheckoutForm() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [basket, setBasket] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { gender: "" },
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const data = await getUserBasket();
        setBasket(data);
      } catch (err) {
        console.log(err.message);
        setBasket(null);
      }
    };
    fetchBasket();
  }, []);
  console.log(basket);

  const checkoutHandler = async (event) => {
    event.preventDefault();
    const result = await order({ fullName, nationalCode, birthDate, gender });
    if (result) toast.success(result.message);
    console.log(result);
    router.push("/payment?status=success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="w-[865] h-[228px] rounded-[10px] border border-solid border-[#00000033] mr-[126px] mt-[36px] ">
          <div className="flex">
            <Image
              src={profilecheck}
              width={24}
              height={24}
              alt="profilecheck"
              className="mr-[20px] mt-[27px]"
            />
            <p className="mt-[27px] mr-[12px ] ">مشخصات مسافر</p>
          </div>
          <div className="flex flex-wrap ">
            <input
              {...register("fullName")}
              placeholder="نام و نام خانوادگی"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-[262] h-[50px] border border-solid border-[#00000080] rounded-[5px] mr-[23.35px] mt-[17px]"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
            <input
              {...register("nationalCode")}
              placeholder="کد ملی"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
              className="w-[261px] h-[50px] border border-solid border-[#00000080] rounded-[5px] mr-[16px] mt-[17px]"
            />
            {errors.nationalCode && (
              <span className="text-red-500 text-sm">
                {errors.nationalCode.message}
              </span>
            )}
            <div className="relative  ">
              <Controller
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    calendar={persian}
                    locale={persian_fa}
                    value={field.value || ""}
                    onChange={(date) => {
                      field.onChange(date);
                    }}
                    render={(value, openCalendar) => {
                      return (
                        <div onClick={openCalendar} className="relative ">
                          <input
                            value={value}
                            placeholder="تاریخ تولد"
                            readOnly
                            className="w-[264px] border border-solid pr-9 pt-14px pb-14px  border-[#00000080] rounded-[5px] h-[50px] mt-[17px] mr-[15.65px]"
                          />
                          <Image
                            src={calendardate}
                            width={16}
                            height={16}
                            alt="calendar"
                            className="absolute   top-8 right-8 left-8 "
                          />
                        </div>
                      );
                    }}
                  />
                )}
              />
              {errors.birthDate && (
                <span className="text-red-500 text-sm">
                  {errors.birthDate.message}
                </span>
              )}
            </div>

            <div>
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <Select onValueChange={(valu) => setGender(valu)}>
                    <SelectTrigger className=" flex-row-reverse !w-[265px] !h-[50px]  mr-[20px] mt-[24px] border border-solid border-[#00000080] rounded-[5px]">
                      <SelectValue placeholder="جنسیت" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className="flex-row-reverse" value="male">
                        مرد
                      </SelectItem>
                      <SelectItem className="flex-row-reverse" value="female">
                        زن
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
            </div>

          </div>
        </div>
        <div className="w-[307] h-[228px] rounded-[10px] border border-solid  border-[#00000033] inline-block  ml-[126px] mr-[16px] mt-[36px]">
          <div className="flex">
            <h1 className="mr-[12px] mt-[16px] font-semibold text-[24px]">
              {basket?.title}
            </h1>
            <p className="mr-[95px] mt-[22px] font-normal text-[16px] text-[#282828] backdrop-opacity-[50]">
              5 روز و 4 شب
            </p>
          </div>
          <div className="w-[307px] h-0 border border-dashed border-[#00000080] mt-[24px] "></div>
          <div className="flex">
            <p className="mt-[29px] mr-[12px] font-normal text-[16px]">
              قیمت نهایی
            </p>
            <div className="flex mr-[91px] mt-[30px] ">
              <p className="">{sp(basket?.price)} </p>
              <span>تومان</span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-[20px] mr-[12px] ml-[12px] w-[283px] h-[56px] bg-[#28A745] rounded-[10px] inline-block pr-[56.5px] pt-[9px] pb-[9px] pl-[56.5px] text-center text-[24px] font-normal text-[#FFFFFF]"
            >
              ثبت و خرید نهایی
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
