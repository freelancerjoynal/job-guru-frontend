import Header from '@/components/layouts/header/Header'
import React from 'react'
import Footer from '@/components/layouts/footer/Footer'

export default function layout({children}) {
  return (
    <>
     <Header></Header>
     {children} 
     <Footer></Footer>
    </>
  )
}
