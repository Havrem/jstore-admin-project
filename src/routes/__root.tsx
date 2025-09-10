import { createRootRoute, Outlet } from '@tanstack/react-router'
import styles from '@css/Layout.module.scss'
import { Navbar } from '@components/Navbar'

const RootLayout = () => ( // Where you are supposed to put navbars, providers etc
  <div className={styles.mainContainer}>
    <Navbar/>
    <Outlet/>
  </div>
)

export const Route = createRootRoute({ component: RootLayout })