import React from 'react'

export default function Steps({step}) {
  return (
    <div className='text-center max-w-[350px] mx-auto'>
        <span className='text-black bg-blue-500 h-25 w-25 mx-auto'>{step.icon}</span>
        <h3 className='text-xl lg:text-3xl font-semibold py-2 text-blue-900'>{step.title}</h3>
        <p>{step.description}</p>
    </div>
  )
}
