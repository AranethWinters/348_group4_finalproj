'use client';
import React from 'react'
import CardList from './../../components/card'
import AboutUsSummary from './../../components/about_us/page.js';
import Link from 'next/link';

const Homepage = () => {

  return (
    <div>
      <AboutUsSummary></AboutUsSummary>
      <CardList></CardList>
    </div>
  )
}

export default Homepage
