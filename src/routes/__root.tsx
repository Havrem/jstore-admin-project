import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => ( // Where you are supposed to put navbars, providers etc
  <div>
    <Outlet />
  </div>
)

export const Route = createRootRoute({ component: RootLayout })