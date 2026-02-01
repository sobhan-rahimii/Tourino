"use client"
import React from 'react'
import offline from "../../../src/assets/images/icon/offline.png"
import Image from 'next/image'

function page() {
  return (
    <div className='flex'>
        <div className='flex-col  '>
            <p className='mr-[174px] mt-[251.89px]   text-nowrap '>اتصال با سرور برقرار نیست!</p>
            <p className='mr-[174px] mt-[24.4px] text-nowrap'>لطفا بعدا دوباره امتحان کنید.</p>
        </div>
        <Image src={offline} width={555} height={555} alt='offline' className='ml-[174px]  mt-[157px] mb-[426px] mr-[711px] ' />

    </div>
  )
}

export default page