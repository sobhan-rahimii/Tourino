import Image from "next/image";
import React from "react";
import banner from "../../assets/images/icon/banner.png";

export default function Banner() {
  return (
    <>
      <div className=" relative w-full  ">
        <Image src={banner} alt="bannerr" width={1920} className="w-full " />
      </div>
    </>
  );
}
