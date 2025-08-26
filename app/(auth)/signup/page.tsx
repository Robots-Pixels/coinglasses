import { ArrowRight, Twitter } from 'lucide-react'
import React from 'react'
import { BsGoogle, BsTwitterX } from 'react-icons/bs'

export default function page() {
  return (
    <div className='glass-thin w-[90%] md:w-100 text-white px-8 md:px-12 py-8 md:py-12'>
        <h1 className='text-3xl mb-6 md:mb-8 text-center'>Let's Get Started</h1>

        <form
        className='flex flex-col space-y-6'
         action="">
          <div className='flex flex-col'>
            <label 
            className='mb-2'
            htmlFor="">First Name *</label>

            <input 
            type="text" 
            className='w-full outline-none h-10 
            rounded-sm glass-normal px-2'
            name='firstname'
            id='firstname'
            required
            />
          </div>

          <div className='flex flex-col'>
            <label 
            className='mb-2'
            htmlFor="">Last Name *</label>

            <input 
            type="text" 
            className='w-full outline-none h-10 
            rounded-sm glass-normal px-2'
            name='lastname'
            id='lastname'
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
          className='py-2 mt-6 md:mt-8 bg-white text-back rounded flex justify-center gap-2'
          >
            Sign Up 
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



    </div>
  )
}
