import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import Searchwrap from '@/components/homepage/Searchwrap/Searchwrap'
import TopEmployers from '@/components/homepage/TopEmployes/TopEmployers'
import HowitWorks from '@/components/homepage/Howitworks/HowitWorks'


export default function page() {
  return (
    <>
    <Searchwrap />
    <TopEmployers />
    <HowitWorks />
    </>
  )
}
