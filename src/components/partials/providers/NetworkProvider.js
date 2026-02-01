"use client"

import { useNetworkStatus } from '@/core/hooks/useNetworkStatus'
import React from 'react'

function NetworkProvider({children}) {
    useNetworkStatus()

  return <>{children}</>
}

export default NetworkProvider