import { refactorName } from '@/lib/utils'
import { User } from 'next-auth'
import Image from 'next/image'
import React from 'react'

export default function GeneralOverview({user}: {user: User}) {
  return (
        <div className="w-full md:w-[60%] relative glass-thin h-full md:h-90 flex flex-col md:flex-row md:items-center p-2 md:p-4">

            <div className="w-full md:w-[60%] px-3 py-2 md:py-12 md:h-full h-[50%] flex z-3 md:flex-col flex-col-reverse text-white font-semibold justify-between">

              <div className="opacity-80 md:opacity-100 font-light md:font-medium text-2xl md:flex md:flex-col">
                <span className="md:text-welcome">Good Morning, </span> 
                {
                  user.name && <span className="md:-mt-4 capitalize md:text-name">{refactorName(user.name)}</span>
                }
                
              </div>

              <div className="md:bg-white/20 md:backdrop-blur-md font-light md:font-medium md:border md:border-white/20 md:shadow-2xs text-4xl md:text-welcome md:px-2 md:py-4 w-fit md:w-[72%] md:mx-0 md:my-0  rounded-3xl md:flex items-center justify-center">
                € 280.4 M
              </div>

            </div>

            <div className="hidden md:block absolute bottom-0 md:right-5 md:bottom-auto w-[53%] aspect-square rounded-full">

              <div className="w-full h-full overflow-hidden rounded-full">
                <Image 
                src={user.image || "/fallbackProfile.jpg"} 
                alt="User Avatar" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover object-center"/>
              </div>
                
            </div>

        </div>
)
}
