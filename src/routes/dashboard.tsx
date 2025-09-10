import { createFileRoute, redirect } from '@tanstack/react-router'
import { Dashboard } from '@pages/Dashboard'

export const Route = createFileRoute('/dashboard')({
  component: () => <Dashboard />,
  beforeLoad: ({ context }) => {
    if (!context.auth.isLoggedIn) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },
})
