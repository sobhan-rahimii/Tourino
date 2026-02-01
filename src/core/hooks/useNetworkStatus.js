"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export function useNetworkStatus() {
    const router = useRouter()
    const pathName = usePathname()

    useEffect(()=>{
        const handleOffline = ()=>{
            if(pathName !== "/offline"){
                router.push("/")
            }
        }

        const handleOnline = ()=>{
            if (pathName === "/offline"){
                router.push("/")
            }
        }
    },[pathName,router])
 
}

