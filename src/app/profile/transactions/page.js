"use client"
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import api from '@/core/config/api'

function Transactions() {
  const [transactions,setTransactions] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await api.get("/user/transactions")
      setTransactions(res?.data)

    }
    fetchData()
  },[])

  console.log(transactions);



  return (
    <div dir='rtl' className='  w-[872px] h-[245px]  border border-solid border-[#00000033] rounded-[10px]' >
      <Table>
        <TableHeader>
          <TableRow  >
            <TableHead className="text-right  ">تاریخ و ساعت</TableHead>
            <TableHead className="text-right">مبلغ(تومان)</TableHead>
            <TableHead className="text-right">نوع تراکنش</TableHead>
            <TableHead className="text-right">شماره سفارش</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-right"></TableCell>
            <TableCell className="text-right"></TableCell>
            <TableCell className="text-right"></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    
  )
}

export default Transactions