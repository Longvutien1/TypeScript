import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className='container2'>      
        <Header/>
        
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default WebsiteLayout;