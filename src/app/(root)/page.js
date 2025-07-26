import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import Searchwrap from '@/components/homepage/Searchwrap/Searchwrap'
import TopEmployers from '@/components/homepage/TopEmployes/TopEmployers'


export default function page() {
  return (
    <>
    <Searchwrap />
    <TopEmployers />
    </>
  )
}
