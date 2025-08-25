import React from 'react'
import PageTitle from './PageTitle'
import { PlusIcon } from 'lucide-react'
import SearchBar from './SearchBar'
import Link from 'next/link'

export default function TopLine() {
  return (
    <div className='flex justify-between items-center text-white'>
        <PageTitle />

        <Link 
        href="/newTransaction"
        className='bg-white py-2 px-4 rounded cursor-pointer fixed bottom-24 right-6 md:static'>
            <PlusIcon className='w-5 h-5 stroke-5 text-back'/>
        </Link>

        <SearchBar/>

    </div>
  )
}
