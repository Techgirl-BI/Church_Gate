import React from 'react'
import HeroSection from '../src/components/HeroSection'
import Announcement from '../src/components/Announcement'
import ChurchAddress from '../src/components/ChurchAddress'
import FindCommunity from '../src/components/FindCommunity'
import CommunityCard from '../src/components/CommunityCard'

const homePage = () => {
  return (
    <div>
        <HeroSection/>
        <Announcement/>
        <ChurchAddress/>
        <FindCommunity/>
        <CommunityCard/>
    </div>
  )
}

export default homePage