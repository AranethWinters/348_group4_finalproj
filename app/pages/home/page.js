'use client';
import React from 'react'
import CardList from '@/app/components/smallcard/page'
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
