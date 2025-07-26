import React from 'react'

export default function MobileMenu({isOpen}) {
  return (
    <>
      <div className={`bg-blue-300 text-black pt-7 w-full h-screen  duration-1000 `}>
                <ul className='flex flex-col items-start gap-4 text-lg pl-3'>
                    <li>Home</li>
                    <li>Job</li>
                    <li>How it works</li>
                    <li>Contact US</li>
                </ul>
            </div>
    </>
  )
}
