'use client';
import React from 'react'
import Footer from '@/app/components/footer/page'
import Header from '@/app/components/header/page'
import CardList from '@/app/components/card'
import AboutUsSummary from '@/app/components/aboutus';

const Homepage = () => {

  return (
    <div>
      <Header/>
      <CardList></CardList>
      <button><Link href="/pages/signin">Signin</Link></button>
      <button><Link href="/pages/signup">Signup</Link></button>
      <Footer/>

    </div>
  )
}

export default Homepage
