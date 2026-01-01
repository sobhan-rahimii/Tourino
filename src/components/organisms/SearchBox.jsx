import React from "react";
import location from "../../assets/images/icon/location.png";
import Image from "next/image";
import global from "../../assets/images/icon/global.png";
import calendar from "../../assets/images/icon/calendar.png";

function SearchBox() {
  return (
    <div className="w-[874px] h-[71px] flex mr-[288px] ml-[278px] mt-[28px] rounded-3xl content-center bg-[#FFFFFF70] border border-solid  border-[#00000026]">
      <div className="flex w-[81px]  ">
        <Image
          src={location}
          width={20}
          height={20}
          alt="globall"
          className="mr-[9.88px] mt-[25.5px] mb-[9.5px] w-[25px] h-[25px]  content-center "
        />
        <label
          id="orogin"
          className=" cursor-pointer mr-[8px] mt-[10.12px] mb-[10.12px] content-center"
        >
          مبدا
        </label>
        <select id="origin" className="appearance-none bg-transparent">
          <option>tehran</option>
        </select>
        <div className="flex mr-[120px] mt-[7.5px] mb-[7.5px]">
          <span className="w-[1px] h-[56px] content-center  bg-[#00000033] "></span>
        </div>

        <div className="flex   ">
          <Image
            src={global}
            alt="globall"
            width={25}
            height={25}
            className="w-[25px] h-[25px] content-center mr-[16px] mb-[25.5px] mt-[25.5px] "
          />
          <label className="mr-[8px] mt-[25.7px] mb-[28.7px] content-center">
            مقصد
          </label>
          <select></select>
          <div className="flex mr-[127px] mt-[7.5px] mb-[7.5px] ml-[16px]">
            <span className="w-[1px] h-[56px] content-center  bg-[#00000033] "></span>
          </div>
        </div>
        <div className=" flex    ">
          <Image
            src={calendar}
            width={20}
            height={20}
            alt="calendaee"
            className="   w-[20px] h-[20px] mt-[25.5px] mr-[18px] mb-[25.5px]  "
          />
          <label
            className="mt-[25.66px] mb-[25.66px] mr-[8px] items-center "
            htmlFor=""
          >
            تاریخ
          </label>
          <button className="mt-[10px] mb-[10px] mr-[127px] ml-[10px] pt-[15.99] pb-[15.99px] pr-[55.74px] pl-[55.74px] h-[51px]  rounded-2xl w-[190px] bg-[#28A745]">
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
