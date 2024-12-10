import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <button><Link href="/pages/signin">Signin</Link></button>
      <button><Link href="/pages/signup">Signup</Link></button>
    </div>
  )
}

export default Homepage