'use client';
import React from 'react'
import CardList from './../../components/smallcard/page'
import AboutUsSummary from './../../components/aboutus';
import Header from './../../components/header/page';
import Footer from './../../components/footer/page';
import {auth} from './../../lib/firebase/clientApp'

const Homepage = () => {
  const user = auth.currentUser;
  console.log(user)
  return (
    <div>
      <AboutUsSummary></AboutUsSummary>
      <CardList></CardList>
    </div>
  )
}

export default Homepage
