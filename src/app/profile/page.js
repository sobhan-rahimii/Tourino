"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import editt from "../../assets/images/icon/editt.png";
import Image from "next/image";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import calendardate from "../../assets/images/icon/calendardate.png";

import personalSchema from "@/core/utils/personalSchema";
import bankSchema from "@/core/utils/bankSchema";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { da } from "zod/v4/locales";
import editProfile from "@/services/editProfile";
import toast from "react-hot-toast";
import api from "@/core/config/api";

function ProfilePage() {
  const [birthDate, setBirthDate] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [personal, setpersnal] = useState({});

  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    control: controlPersonal,
    formState: { errors: errorsPersonal },
  } = useForm({
    resolver: zodResolver(personalSchema),
    defaultValues: { gender: "" },
  });

  const {
    register: registerBank,
    handleSubmit: handleSubmitBank,
    control: controlBank,
    formState: { errors: errorsBank },
  } = useForm({
    resolver: zodResolver(bankSchema),
  });

   useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/user/profile");

      setpersnal(res?.data);
      console.log(res);
    };
    fetchData();
  }, []);

  const personalSubmit = async (data) => {
    console.log("success", data);
    const result = await editProfile(data);
    if (result) toast.success(result.message);
    console.log(result);
    setpersnal((prev)=>({...prev,...data}))
    setEditMode(null);
    
  };

  const bankSubmit = async(data)=>{
    console.log("successBank",data);
    const result = await editProfile(data)
    if(result) toast.success(result?.message)
    console.log(result);
  setpersnal((prev)=>({...prev,...data}))
    setEditMode(null);

  }

 

  console.log(personal);
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[872px] h-[115px] rounded-[10px] border border-solid border-[#00000033] mr-[32px]  mt-[37px]  ">
          <p className="mr-[12px] mt-[12px]">اطلاعات حساب کاربری</p>
          <div className="flex">
            <p className="mr-[32px] mt-[28px]">شماره موبایل</p>
            <p className="mr-[32px] mt-[30px]">{personal?.mobile}</p>
            <p className="mr-[227px] mt-[30px]">ایمیل</p>
            <p className="mr-[64px] mt-[30px]">-</p>
          </div>
        </div>
        {editMode === "personal" ? (
          <form onSubmit={handleSubmitPersonal(personalSubmit)}>
            <div className="w-[872px] h-[240px] rounded-[10px] border border-solid border-[#00000033] mr-[32px] mt-[24px] ">
              <p className="mt-[12px] mr-[12px]">اطلاعات شخصی</p>
              <div className=" flex flex-wrap">
                <input
                  {...registerPersonal("fullName")}
                  placeholder="نام و نام خانوادگی"
                  className="w-[255px] h-[45px] mr-[16px] mt-[20px] border border-solid border-[#00000080] rounded-[5px]"
                />
                {errorsPersonal.fullName && (
                  <span className="text-red-500 text-sm">
                    {errorsPersonal.fullName.message}
                  </span>
                )}
                <input
                  {...registerPersonal("natinoalCode")}
                  placeholder="کد ملی"
                  className="w-[255px] h-[45px] mr-[28px] mt-[20px] border border-solid border-[#00000080] rounded-[5px] "
                />
                {errorsPersonal.natinoalCode && (
                  <span className="text-red-500 text-sm">
                    {errorsPersonal.natinoalCode.message}
                  </span>
                )}

                <div className="relative">
                  <Controller
                    control={controlPersonal}
                    name="birthDate"
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        calendar={persian}
                        locale={persian_fa}
                        value={birthDate}
                        onChange={(date) => {
                          field.onChange(date?.format("YYY/MM/DD"));
                        }}
                        render={(value, openCalendar) => {
                          return (
                            <div onClick={openCalendar}>
                              <input
                                value={value}
                                placeholder="تاریخ تولد"
                                readOnly
                                className="w-[264px] h-[45px] border border-solid border-[#808080] rounded-[5px] mr-[28px] mt-[20px] pr-8 pt-6 pb-6 "
                              />
                              <Image
                                src={calendardate}
                                width={14}
                                height={14}
                                alt="calendar"
                                className="absolute top-10  right-8 "
                              />
                            </div>
                          );
                        }}
                      />
                    )}
                  />
                </div>
                <Controller
                  control={controlPersonal}
                  name="gender"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className=" flex-row-reverse !w-[255px] !h-[45px] mr-[16px] mt-[16px]">
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
                {errorsPersonal.gender && (
                  <span>{errorsPersonal.gender.message}</span>
                )}
              </div>
              <div className="w-[870px] h-0 rotate-180 border border-solid border-[#00000033] mt-[14px]">
                {" "}
              </div>
              <div className="flex">
                <button
                  className="w-[144px] h-[41px] mr-[541px] mt-[8px] bg-[#28A745] rounded-[5px] text-center"
                  type="submit"
                >
                  تایید
                </button>
                <button
                  className="w-[144px] h-[41px] mr-[12px] mt-[8px] rounded-[5px] border-2 border-solid border-[#28A745]  "
                  onClick={() => setEditMode(null)}
                >
                  انصراف
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="w-[872px] h-[171px] rounded-[10px] border border-solid border-[#00000033] mr-[32px] mt-[24px] ">
            <div className="flex ">
              <p className="mr-[12px] mt-[12px] ">اطلاعات شخصی </p>
              <button onClick={() => setEditMode("personal")} className="flex">
                <Image
                  src={editt}
                  width={16}
                  height={16}
                  alt="edit"
                  className="mr-[630px] mt-[18px] "
                />
                <span className="mr-[8px] mt-[16px]   ">ویرایش اطلاعات</span>
              </button>
            </div>
            <div className="flex">
              <p className="mt-[28px] mr-[12px]">نام و نام خانوادگی</p>
              <span className="mt-[28px] mr-[32px]">{personal?.fullName}</span>
              <p className="mr-[261px] mt-[28px]">کد ملی</p>
              <span className="mr-[50px] mt-[28px]">
                {personal?.natinoalCode}
              </span>
            </div>

            <div className="flex">
              <p className="mr-[12px] mt-[28px]">جنسیت</p>
              <span className="mr-[99px] mt-[28px]">{personal?.gender}</span>
              <p className="mr-[313px] mt-[28px] ">تاریخ تولد</p>
              <span className="mr-[31px] mt-[28px]">{personal?.birthDate}</span>
            </div>
          </div>
        )}

        {editMode === "bank" ? (
          <form onSubmit={handleSubmitBank(bankSubmit)}>
          <div className="w-[872px] h-[179px] border border-solid border-[#00000033] rounded-[10px] mr-[32px] mt-[19px] ">
            <p className="mr-[12px] mt-[12px] ">اطلاعات حساب بانکی</p>
            <div className="flex">
              <input
              {...registerBank("shaba_code")}
              
                placeholder="شماره شبا"
                className="w-[255px] h-[45px] rounded-[5px] border border-solid border-[#00000080] mr-[16px] mt-[20px]"
              />
              <input
              {...registerBank("debitCard_code")}
                placeholder="شماره کارت"
                className="w-[255px] h-[45px] rounded-[5px] border border-solid border-[#00000080] mr-[28px] mt-[20px]"
              />
              <input
              {...registerBank("accountIdentifier")}
                placeholder="شماره حساب"
                className="w-[255px] h-[45px] rounded-[5px] border border-solid border-[#00000080] mr-[28px] mt-[20px]"
              />
            </div>
            <div className="w-[870px] h-0 mt-[14px] rotate-180 border border-solid border-[#00000033]"></div>
            <div className="flex">
              <button
                className="w-[144px] h-[41px] rounded-[5px] text-center bg-[#28A745] mr-[541px] mt-[8px]"
                type="submit"
              >
                تایید
              </button>
              <button
                className="w-[144px] h-[41px] border-2 border-solid border-[#28A745] text-center mr-[12px] mt-[8px] "
                onClick={() => setEditMode(null)}
              >
                انصراف
              </button>
            </div>
          </div>
          </form > 
        ) : (
          <div className="w-[872px] h-[171px] rounded-[10px] border border-solid border-[#00000033] mr-[32px] mt-[24px] ">
            <div className="flex">
              <p className="mr-[12px] mt-[12px]">اطلاعات حساب بانکی</p>
              <button className="flex" onClick={() => setEditMode("bank")}>
                <Image
                  src={editt}
                  width={16}
                  height={16}
                  alt="edit"
                  className="mr-[585px] w-[16px] h-[16px] mt-[18px] "
                />
                <span className="mt-[16px] mr-[14px]">ویرایش اطلاعات</span>
              </button>
            </div>
            <div className="flex">
              <p className="mr-[12px] mt-[28px] text-nowrap">شماره شبا</p>
              <span className="mr-[84px] mt-[39px]">{personal?.shaba_code}</span>
              <p className="mr-[315px] mt-[28px]">شماره کارت</p>
              <span className="mr-[32px] mt-[28px]">{personal?.debitCard_code}</span>
            </div>
            <div className="flex">
              <p className="mr-[12px] mt-[28]   ">شماره حساب</p>
              <span className="mt-[39px] mr-[68px] ">{personal?.accountIdentifier}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfilePage;
