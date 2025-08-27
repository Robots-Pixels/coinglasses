import { ArrowRight} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsGoogle, BsTwitterX } from 'react-icons/bs'

export default function page() {
  return (
    <div className='glass-thin w-[90%] md:w-100 text-white px-8 md:px-12 py-4 md:py-6'>

        <h1 className='text-3xl mb-4 md:mb-6 text-center'>Welcome</h1>

        <form
        className='flex flex-col space-y-3'
         action="">

          <div className='flex flex-col'>
            <label 
            className='mb-2'
            htmlFor="">Email *</label>

            <input 
            type="email"
            className='w-full outline-none h-10 
            rounded-sm glass-normal px-2'
            name='email'
            id='email'
            required
            />
          </div>

          <div className='flex flex-col'>
            <label 
            className='mb-2'
            htmlFor="">Password *</label>

            <input 
            type="password"
            className='w-full outline-none h-10 
            rounded-sm glass-normal px-2'
            name='password'
            id='password'
            required
            />
          </div>

          <button 
          type='submit'
          className='py-2 mt-4 md:mt-8 mb-8 bg-white text-back rounded flex justify-center gap-2'
          >
            Sign In
            <ArrowRight/>
          </button>

            <hr  className='h-1'/>

          <div className='flex items-center justify-center space-x-14 '>

            <button 
            type='button'
            className='glass-normal rounded-full p-3'>
              <BsGoogle/>
            </button>

            <button 
            type='button'
            className='glass-normal rounded-full p-3'>
              <BsTwitterX/>
            </button>

          </div>


        </form>

      <p className='text-center mt-4'>
        { `Don't Have An Account? `}
        <Link href="/signup" className='underline'>Sign Up</Link> </p>


    </div>
  )
}
