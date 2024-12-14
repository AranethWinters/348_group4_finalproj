import Link from 'next/link'
import React from 'react'


const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Quick Links</h2>
        </div>
        <div className="space-x-6">
         
                <Link href="#learn-more">Learn More</Link> 
                <Link href="#about-us">About Us
            </Link> 
                <Link href="#contact">Contact
            </Link>
                <Link href="#faqs">FAQs
            </Link>
           
        
        </div>
        <p className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default footer