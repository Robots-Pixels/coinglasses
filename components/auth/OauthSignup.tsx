import { BsGoogle, BsTwitterX } from 'react-icons/bs'
import { signIn } from '@/auth';

export default async function OauthSignup() {
  return (
          <div className='flex items-center justify-center space-x-14 mt-4'>
            <form action={async () => {
                "use server";
               await signIn("google", {redirectTo: "http://localhost:3000/dashboard"});
            }}
            className='glass-normal rounded-full p-3'>
                <button className='flex items-center justify-center'>
                     <BsGoogle/>
                </button>
            </form>

            <form action={async () => {
                "use server";
                await signIn("twitter", {redirectTo: "http://localhost:3000/dashboard"});
            }}
            className='glass-normal rounded-full p-3'>
                <button className='flex items-center justify-center'>
                      <BsTwitterX/>
                </button>
            </form>
          </div>
  )
}
