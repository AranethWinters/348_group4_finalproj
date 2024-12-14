import Link from 'next/link'
import React from 'react'
import Footer from '@/app/components/footer/page'
import CardList from '@/app/components/placeholder_card/page'

const Homepage = () => {
  return (
    <div>
      <CardList></CardList>
      <button><Link href="/pages/signin">Signin</Link></button>
      <button><Link href="/pages/signup">Signup</Link></button>
      <Footer/>
    </div>
  )
}

export default Homepage