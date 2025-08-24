import React from 'react'
import ToggleModeButton from '../ToggleModeButton'
import { User } from 'lucide-react'
import Link from 'next/link'
import DesktopNavItems from '../DeskTopNavItems'


export default function DesktopNav() {
  return (
      <aside className="flex-none w-60 text-white h-screen min-h-100 pl-24 py-5">

            <div className="h-full bg-dark py-8 rounded-l-[3.5rem] rounded-r-xl flex flex-col items-center justify-between ">

              <div className="flex flex-col  items-center w-full space-y-8">
                <h1 className="text-2xl font-semibold h-10">
                    CoinGlasses
                </h1>

                <DesktopNavItems />

              </div>
              
              <div className="flex flex-col items-center space-y-6">

                <ToggleModeButton/>

                <Link className='p-3 bg-darker hover:bg-active cursor-pointer rounded-2xl shadow-xl' href={"/dashboard/profile"}>
                    <User/>
                </Link>
                
              </div>

            </div>

      </aside>  
      )
}
