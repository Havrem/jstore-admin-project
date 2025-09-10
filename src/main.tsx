import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth, type AuthContextValue } from 'contexts/AuthContext'
import { ToastContainer } from 'react-toastify'

const router = createRouter({
  routeTree,
  context: {
    auth: {
      isLoggedIn: false,
      register: async () => {},
      login: async () => {},
      logout: async () => {},
    } as AuthContextValue,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function AppRouter() {
  const auth = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{ auth }}
      key={String(auth.isLoggedIn)}   // <- forces guards to see fresh auth
    />
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
)
