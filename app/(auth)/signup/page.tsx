"use client";

import { signup } from '@/app/actions/auth'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useActionState } from 'react'
import { BsGoogle, BsTwitterX } from 'react-icons/bs'

export default function Page() {

  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <div className='glass-thin w-[90%] md:w-100 text-white px-8 md:px-12 py-8'>

      <h1 className='text-3xl mb-4 md:mb-6 text-center'>{`Let's Get Started`}</h1>

        <form 
        action={action}
        className='flex flex-col space-y-3'
        >

          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex w-full flex-col'>
              <label 
              className='mb-1'
              htmlFor="">First Name *</label>

              <input 
              type="text" 
              className='w-full outline-none h-10 
              rounded-sm glass-normal px-2'
              name='firstname'
              id='firstname'
              />
            </div>
            {state?.errors?.firstname && <p>{state.errors.firstname}</p>}

            <div className='flex w-full flex-col'>
              <label 
              className='mb-1'
              htmlFor="">Last Name *</label>

              <input 
              type="text" 
              className='w-full outline-none h-10 
              rounded-sm glass-normal px-2'
              name='lastname'
              id='lastname'
              />

            </div>
            {state?.errors?.lastname && <p>{state.errors.lastname}</p>}
          </div>


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
            />
          </div>
            {state?.errors?.email && <p>{state.errors.email}</p>}


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
            />
          </div>
            {state?.errors?.password && 
            (
              <div>
                <p>Password must: </p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>
                      - {error}
                    </li>
                  ))}
                </ul>

              </div>
            )
            }

          <button 
          type='submit'
          disabled={pending}
          className='py-2 mt-4 md:mt-8 bg-white mb-6 text-back rounded flex justify-center gap-2'
          >
            Sign Up 
            <ArrowRight/>
          </button>

            <hr  className='h-1'/>

          <div className='flex items-center justify-center space-x-14 '>

            <button 
        //     onClick={async () => {
        //     "use server";
        //     await signIn("google");
        //   }
        // }
          
            type='button'
            className='glass-normal rounded-full p-3'>
              <BsGoogle/>
            </button>

            <button 
          //   onClick={async () => {
          //   "use server";
          //   await signIn("twitter");
          // }}
          
            type='button'
            className='glass-normal rounded-full p-3'>
              <BsTwitterX/>
            </button>

          </div>


        </form>

      <p className='text-center mt-4 md:mt-8'>Already Have An Account? <Link href="/signin" className='underline'>Sign In</Link> </p>

    </div>
  )
}
