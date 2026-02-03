import React from "react";
import Checkout from "../checkout/[id]/page";

async function CheckoutNull() {
 
    return (
      <p className="border border-green-500 bg-green-50 m-auto mt-20 w-fit rounded-md p-10">
        سبد خرید شما خالی است
      </p>
    );
  
}

export default CheckoutNull;
