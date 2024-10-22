import Hero from '@/components/HomeHero';
import Mission from '@/components/Mission';
import Navbar from '@/components/Navbar';
import ShopNow from '@/components/ShopNow';
import Story from '@/components/Story';
import Testimonies from '@/components/Testimonies';
import Visit from '@/components/Visit';
import React from 'react';

const Home = () => {
  return (
    <>
    <Hero/>
    <Story/>
    <Testimonies/>
    <ShopNow/>
    <Mission/>
    <Visit/>
    </>
  );
}

export default Home;
