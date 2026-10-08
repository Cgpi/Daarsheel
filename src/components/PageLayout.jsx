import Header from './Header.jsx'
import Footer from './Footer.jsx'

function PageLayout({ children, mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  return (
    <div className="min-h-screen bg-darkBg text-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={onCloseMobileMenu}
        onToggleMobileMenu={onToggleMobileMenu}
      />
      <main className="pt-20 md:pt-36">{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
