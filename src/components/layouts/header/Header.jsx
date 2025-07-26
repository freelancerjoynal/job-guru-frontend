import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import HeaderSearch from './HeaderSearch';
import MobileHeader from './MobileHeader';
import { CiSearch } from "react-icons/ci";
import UserProfileBox from './UserProfileBox';
import PostOrApply from './PostOrApply';



export default function Header() {
  return (
    <header className='border-b pb-1.5'>
      <div className="container mx-auto hidden lg:block">
        <div className="flex items-center justify-between py-2">
            <div className="logo-area">
                <Link href={'/'}><Image src={'/images/logo-white.png'} height={50} width={150} alt='Job Guru Logo'></Image></Link>
            </div>
            <div className="menu-area flex items-center justify-end gap-4">
                <ul className="flex items-center gap-4 uppercase text-slate-600">
                    <li><Link className='border-b-2 mb-1 border-purple-500' href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Job</Link></li>
                    <li><Link href={'/'}>How it works</Link></li>
                    <li><Link href={'/'}>Contact US</Link></li>
                </ul>
                <HeaderSearch></HeaderSearch>
                <div id='apply/post-btn'>
                    <PostOrApply></PostOrApply>
                </div>
                <div id="user-area">
                    <UserProfileBox></UserProfileBox>
                </div>
            </div>
        </div>
      </div>
      {/* Responsive mobile header part */}
      <MobileHeader></MobileHeader>
    </header>
  )
}
