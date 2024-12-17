import React from 'react'
import Header from '@/app/components/header/page.js'

const ContactForm = () => {
  return (
    <div>
      <Header />
      <main className="container-contact">
        <form onsubmit="sendEmail(); reset(); return false;">
        <h3>GET IN TOUCH</h3>
        <input type="email" id="email" placeholder="Email" required />
        <input type="text" id="message" placeholder="Message" required />
        <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};  

export default ContactForm