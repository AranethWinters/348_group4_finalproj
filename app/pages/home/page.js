'use client';
import React from 'react'
import CardList from '../../components/smallcard/SmallCardList'
import AboutUsSummary from '../../components/AboutUsSummary';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
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
