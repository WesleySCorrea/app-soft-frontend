import { Outlet } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
