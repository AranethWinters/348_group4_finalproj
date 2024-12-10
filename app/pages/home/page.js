import Link from 'next/link'
import React from 'react'
import Footer from '@/app/components/footer/page'
import Header from '@/app/components/header/page'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <button><Link href="/pages/signin">Signin</Link></button>
      <button><Link href="/pages/signup">Signup</Link></button>
      <Footer/>
    </div>
  )
}

export default Homepage