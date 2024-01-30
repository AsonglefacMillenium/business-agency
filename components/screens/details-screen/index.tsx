import { Header2 } from '@/components/organisms'
import { DetailsLander, Footer, RecentSection } from '@/components/templates'
import React from 'react'

const DetailsScreen = () => {
  return (
    <div className="w-full p-0 m-0 pt-[67px]">
    <Header2 />
    <DetailsLander />
    <RecentSection />
    <Footer />
  </div>
  )
}

export default DetailsScreen