import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { company } from '../data/company.js'

function PageLayout({ children, mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-darkBg text-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={onCloseMobileMenu}
        onToggleMobileMenu={onToggleMobileMenu}
      />
      <main className={location.pathname === '/' ? 'pt-[73px] md:pt-[126px]' : 'pt-20 md:pt-36'}>
        <div className={`route-shell ${location.pathname === '/' ? 'home-route-shell' : ''}`} key={location.pathname}>{children}</div>
      </main>
      <Footer />
      <a
        aria-label={`Chat with ${company.name} on WhatsApp`}
        className="fixed bottom-5 right-5 z-[45] flex h-12 w-12 items-center justify-center rounded-full border-2 border-goldAccent bg-brandRed text-white shadow-[0_0_24px_rgba(229,37,42,0.45)] transition-all hover:scale-105 hover:bg-brandRed-hover hover:shadow-[0_0_30px_rgba(223,177,91,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-goldAccent sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
        href={`https://wa.me/${company.phone.replace(/\D/g, '')}?text=Hello%20Daarsheel%20Realty%2C%20I%27d%20like%20to%20know%20more.`}
        rel="noopener noreferrer"
        target="_blank"
        title="Chat with us on WhatsApp"
      >
        <i aria-hidden="true" className="fa-brands fa-whatsapp text-2xl sm:text-3xl" />
      </a>
    </div>
  )
}

export default PageLayout
