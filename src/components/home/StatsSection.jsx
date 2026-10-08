import Reveal from '../Reveal.jsx'

const stats = [
  { value: 350000, icon: 'fa-building', label: 'Sq.Ft Delivered', detail: 'Mastercrafted Living Spaces' },
  { value: 25, icon: 'fa-award', label: 'Years of Trust', detail: 'Uncompromising Legacy' },
  { value: 1500, icon: 'fa-users', label: 'Happy Families', detail: 'Thriving Communities' },
  { value: 18, icon: 'fa-gem', label: 'Landmark Projects', detail: 'Across Pune & Maharashtra' },
]

function StatsSection() {
  return (
    <section className="relative z-20 border-y border-brandRed/20 bg-darkCard py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <Reveal as="div" className="group flex flex-col items-center p-4 text-center" delay={index * 120} direction="up" key={stat.label}>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-brandRed/30 bg-brandRed/10 text-brandRed transition-all duration-300 group-hover:scale-110 group-hover:bg-brandRed group-hover:text-white">
              <i className={`fa-solid ${stat.icon} text-xl`} />
            </div>
            <span className="counter text-3xl font-extrabold tracking-tight text-white sm:text-4xl" data-target={stat.value}>0</span>
            <span className="mt-1 text-xs font-bold uppercase tracking-widest text-brandRed">{stat.label}</span>
            <p className="mt-1 text-xs text-gray-400">{stat.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
