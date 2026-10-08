import { ventures } from '../data/company'

function VenturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Our ventures</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">A portfolio built on <span className="text-gradient-red">diversified excellence.</span></h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">Beyond real estate, Daarsheel Realty creates value across hospitality, leisure, and strategic advisory sectors through thoughtful partnerships and premium experiences.</p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {ventures.map((venture, index) => (
          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-darkCard p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/40" key={venture.title}>
            <div className="flex items-center justify-between gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brandRed/30 bg-brandRed/10 text-2xl text-brandRed"><i className={`fa-solid ${venture.icon}`} /></div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Vertical {index + 1}</span>
            </div>
            <h2 className="mt-7 text-2xl font-bold text-white">{venture.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">{venture.description}</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-2">
              {venture.items.map((item) => <li className="flex items-center gap-2 rounded-xl border border-white/5 bg-darkBg px-3 py-2.5" key={item}><i className="fa-solid fa-check text-brandRed" /> {item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default VenturesPage
