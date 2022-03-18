import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        
        <header>Header</header>
        <aside><Outlet/></aside>
        <main>Main</main>
    </div>
  )
}

export default AdminLayout