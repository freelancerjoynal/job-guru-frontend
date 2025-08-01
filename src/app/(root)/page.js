import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import Searchwrap from '@/components/homepage/Searchwrap/Searchwrap'
import TopEmployers from '@/components/homepage/TopEmployes/TopEmployers'
import HowitWorks from '@/components/homepage/Howitworks/HowitWorks'
import BrowseByCategory from '@/components/homepage/BrowseByCategory/BrowseByCategory'
import FeaturedJobs from '@/components/homepage/FeaturedJobs/FeaturedJobs'
import WatchVideo from '@/components/homepage/VideoSection/WatchVideo'
import LatestJobs from '@/components/homepage/LatestJobs/LatestJobs'


export default function page() {
  return (
    <>
    <Searchwrap />
    <TopEmployers />
    <HowitWorks />
    <BrowseByCategory />
    <FeaturedJobs />
    <WatchVideo />  
    <LatestJobs />
    </> 
  )
}
