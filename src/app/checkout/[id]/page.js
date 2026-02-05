import CheckoutForm from '@/components/templates/CheckoutForm'
import getTourDetails from "@/core/services/getTourDetails";
import React from 'react'

export default async function Checkout({params}) {
    const {id} = await params
    const tourData = await getTourDetails(id)
  return (
    <div>
        <CheckoutForm/>
    </div>
  )
}

