import React from 'react'
import BestDeals from './BestDeals'
import ClassifiedSlide from './ClassifiedSlide'
import Newsletter from './Newsletter'
import Carousel from './Carousel'

const MainContents = () => {
  return (
    <div>
      <Carousel/>
        <BestDeals/>
        <ClassifiedSlide/>
        <Newsletter/>
        
    </div>
  )
}

export default MainContents