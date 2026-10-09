import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { directors } from '../data/company'

const storyPillars = [
  { icon: 'fa-seedling', title: 'Purposeful Design', description: 'We shape spaces around how families live, work, grow, and celebrate.' },
  { icon: 'fa-arrows-to-eye', title: 'Human-Centered Living', description: 'Every home is planned for comfort, natural light, privacy, and effortless flow.' },
  { icon: 'fa-shield-heart', title: 'Trust at Every Step', description: 'Transparent transactions, clean documentation, and ethical delivery standards.' },
]

const milestones = [
  { year: '1998', title: 'Foundation', text: 'Daarsheel Realty began with a bold vision to redefine premium residential living in Pune.' },
  { year: '2008', title: 'Expansion', text: 'We entered commercial real estate and luxury hospitality with landmark ventures.' },
  { year: '2018', title: 'Recognition', text: 'Our projects became benchmark examples for design, quality, and customer satisfaction.' },
  { year: '2025', title: 'Future Forward', text: 'We continue building next-generation communities driven by sustainability and innovation.' },
]

function DirectorPortrait({ director, index, className = '' }) {
  return (
    <Reveal as="article" className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-darkBg ${className}`} delay={140 + index * 100} direction={index === 0 ? 'left' : 'right'}>
      <img alt={director.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" src={director.image} />
      <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/10 to-transparent" />
      <p className="absolute left-3 top-3 border-l-2 border-brandRed pl-2 text-[10px] font-bold uppercase tracking-wider text-white sm:left-4 sm:top-4 sm:pl-3">Director 0{index + 1}</p>
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-brandRed">{director.title}</p>
        <h3 className="mt-1 text-sm font-extrabold leading-tight text-white sm:text-lg">{director.name}</h3>
      </div>
    </Reveal>
  )
}

function AboutPage() {
  return (
    <div className="bg-darkBg text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,37,42,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="max-w-4xl" delay={120} direction="hero">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Our Legacy</p>
            <h1 className="text-2xl font-extrabold leading-tight sm:text-6xl">Creating spaces that become <span className="text-gradient-red">stories for generations.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">From luxury residences to strategic business investments, we design every detail with vision, craftsmanship, and a deep respect for the people who will live, work, and thrive within it.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)_minmax(0,1.2fr)]">
          <DirectorPortrait className="order-1 lg:order-none" director={directors[0]} index={0} />
          <Reveal as="div" className="order-3 min-w-0 lg:order-none" delay={180} direction="up">
            <p className="text-xs font-bold uppercase tracking-widest text-brandRed">Who We Are</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-5xl">A builder shaped by <span className="text-gradient-red">purpose, quality, and trust.</span></h2>
            <p className="mt-6 text-base leading-relaxed text-gray-300">Daarsheel Realty is not merely a real estate company; it is a design-led enterprise driven by a philosophy of enduring elegance. Our teams combine architectural intelligence, responsible development practices, and market expertise to deliver communities that feel personal and premium.</p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">We are known for our disciplined project delivery, transparent communication, and highly curated customer journeys that transform the act of buying property into an enriching life milestone.</p>
          </Reveal>
          <DirectorPortrait className="order-2 lg:order-none" director={directors[1]} index={1} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-darkCard py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Our foundations</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-5xl">The values behind every landmark.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {storyPillars.map((pillar, index) => (
              <Reveal as="article" className="rounded-3xl border border-white/10 bg-darkBg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/40" delay={index * 120 + 180} direction={index % 2 === 0 ? 'up' : 'right'} key={pillar.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brandRed/30 bg-brandRed/10 text-lg text-brandRed"><i className={`fa-solid ${pillar.icon}`} /></div>
                <h3 className="mt-6 text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Our Journey</p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-5xl">Milestones that shaped our legacy.</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <Reveal as="article" className="relative overflow-hidden rounded-3xl border border-white/10 bg-darkCard p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30" delay={index * 90 + 160} direction={index % 2 === 0 ? 'up' : 'left'} key={milestone.year}>
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-brandRed/15" />
              <p className="text-2xl font-extrabold text-brandRed">{milestone.year}</p>
              <h3 className="mt-5 text-lg font-bold text-white">{milestone.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{milestone.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-24">
        <Reveal as="div" className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8" delay={180} direction="up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">A promise</p>
          <h2 className="mt-4 text-2xl font-extrabold sm:text-5xl">The future deserves spaces built with care.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300">Let’s create something extraordinary together — a home, an investment, or a project that reflects your ambition and stands the test of time.</p>
          <Link className="mt-8 inline-flex items-center gap-3 rounded-full bg-brandRed px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandRed-hover" to="/contact">Schedule a private consultation <i className="fa-solid fa-arrow-right-long" /></Link>
        </Reveal>
      </section>
    </div>
  )
}

export default AboutPage
