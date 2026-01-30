"use client";
import React from "react";
import { useRouter } from "next/navigation";
import location from "../../assets/images/icon/location.png";
import Image from "next/image";
import global from "../../assets/images/icon/global.png";
import calendar from "../../assets/images/icon/calendar.png";
import { DatePicker } from "zaman";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import api from "@/core/config/api";
import { Key } from "lucide-react";
import useSearchFilters from "@/core/hooks/useSearchFilters";

function SearchBox() {
  const [cities, setCities] = useState([]);

  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    dateRange,
    setDateReng,
    applyFilters,
  } = useSearchFilters(cities);

  const uniqueOrigins = Array.from(
    new Map(cities?.map((item) => [item.origin.name, item.origin])).values()
  );

  useEffect(() => {
    api
      .get("/tour")
      .then((res) => setCities(res.data))
      .catch((error) => console.log(error));
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    applyFilters()
  };
  const formatDate = (date) => new Intl.DateTimeFormat("fa-IR").format(date);

  return (
    <form onSubmit={submitHandler}>
      <div className=" flex  w-[874px] h-[74px] border border-solid border-[#00000026] rounded-[20px] mr-[288px] ml-[278px] mt-[28px] ">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[81px] h-[39px]">
            <div className="flex">
              <Image
                className="mr-[17.88px] mt-[25.5px]"
                src={location}
                width={20}
                height={20}
                alt="location"
              />
              <span className="mt-[26.12px] mr-[8px] ">
                {origin ? origin.name : "مبدا"}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" mt-[32px] mr-[288px] ml-[934px] flex-col w-[218px] h-fit border border-solid border-[#00000033]  rounded-[8px] bg-[#FFFFFF]">
            <DropdownMenuLabel className="text-right">
              <span className="w-[218px] h-[35px] ">پر تردد</span>
            </DropdownMenuLabel>
            {uniqueOrigins.map((city) => (
              <React.Fragment key={city.name}>
                <DropdownMenuItem
                  onClick={() => setOrigin(city)}
                  className="flex justify-end"
                >
                  <div className="flex">
                    <span className="mr-[8px]">{city.name}</span>
                    <Image
                      className="mr-[12px]"
                      src={location}
                      width={20}
                      height={20}
                      alt="loca"
                    />
                  </div>
                </DropdownMenuItem>
              </React.Fragment>
            ))}
            {/* <hr className="w-[222px]" /> */}
          </DropdownMenuContent>
        </DropdownMenu>

        <p className=" rotate-90 h-0   w-[56px] border-[1px] border-solid border-[#00000033] inline-block mr-[127px] mt-[35.5px]     "></p>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[104px] h-[56px]">
            <div className="flex  ">
              <Image
                className="    mr-[8px] mt-[25px] mb-[25px] ml-[] "
                src={global}
                width={20}
                height={20}
                alt="location"
              />
              <span className="mt-[26.12px] mr-[8px] ">
                {destination ? destination.destination.name : "مقصد"}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="   mr-[80px]  flex-col w-[218px] h-fit border border-solid border-[#00000033]  rounded-[8px] bg-[#FFFFFF]">
            <DropdownMenuLabel className="text-right">
              <span className="w-[218px] h-[35px] mr-[] ">
                {destination ? destination.destination.name : "مقصد"}
              </span>
            </DropdownMenuLabel>
            {cities.map((city2) => (
              <DropdownMenuItem
                key={city2.id}
                onClick={() => setDestination(city2)}
                className="flex justify-end"
              >
                <div className="flex">
                  <span className="mr-[8px]">{city2.destination.name}</span>
                  <Image
                    className="mr-[12px]"
                    src={location}
                    width={20}
                    height={20}
                    alt="loca"
                  />
                </div>
              </DropdownMenuItem>
            ))}

            <hr className="w-[222px]" />
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="w-[56px] h-0 border border-solid inline-block mt-[35.5px]   border-[#00000033] rotate-90 mr-[135px] ml-[8px]  "></span>
        <Popover>
          <PopoverTrigger>
            <div className="flex ">
              <Image
                src={calendar}
                width={20}
                height={20}
                alt="calender"
                className="mr-[0px] mt-[9.5px] mb-[9.5px]"
              />
              <span className="mr-[8px] mt-[8px] mb-[8px] ">
                {dateRange?.from
                  ? dateRange.to
                    ? `${formatDate(dateRange.from)} تا ${formatDate(
                        dateRange.to
                      )}`
                    : formatDate(dateRange.from)
                  : "تاریخ"}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="z-[999]">
            <div className="">
              <DatePicker range onChange={(e) => setDateReng(e)} />
            </div>
          </PopoverContent>
        </Popover>

        <button
          className=" inline-block mr-[135px] w-[190px] h-[51px] ml-[10px] mt-[10px] mb-[10px]   h-[51px] bg-[#28A745] rounded-[16px] pr-[53.5px] pl-[53.5px] pt-[11.5px] pb-[11.5px] "
          type="submit"
        >
          جستجو
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
