import { Moon, Sun } from 'lucide-react'
import React from 'react'

export default function ToggleModeButton() {
  return (
    <button className='p-3 bg-darker hover:bg-active cursor-pointer rounded-2xl shadow-xl'>
        {
            (2 === 2) ?
            <Sun/> :
            <Moon/>
        }
    </button>
  )
}
