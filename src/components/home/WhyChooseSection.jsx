import Reveal from '../Reveal.jsx'

const advantages = [
  {
    icon: 'fa-building-columns',
    title: 'Thoughtful Development',
    description: 'Architecturally distinctive homes and commercial spaces designed around modern lifestyles and long-term value.',
  },
  {
    icon: 'fa-shield-heart',
    title: 'Transparent Process',
    description: 'Clear documentation, honest pricing, and consistent communication from booking through possession.',
  },
  {
    icon: 'fa-location-dot',
    title: 'Prime Locations',
    description: 'Projects thoughtfully positioned in Pune’s most desirable neighborhoods with strong connectivity and amenities.',
  },
  {
    icon: 'fa-award',
    title: 'Quality Assurance',
    description: 'Meticulous material selection, engineering standards, and customer-focused project delivery.',
  },
]

function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-darkBg py-24" id="why-choose-us">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandRed to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="mx-auto mb-14 max-w-3xl text-center" delay={120} direction="up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Why choose Daarsheel</p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">A trusted address for <span className="text-gradient-red">life-changing investments</span></h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400">Every project is created with careful planning, premium craftsmanship, and a commitment to lasting customer confidence.</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <Reveal as="article" className="group rounded-3xl border border-white/10 bg-darkCard p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/40 hover:bg-darkBg" delay={index * 120 + 180} direction={index % 2 === 0 ? 'up' : 'right'} key={advantage.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brandRed/30 bg-brandRed/10 text-xl text-brandRed transition-all duration-300 group-hover:scale-110 group-hover:bg-brandRed group-hover:text-white">
                <i className={`fa-solid ${advantage.icon}`} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{advantage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{advantage.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
