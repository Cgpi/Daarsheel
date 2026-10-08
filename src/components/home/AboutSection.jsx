import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-darkBg py-24" id="about">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="crimson-glass relative overflow-hidden rounded-3xl border border-brandRed/30 p-3 shadow-[0_0_50px_rgba(229,37,42,0.2)]">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img alt="Daarsheel Realty leadership" className="h-full w-full object-cover" src="/images/image-05.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-90" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-darkBg/70 p-5 backdrop-blur-lg">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brandRed">Founders & Leadership</p>
                <h4 className="text-lg font-bold text-white">Mr. Darsheel Shah & Directors</h4>
                <p className="mt-1 text-xs italic text-gray-300">“Building not just structures, but living inheritances of unmatched luxury.”</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-brandRed/20 blur-3xl" />
          </div>
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2"><span className="h-0.5 w-8 bg-brandRed" /><span className="text-xs font-bold uppercase tracking-widest text-brandRed">Our Legacy & Commitment</span></div>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">Rooted in Trust.<br /><span className="text-gradient-red">Built for Generations.</span></h2>
            <p className="text-base leading-relaxed text-gray-300">For over two decades, Daarsheel Realty has stood as Pune’s beacon of luxury real estate development. We fuse timeless architectural elegance with modern engineering precision to create residential and commercial icons that transcend trend and time.</p>
            <p className="text-sm leading-relaxed text-gray-400">Every foundation we lay is backed by transparent ethics, uncompromising material quality, and an unwavering commitment to deliver on time, every time.</p>
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-darkCard p-4 transition-colors hover:border-brandRed/30"><div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brandRed/30 bg-brandRed/10 text-brandRed"><i className="fa-solid fa-compass-drafting text-lg" /></div><div><h5 className="text-sm font-bold text-white">Architectural Perfection</h5><p className="mt-1 text-xs text-gray-400">Bespoke luxury designs by world-renowned architects.</p></div></div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-darkCard p-4 transition-colors hover:border-brandRed/30"><div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brandRed/30 bg-brandRed/10 text-brandRed"><i className="fa-solid fa-handshake-angle text-lg" /></div><div><h5 className="text-sm font-bold text-white">Unwavering Integrity</h5><p className="mt-1 text-xs text-gray-400">100% transparent pricing and clear title deeds.</p></div></div>
            </div>
            <Link className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-brandRed transition-colors hover:text-white" to="/contact"><span>Discover Our Corporate Brochure</span><i className="fa-solid fa-download text-xs transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
