import { createRootRoute, Outlet } from '@tanstack/react-router'
import styles from '@css/Layout.module.scss'

const RootLayout = () => ( // Where you are supposed to put navbars, providers etc
  <div className={styles.mainContainer}>
    <Outlet/>
  </div>
)

export const Route = createRootRoute({ component: RootLayout })