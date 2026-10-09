import Reveal from '../Reveal.jsx'
import { directors } from '../../data/company.js'

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-darkBg py-24" id="about">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" className="mb-4 text-xs font-bold uppercase tracking-widest text-brandRed" delay={120} direction="left">Meet Our Directors</Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {directors.map((director, index) => (
                <Reveal as="article" className="overflow-hidden rounded-2xl border border-white/10 bg-darkCard" delay={180 + index * 100} direction="up" key={director.name}>
                  <div className="aspect-[4/5] overflow-hidden bg-darkBg">
                    <img alt={director.name} className="h-full w-full object-cover" src={director.image} />
                  </div>
                  <div className="border-t border-white/10 p-3 sm:p-4">
                    <h3 className="text-sm font-bold leading-tight text-white sm:text-base">{director.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brandRed">{director.title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <Reveal as="div" className="inline-flex items-center gap-2" delay={140} direction="up"><span className="h-0.5 w-8 bg-brandRed" /><span className="text-xs font-bold uppercase tracking-widest text-brandRed">Our Legacy & Commitment</span></Reveal>
            <Reveal as="h2" className="text-2xl font-extrabold leading-tight text-white sm:text-5xl" delay={200} direction="up">Rooted in Trust.<br /><span className="text-gradient-red">Built for Generations.</span></Reveal>
            <Reveal as="p" className="text-base leading-relaxed text-gray-300" delay={260} direction="up">For over two decades, Daarsheel Realty has stood as Pune’s beacon of luxury real estate development. We fuse timeless architectural elegance with modern engineering precision to create residential and commercial icons that transcend trend and time.</Reveal>
            <Reveal as="p" className="text-sm leading-relaxed text-gray-400" delay={320} direction="up">Every foundation we lay is backed by transparent ethics, uncompromising material quality, and an unwavering commitment to deliver on time, every time.</Reveal>
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <Reveal as="div" className="flex items-start gap-3 rounded-2xl border border-white/5 bg-darkCard p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30" delay={380} direction="up"><div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brandRed/30 bg-brandRed/10 text-brandRed"><i className="fa-solid fa-compass-drafting text-lg" /></div><div><h5 className="text-sm font-bold text-white">Architectural Perfection</h5><p className="mt-1 text-xs text-gray-400">Bespoke luxury designs by world-renowned architects.</p></div></Reveal>
              <Reveal as="div" className="flex items-start gap-3 rounded-2xl border border-white/5 bg-darkCard p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30" delay={440} direction="up"><div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brandRed/30 bg-brandRed/10 text-brandRed"><i className="fa-solid fa-handshake-angle text-lg" /></div><div><h5 className="text-sm font-bold text-white">Unwavering Integrity</h5><p className="mt-1 text-xs text-gray-400">100% transparent pricing and clear title deeds.</p></div></Reveal>
            </div>
            <Reveal as="a" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-brandRed transition-colors hover:text-white" delay={500} direction="up" href="/pdf/DaarsheelRealty.pdf" rel="noreferrer" target="_blank"><span>Discover Our Corporate Brochure</span><i className="fa-solid fa-download text-xs transition-transform group-hover:translate-x-1" /></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
