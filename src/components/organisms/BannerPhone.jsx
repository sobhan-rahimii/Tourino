import Image from 'next/image'
import React from 'react'
import bannerPhone from "../../assets/images/icon/bannerPhone.png"
export default function BannerPhone() {
  return (
    <Image src={bannerPhone} width={1188} height={251} alt='phone' className='mr-auto ml-auto mt-[109px]'  />
  )
}
