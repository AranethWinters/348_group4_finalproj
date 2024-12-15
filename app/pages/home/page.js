import Link from 'next/link'
import React from 'react'
import Footer from '@/app/components/footer/page'
import CardList from '@/app/components/placeholder_card/page'
import Header from '@/app/components/header/page'
import AboutUsSummary from '@/app/components/about_us/page'
const Homepage = () => {
  return (
    <div> 
      <Header/>
      <AboutUsSummary></AboutUsSummary>
      <CardList></CardList>
      <button><Link href="/pages/signin">Signin</Link></button>
      <button><Link href="/pages/signup">Signup</Link></button>
      <Footer/>
    
    </div>
  )
}

export default Homepage