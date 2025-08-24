import { Moon, Sun } from 'lucide-react'
import React from 'react'

export default function ToggleModeButton() {
  return (
    <button className='h-5'>
        {
            (2 === 2) ?
            <Sun/> :
            <Moon/>
        }
    </button>
  )
}
