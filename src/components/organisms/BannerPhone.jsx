import Image from 'next/image'
import React from 'react'
import bannerPhone from "../../assets/images/icon/bannerPhone.png"
export default function BannerPhone() {
  return (
    <Image src={bannerPhone} width={1188} height={251} alt='phone' className=' lg:w-[1188px] lg:h-[251px] w-[327px] h-[220px] lg:mr-auto lg:ml-auto lg:mt-[109px] mr-[32px] ml-[31px] mt-[27px]'  />
  )
}
