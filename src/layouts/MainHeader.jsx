import React from 'react'
import TopBar from '../components/TopBar'
import { NavBar } from '../components/NavBar'

export default function MainHeader() {
  return (
    <header className='position-sticky top-0 ' style={{zIndex:"999"}}>
        <TopBar/>
        <NavBar/>
        <hr className='m-0' style={{color:"#33A1FF"}} />
    </header>
  )
}
