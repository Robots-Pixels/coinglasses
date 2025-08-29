import {auth} from "@/auth"
import Link from 'next/link';

export default async function layout({children}: {children: React.ReactNode}) {

  const session = await auth();

  if(!session) {
    return (
      <div className='bg-back h-screen flex items-center justify-center text-white'>
        <div className='glass-thin p-8 text-center flex flex-col space-y-3'>
          <h1 className='text-3xl'>
            You are not allowed to be there
          </h1>

          <h2>Please, login first</h2>

          <Link href="/signin" className='glass-normal p-2 rounded-2xl'>
            Login
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    children
  )
}
