import React from 'react'
import Bluebar from './Bluebar'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'

const Header = () => {
  return (
    <div className=''>
        <Bluebar/>
        <PrimaryNav/>
        <SecondaryNav/>
    </div>
  )
}

export default Header