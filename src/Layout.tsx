import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
  return (<>
    <Header />
    <main className='z-[100]'>
    <Outlet />
    </main>
  </>
  )
}

export default Layout