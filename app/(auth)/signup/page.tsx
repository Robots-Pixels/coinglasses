import Link from 'next/link'
import DirectSignUp from '@/components/auth/DirectSignUp';
import OauthSign from '@/components/auth/OauthSign';

export default function Page() {

  return (
    <div className='glass-thin w-[90%] md:w-100 text-white px-8 md:px-12 py-8'>

      <h1 className='text-3xl mb-4 md:mb-6 text-center'>
        {`Let's Get Started`}
      </h1>

        <DirectSignUp/>

        <OauthSign/>

      <p className='text-center mt-4'>Already Have An Account? <Link href="/signin" className='underline'>Sign In</Link> </p>

    </div>
  )
}
