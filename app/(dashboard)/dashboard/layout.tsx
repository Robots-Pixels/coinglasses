import SideNav from '@/components/SideNav'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
        <div className='bg-back flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <SideNav/>
            {children}
        </div>
  )
}
