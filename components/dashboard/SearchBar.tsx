import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <form action="">
        <div className='border-white border-2 md:border-4 rounded-[0.5rem] md:rounded-xl p-1 flex justify-between'>
            <input 
            type="text" 
            placeholder='Search...' 
            className='
            w-38 md:w-34
            md:placeholder:font-medium 
            placeholder:font-light placeholder:text-white 
            md:placeholder:text-2xl
            placeholder:text-xl
            outline-none '
            />

            <SearchIcon className='w-5 stroke-2 md:stroke-3 cursor-pointer'/>
        </div>
    </form>
  )
}
