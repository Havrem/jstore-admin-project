import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import styles from '@css/Layout.module.scss'
import { Navbar } from '@components/Navbar'
import type { AuthContextValue } from 'contexts/AuthContext'

export type RouterCtx = { auth: AuthContextValue }

const RootLayout = () => (
  <div className={styles.mainContainer}>
    <Navbar />
    <Outlet />
  </div>
)

export const Route = createRootRouteWithContext<RouterCtx>()({
  component: RootLayout,
})
