import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import HeaderSearch from './HeaderSearch';


export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
            <div className="logo-area">
            
                <Link href={'/'}><Image src={'/images/logo-white.png'} height={50} width={150} alt='Job Guru Logo'></Image></Link>
            </div>
            <div className="menu-area flex items-center justify-end gap-4">
                <ul className="flex items-center gap-4 text-lg">
                    <li>Home</li>
                    <li>Job</li>
                    <li>How it works</li>
                    <li>Contact US</li>
                </ul>
                <HeaderSearch></HeaderSearch>
                <div id='apply/post-btn'>
                <Link href={'#'}><Button className={`uppercase font-bold text-lg bg-green-500 hover:bg-green-400 cursor-pointer`}> Post Job</Button></Link>
                </div>
                <div id="user-area">
                    <Image src={'/images/user.jpg'} height={40} width={40} alt='User profile image' className='rounded-full cursor-pointer'></Image>
                </div>
            </div>
        </div>
      </div>
    </header>
  )
}
