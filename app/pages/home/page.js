'use client';
import React from 'react'
import Footer from '@/app/components/footer/page'
import Header from '@/app/components/header/page'
import CardList from '@/app/components/card'
import AboutUsSummary from '@/app/components/aboutus';

const Homepage = () => {

  return (
    <div>
        <AboutUsSummary></AboutUsSummary>
        <CardList></CardList>
    </div>
  )
}


export default Homepage