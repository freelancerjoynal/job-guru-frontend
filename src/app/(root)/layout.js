import Header from '@/components/layouts/header/Header'
import React from 'react'

export default function layout({children}) {
  return (
    <>
     <Header></Header>
     {children} 
    </>
  )
}
