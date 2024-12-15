import Link from 'next/link'
import React from 'react'
import Footer from '@/app/components/footer/page'
import CardList from '@/app/components/smallcard/page'
import Header from '@/app/components/header/page'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <main>
        <CardList/>
      </main>
      <Footer/>
    </div>
  )
}

export default Homepage
