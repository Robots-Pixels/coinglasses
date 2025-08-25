"use client";

import { usePathname } from 'next/navigation';
import React from 'react'

export default function PageTitle() {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").filter(Boolean).pop();

  return (
    <div className='md:w-[65%]'>
      <div className='capitalize text-3xl md:hidden'>
        Coinglasses
      </div>

      <div className='capitalize text-2xl md:text-title hidden md:block'>
        {pageTitle}
      </div>
    </div>
  )
}
