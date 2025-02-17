'use client';
import React from 'react'
import CardList from '../../components/smallcard/SmallCardList'
import AboutUsSummary from '../../components/about_us/AboutUsSummary';
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
