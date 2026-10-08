import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import PageLayout from './components/PageLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AmenitiesPage from './pages/AmenitiesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import VenturesPage from './pages/VenturesPage.jsx'

function Site() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [project, setProject] = useState(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slide')
    const indicators = document.querySelectorAll('.slide-indicator')

    slides.forEach((slide, index) => {
      slide.classList.toggle('opacity-100', index === currentSlide)
      slide.classList.toggle('opacity-0', index !== currentSlide)
    })
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('w-10', index === currentSlide)
      indicator.classList.toggle('w-3', index !== currentSlide)
      indicator.classList.toggle('bg-brandRed', index === currentSlide)
      indicator.classList.toggle('bg-white/30', index !== currentSlide)
    })
  }, [currentSlide, location.pathname])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % 3)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [location.pathname])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setProject(null)
        setVideoOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const counters = document.querySelectorAll('.counter')
    if (!counters.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()

        counters.forEach((counter) => {
          const target = Number(counter.dataset.target)
          const startedAt = performance.now()

          const animate = (now) => {
            const progress = Math.min((now - startedAt) / 2000, 1)
            const value = Math.floor(target * progress)
            counter.textContent = progress === 1 ? `${target.toLocaleString()}+` : value.toLocaleString()
            if (progress < 1) window.requestAnimationFrame(animate)
          }

          window.requestAnimationFrame(animate)
        })
      },
      { threshold: 0.2 },
    )

    counters.forEach((counter) => observer.observe(counter))
    return () => observer.disconnect()
  }, [location.pathname])

  const openProjectDetails = (name, locationName, price, type, image) => {
    setProject({ name, location: locationName, price, type, image })
  }

  const openVideoModal = () => setVideoOpen(true)
  const closeVideoModal = () => setVideoOpen(false)
  const prefillProject = (name) => navigate('/contact', { state: { projectName: name } })

  return (
    <>
      <PageLayout
        mobileMenuOpen={menuOpen}
        onCloseMobileMenu={() => setMenuOpen(false)}
        onToggleMobileMenu={() => setMenuOpen((open) => !open)}
      >
        <Routes location={location}>
          <Route
            element={<HomePage onOpenProjectDetails={openProjectDetails} onOpenVideoModal={openVideoModal} onPrefillProject={prefillProject} onSetSlide={setCurrentSlide} />}
            path="/"
          />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ProjectsPage onOpenProjectDetails={openProjectDetails} onPrefillProject={prefillProject} />} path="/projects" />
          <Route element={<VenturesPage />} path="/ventures" />
          <Route element={<AmenitiesPage />} path="/amenities" />
          <Route element={<ReviewsPage />} path="/reviews" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </PageLayout>

      {project && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={() => setProject(null)} role="presentation">
          <section aria-labelledby="project-modal-title" aria-modal="true" className="crimson-glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-brandRed/40 p-6" onClick={(event) => event.stopPropagation()} role="dialog">
            <button aria-label="Close project details" className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-brandRed" onClick={() => setProject(null)} type="button">
              <i className="fa-solid fa-xmark text-sm" />
            </button>
            <div className="relative mb-4 h-60 overflow-hidden rounded-2xl">
              <img alt={project.name} className="h-full w-full object-cover" src={project.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-darkCard via-transparent to-transparent" />
            </div>
            <h2 className="mb-1 text-2xl font-bold text-white" id="project-modal-title">{project.name}</h2>
            <p className="mb-4 text-xs font-semibold text-brandRed"><i className="fa-solid fa-location-dot mr-1" /> {project.location}</p>
            <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/10 bg-darkBg p-3"><span className="block text-[10px] text-gray-400">Configurations</span><span className="font-bold text-white">{project.type}</span></div>
              <div className="rounded-xl border border-white/10 bg-darkBg p-3"><span className="block text-[10px] text-gray-400">Price Range</span><span className="font-bold text-brandRed">{project.price}</span></div>
            </div>
            <p className="mb-6 text-xs leading-relaxed text-gray-300">Designed with contemporary aesthetics, private elevator lobbies, energy-efficient Smart Glass facades, and state-of-the-art security integrations.</p>
            <button className="block w-full rounded-xl bg-brandRed py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brandRed-hover" onClick={() => { setProject(null); prefillProject(project.name) }} type="button">
              Request Floor Plan &amp; Schedule Visit
            </button>
          </section>
        </div>
      )}

      {videoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={closeVideoModal} role="presentation">
          <section aria-labelledby="legacy-video-title" aria-modal="true" className="relative flex aspect-video w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-brandRed/40 bg-darkCard p-8 text-center" onClick={(event) => event.stopPropagation()} role="dialog">
            <button aria-label="Close legacy film" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-brandRed text-white shadow-lg" onClick={closeVideoModal} type="button"><i className="fa-solid fa-xmark text-lg" /></button>
            <i className="fa-solid fa-circle-play mb-4 animate-pulse text-6xl text-brandRed" />
            <h2 className="mb-2 text-2xl font-bold text-white" id="legacy-video-title">Daarsheel Realty Legacy Film</h2>
            <p className="max-w-md text-sm text-gray-400">Experience 25 years of luxury real estate excellence and world-class craftsmanship.</p>
          </section>
        </div>
      )}
    </>
  )
}

export default Site
