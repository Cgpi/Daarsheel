import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const heroSlides = [
  { image: '/images/image-01.jpg', alt: 'Luxury villa architecture' },
  { image: '/images/image-02.jpg', alt: 'Ultra-luxury penthouse interior' },
  { image: '/images/image-03.jpg', alt: 'Modern high-rise towers' },
]

function HeroSection({ onOpenVideoModal, onPrefillProject, onSetSlide }) {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden pb-16 pt-0 md:min-h-[calc(100vh-6rem)]">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`} key={slide.image}>
            <img alt={slide.alt} className="h-full w-full scale-105 object-cover" src={slide.image} />
            <div className="absolute inset-0 bg-gradient-to-r from-darkBg via-darkBg/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-darkBg/60" />
          </div>
        ))}
      </div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col items-start space-y-6 lg:col-span-8">
          <Reveal as="div" className="inline-flex items-center gap-2.5 rounded-full border border-brandRed/40 bg-darkBg/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(229,37,42,0.3)]" delay={80} direction="down">
            <span className="h-2 w-2 animate-ping rounded-full bg-brandRed" />
            <span>Pune's Premier Luxury Developer</span>
          </Reveal>

          <Reveal as="h1" className="w-full max-w-full text-[1.9rem] leading-[0.96] font-extrabold tracking-tight text-white sm:max-w-[90vw] sm:text-5xl lg:max-w-[700px] lg:text-6xl" delay={160} direction="up">
            <span className="hero-word block">A LIFE BEYOND</span>
            <span className="hero-word text-gradient-red block text-[1.6rem] sm:text-5xl lg:text-6xl">IMAGINATION.</span>
            <span className="hero-word text-gradient-gold block text-[1.25rem] leading-[1.1] sm:text-5xl sm:leading-[1.1] lg:text-6xl">REFINED<br />LUXURY.</span>
          </Reveal>

          <Reveal as="p" className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-xl" delay={240} direction="up">
            Crafting iconic architectural landmarks, ultra-luxurious residential estates, and vibrant commercial spaces engineered for generations of distinction.
          </Reveal>

          <Reveal as="div" className="flex flex-wrap items-center gap-4 pt-4" delay={300} direction="up">
            <Link className="flex items-center gap-3 rounded-full bg-brandRed px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,37,42,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandRed-hover hover:shadow-[0_0_40px_rgba(229,37,42,0.9)]" to="/projects">
              Explore Portfolio
              <i className="fa-solid fa-arrow-right-long text-xs" />
            </Link>
            <button className="group flex items-center gap-3 rounded-full border border-white/20 bg-darkBg/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-brandRed hover:bg-brandRed/20" onClick={onOpenVideoModal} type="button">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brandRed transition-transform group-hover:scale-110">
                <i className="fa-solid fa-play ml-0.5 text-xs text-white" />
              </span>
              Watch Legacy Video
            </button>
          </Reveal>

          <Reveal as="div" className="flex items-center gap-3 pt-6" delay={360} direction="up" aria-label="Hero slide controls">
            {[0, 1, 2].map((index) => (
              <button aria-label={`Slide ${index + 1}`} className={`slide-indicator h-1.5 rounded-full transition-all duration-300 ${index === 0 ? 'w-10 bg-brandRed' : 'w-3 bg-white/30 hover:bg-brandRed'}`} key={index} onClick={() => onSetSlide(index)} type="button" />
            ))}
          </Reveal>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <Reveal as="div" className="crimson-glass hero-card relative animate-float overflow-hidden rounded-3xl border border-brandRed/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl" delay={200} direction="right">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brandRed/20 blur-2xl" />
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brandRed">Flagship Showcase</span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-400">New Launch</span>
            </div>
            <div className="group relative mb-4 h-48 overflow-hidden rounded-2xl">
              <img alt="Luminare Heights" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/image-04.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">Luminare Heights</h4>
                  <p className="text-xs text-gray-300"><i className="fa-solid fa-location-dot text-brandRed" /> Baner, Pune</p>
                </div>
                <span className="rounded-lg border border-brandRed/30 bg-black/60 px-2.5 py-1 text-xs font-bold text-brandRed backdrop-blur-sm">₹ 2.85 Cr+</span>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-xl border border-white/5 bg-darkBg/60 p-2"><span className="block text-[10px] text-gray-400">Configurations</span><span className="font-bold text-white">3, 4 & 5 BHK</span></div>
              <div className="rounded-xl border border-white/5 bg-darkBg/60 p-2"><span className="block text-[10px] text-gray-400">Possession</span><span className="font-bold text-brandRed">Dec 2026</span></div>
              <div className="rounded-xl border border-white/5 bg-darkBg/60 p-2"><span className="block text-[10px] text-gray-400">Status</span><span className="font-bold text-white">Under Const.</span></div>
            </div>
            <button className="block w-full rounded-xl bg-brandRed px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(229,37,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandRed-hover" onClick={() => onPrefillProject('Luminare Heights')} type="button">
              Book VIP Preview
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
