import AuthProvider from '../lib/auth-context'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  )
}

export default Layout
