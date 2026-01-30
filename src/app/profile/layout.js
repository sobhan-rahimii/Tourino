import AuthProvider from '@/components/partials/providers/AuthProvider'
import React from 'react'

function ProfileLayout({children}) {

  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}

export default ProfileLayout