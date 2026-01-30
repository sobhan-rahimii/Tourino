import Image from "next/image";
import Link from "next/link";
import React from "react";
import notfound from "../assets/images/icon/notfound.png";

function NotFound() {
  return (
    <>
      <div className="flex justify-around">
        <div className="flex-col">
          <h1 className="mt-[235.33px] mr-[174px] ml-[138px]">
            صفحه مورد نظر یافت نشد!
          </h1>
          <Link
            className="inline-block mt-[80.87px] mr-[193px] ml-[157px] bg-[#D8FFE1]  "
            href="/"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
        <div className="flex  ">
          <Image
            className=" ml-[174px] mt-[83px] mb-[96px]"
            src={notfound}
            width={555}
            height={555}
            alt="notfond"
          />
        </div>
      </div>
    </>
  );
}

export default NotFound;
