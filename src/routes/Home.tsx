import React from 'react'
import HeroSection from '../landingpage/HeroSection'
import MoreNews from '../landingpage/MoreNews'
import FeaturedNews from '../landingpage/FeaturedNews'
import Editorials from "../landingpage/Editorials"



const Home: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <Editorials />
        <MoreNews />
        <FeaturedNews   />
    </div>
  )
}

export default Home