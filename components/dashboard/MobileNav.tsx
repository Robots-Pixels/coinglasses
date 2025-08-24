import React from 'react'
import MobileNavItems from '../MobileNavItems'

export default function MobileNav() {
  return (
    <nav className="w-full h-12 text-white bg-dark fixed bottom-0 flex items-center justify-between">
      <MobileNavItems/>
    </nav>
    )
}
