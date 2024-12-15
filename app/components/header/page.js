import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="container">
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#"><img src=""/></a></li>
            <li><a href="/pages/home">Home</a></li>
            <li><a href="#">Our Games</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link href="/pages/signin">Sign in</Link></li>
            <li><Link href="/pages/signup">Register</Link></li>
            <li><a href="#">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header