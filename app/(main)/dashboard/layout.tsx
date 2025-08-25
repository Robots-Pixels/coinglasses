import TopLine from '@/components/dashboard/TopLine'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
        <div className='bg-back flex h-screen flex-col md:flex-row md:overflow-hidden relative'>
            <Navigation/>

            <div className='md:pr-24 px-4 md:pl-4 py-2 md:py-8 w-full'>
              <TopLine />

              {children}
            </div>
        </div>
  )
}
