import { Header2 } from '@/components/organisms'
import { ContactSection, Footer } from '@/components/templates'
import React from 'react'

const ContactScreen = () => {
  return (
    <div className="w-full p-0 m-0 pt-[67px]">
    <Header2 />
   <ContactSection />
    <Footer />
  </div>
  )
}

export default ContactScreen