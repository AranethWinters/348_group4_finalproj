'use client';
import React from 'react'
import CardList from './../../components/smallcard/page'
import AboutUsSummary from './../../components/aboutus';

const Homepage = () => {

  return (
    <div>
      <AboutUsSummary></AboutUsSummary>
      <CardList></CardList>
    </div>
  )
}

export default Homepage
