import { BsGoogle, BsTwitterX } from 'react-icons/bs'
import { signIn } from '@/auth';

export default async function OauthSignup() {
  return (
          <div className='flex items-center justify-center space-x-14 mt-4'>
            
            <form 
            action={async () => {
                "use server";
                await signIn("google", {redirectTo: "/dashboard"});

            }}
            className='w-10 h-10 rounded-full glass-normal'>
                <button
                type='submit'
                className='flex items-center justify-center w-full h-full'>
                     <BsGoogle/>
                </button>
            </form>

            <form 
            action={async () => {
                "use server";
                await signIn("twitter", {redirectTo: "/dashboard"});

            }}
            className='w-10 h-10 rounded-full glass-normal'>
                <button
                type='submit'
                className='flex items-center justify-center w-full h-full'>
                     <BsTwitterX/>
                </button>
            </form>

          </div>
  )
}
