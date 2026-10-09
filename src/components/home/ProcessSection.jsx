import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const steps = [
  {
    number: '01',
    title: 'Discover Your Requirement',
    description: 'Share your preferred location, budget, lifestyle, and property goals with our sales advisors.',
    icon: 'fa-magnifying-glass',
  },
  {
    number: '02',
    title: 'Select the Right Address',
    description: 'Explore configurations, floor plans, amenities, and investment potential with expert guidance.',
    icon: 'fa-list-check',
  },
  {
    number: '03',
    title: 'Confirm Your Investment',
    description: 'Review documentation, pricing, payment terms, and legal clarity before proceeding.',
    icon: 'fa-file-signature',
  },
  {
    number: '04',
    title: 'Move Forward With Confidence',
    description: 'Receive regular updates, personalized support, and a seamless journey through possession.',
    icon: 'fa-hands-helping',
  },
]

function ProcessSection() {
  return (
    <section className="border-y border-white/10 bg-darkCard py-24" id="home-process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end" delay={120} direction="up">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">How it works</p>
            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-5xl">A simpler journey from <span className="text-gradient-red">first enquiry to final handover</span></h2>
          </div>
          <Link className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brandRed hover:text-white" to="/contact">
            Talk to our advisors <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal as="div" className="relative overflow-hidden rounded-3xl border border-white/10 bg-darkBg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30" delay={index * 120 + 180} direction={index % 2 === 0 ? 'left' : 'right'} key={step.number}>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brandRed/10 blur-2xl" />
              <span className="text-4xl font-extrabold text-brandRed/40">{step.number}</span>
              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-brandRed/30 bg-brandRed/10 text-brandRed">
                <i className={`fa-solid ${step.icon}`} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
