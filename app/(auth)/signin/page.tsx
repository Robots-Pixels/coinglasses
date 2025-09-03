import Link from 'next/link'
import DirectSignUp from '@/components/auth/DirectSignUp';
import OauthSignup from '@/components/auth/OauthSignup';

export default function Page() {

  return (
    <div className='glass-thin w-[90%] md:w-100 text-white px-8 md:px-12 py-8'>

      <h1 className='text-3xl mb-4 md:mb-6 text-center'>
        Welcome Back!
      </h1>

        <DirectSignUp/>

        <OauthSignup/>

      <p className='text-center mt-4'>{`Don't  Have An Account? `}<Link href="/signup" className='underline'>Sign Up</Link> </p>

    </div>
  )
}
