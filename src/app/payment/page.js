"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import React from 'react'

 function PaymentPage() {
    const searchParams = useSearchParams()
    const status = searchParams.get("status")
    

    



if(status === "success")  return (
    <div className='border border-green-500 bg-green-50 m-auto mt-20 w-fit rounded-md p-10'>
        <p>پرداخت با موفقیت انجام شد</p>
        <Link href="/profile">برو به پروفایل</Link>
    </div>
  )

  return(
    <div className='border border-red-500 bg-green-50 m-auto mt-20 w-fit rounded-md p-10'>
        <p>پرداخت انجام نشد.</p>
    </div>
  )

  
}

export default PaymentPage