"use client";

import { usePathname } from 'next/navigation';
import React from 'react'

export default function PageTitle() {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").filter(Boolean).pop();

  return (
    <div className='md:w-[65%]'>
      <div className='capitalize text-3xl md:hidden font-semibold'>
        Coinglasses
      </div>

      <div className='capitalize font-semibold text-2xl md:text-title hidden md:block'>
        {pageTitle}
      </div>
    </div>
  )
}
