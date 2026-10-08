import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, navigation } from '../data/company'
import { easeOutCubic, navItem, softButton } from '../utils/motion'

function Header({ mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="main-header"
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? 'border-white/10 bg-darkBg/90 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.25)]'
          : 'border-white/5 bg-darkBg/80 py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" onClick={onCloseMobileMenu}>
            <img alt="Daarsheel Realty logo" className="h-10 w-8 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-10" src="/images/logo/logo.png" />
            <div className="flex flex-col">
              <span className="font-heading flex items-center gap-1 text-sm font-bold tracking-[0.08em] text-white transition-colors group-hover:text-brandRed sm:gap-1.5 sm:text-2xl sm:tracking-widest">
                DAARSHEEL <span className="text-brandRed">REALTY</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400">{company.tagline}</span>
            </div>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            <a className="flex items-center gap-2 text-xs font-semibold text-gray-300 transition-colors duration-300 hover:text-white" href={company.phoneHref}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brandRed/30 bg-brandRed/10 text-brandRed transition-transform duration-300 hover:scale-105">
                <i className="fa-solid fa-phone text-xs" />
              </span>
              {company.phone}
            </a>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: easeOutCubic }}>
              <Link className="rounded-full bg-brandRed px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,37,42,0.5)] transition-all duration-300 hover:scale-[1.02] hover:bg-brandRed-hover hover:shadow-[0_0_30px_rgba(229,37,42,0.8)] active:scale-95" to="/contact">
                Enquire Now
              </Link>
            </motion.div>
          </div>

          <button aria-label="Toggle Menu" className="p-2 text-2xl text-white focus:outline-none md:hidden" onClick={onToggleMobileMenu} type="button">
            <i className="fa-solid fa-bars-staggered text-brandRed" />
          </button>
        </div>

        <motion.nav initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className={`mt-3 hidden items-center justify-center gap-6 border-t pt-3 text-sm font-semibold tracking-wide md:flex lg:gap-8 ${scrolled ? 'border-white/10' : 'border-white/5'}`}>
          {navigation.map((item) => (
            <motion.div key={item.path} variants={navItem} transition={{ duration: 0.4, ease: easeOutCubic }}>
              <NavLink
                className={({ isActive }) => `relative transition-all duration-300 ${isActive ? 'text-brandRed' : 'text-gray-300 hover:text-brandRed'}`}
                to={item.path}
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} border-b border-brandRed/20 bg-darkCard px-6 py-6 md:hidden`}>
        <nav className="flex flex-col gap-4 text-base font-semibold">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) => `transition-colors ${isActive ? 'text-brandRed' : 'text-gray-300 hover:text-brandRed'}`}
              key={item.path}
              onClick={onCloseMobileMenu}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
          <a className="mt-2 border-t border-white/10 pt-4 text-sm font-semibold text-gray-300" href={company.phoneHref}>
            <i className="fa-solid fa-phone text-brandRed" /> {company.phone}
          </a>
          <motion.div whileHover={softButton.hover} whileTap={softButton.tap} initial={softButton.rest} animate={softButton.rest}>
            <Link className="w-full rounded-full bg-brandRed px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-white" onClick={onCloseMobileMenu} to="/contact">
              Enquire Now
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  )
}

export default Header
