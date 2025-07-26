'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import MobileMenu from './MobileMenu';
import { useState } from 'react';

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  
  return (
    <div className='container mx-auto lg:hidden'>
      <div className='flex items-center justify-between px-3 pt-1'>
        <div className='logo-area'>
          <Link href={'/'}><Image src={'/images/logo-white.png'} height={50} width={150} alt='Job Guru Logo'></Image></Link>
        </div>
        <div className='menu-area'>         
            <FaBars onClick={handleClick} size={25} />
        </div>
      </div>
      {
        isOpen && <MobileMenu isOpen={isOpen}></MobileMenu>
      }
    </div>
  )
}
