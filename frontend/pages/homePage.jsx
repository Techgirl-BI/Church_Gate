import React from 'react'
import HeroSection from '../src/components/HeroSection'
import Announcement from '../src/components/Announcement'
import ChurchAddress from '../src/components/ChurchAddress'
import FindCommunity from '../src/components/FindCommunity'
import CommunityCard from '../src/components/CommunityCard'
import Volounteer from '../src/components/Volounteer'
import Testimonies from '../src/components/Testimonies'
import NextSteps from '../src/components/NextSteps'
import CallToAction from '../src/components/CallToAction'
import Footer from '../src/components/Footer'
import Watchlive from '../src/components/Watchlive'

const homePage = () => {
  return (
    <div>
      <Watchlive/>
        <HeroSection/>
        <Announcement/>
        <ChurchAddress/>
        <FindCommunity/>
        <CommunityCard/>
        <Volounteer/>
        <Testimonies/>
        <NextSteps/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default homePage