import { useLocation, Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import '../../styles/shell.css'
import '../../styles/ui.css'
import '../../styles/layout.css'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="mz-shell">
      <Header />
      <main className="mz-main">
        <motion.div
          key={location.pathname}
          className="mz-mainOutlet"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

