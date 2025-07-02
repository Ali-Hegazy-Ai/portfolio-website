import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import LoadingSpinner from '../components/LoadingSpinner'

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
          <Outlet />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Custom Cursor - Disabled for better performance */}
      {/* <CustomCursor /> */}
    </div>
  )
}

export default Layout
