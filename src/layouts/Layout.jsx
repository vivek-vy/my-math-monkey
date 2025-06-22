import React from 'react'
import MainHeader from './MainHeader'
import { Outlet } from 'react-router-dom'
import MainFooter from './MainFooter'

export default function MyLayout() {
  return (
<>
    <MainHeader/>
    <Outlet/>
    <MainFooter/>
</>
  )
}
