import Link from 'next/link'
import React from 'react'

export default function VerifyEmail() {
  return (
    <div className='flex items-center justify-center w-full text-white'>
        <div className='h-full p-6 glass-thin rounded-2xl text-center flex flex-col space-y-5'>
            <h2 className='text-3xl '>Verify Your Email</h2>
            <p className='text-xl'>Go to your email account and check the message Coinglasses have just sent to you.</p>
            <p className='text-xl'>Close this page when it's done.</p>
            <p className='text-xl text-red'>Check your spams if you don't find it.</p>
        </div>
    </div>
  )
}
