"use client";

import CheckOtpForm from "@/components/templates/authForm/CheckOtpForm";
import SendOtp from "@/components/templates/authForm/SendOtp";
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export function useModal(){
  return useContext(ModalContext)
}

function ModalContainer({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step,setStep] = useState(1)
  
  return (
    <ModalContext.Provider value={{isOpen,setIsOpen,step,setStep}}>
      {children}
      {isOpen && (<div>
        {step === 1 && <SendOtp/>}
      {step === 2 && <CheckOtpForm/>}
      </div>)}
      
    
    </ModalContext.Provider>
  );
}

export default ModalContainer;
