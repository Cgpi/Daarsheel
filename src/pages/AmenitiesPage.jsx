import { amenities } from '../data/company'

function AmenitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Lifestyle amenities</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">Experience life, refined.</h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">Every community is conceived as a complete destination — where comfort, wellness, leisure, and security live in perfect harmony.</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <article className="group overflow-hidden rounded-3xl border border-white/10 bg-darkCard" key={amenity.title}>
            <div className="relative h-64 overflow-hidden"><img alt={amenity.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={amenity.image} /><div className="absolute inset-0 bg-gradient-to-t from-darkCard via-transparent to-transparent" /><div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-brandRed/30 bg-darkBg/70 text-brandRed backdrop-blur-sm"><i className={`fa-solid ${amenity.icon}`} /></div></div>
            <div className="p-7"><h2 className="text-xl font-bold text-white">{amenity.title}</h2><p className="mt-3 text-sm leading-relaxed text-gray-400">{amenity.description}</p></div>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-3xl border border-brandRed/20 bg-darkCard p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">The Daarsheel difference</p><h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Comfort designed around your daily rituals.</h2></div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="rounded-2xl border border-white/10 bg-darkBg p-5"><i className="fa-solid fa-mug-hot text-brandRed" /><p className="mt-3 font-bold text-white">Residents Lounge</p></div>
            <div className="rounded-2xl border border-white/10 bg-darkBg p-5"><i className="fa-solid fa-person-swimming text-brandRed" /><p className="mt-3 font-bold text-white">Pool Deck</p></div>
            <div className="rounded-2xl border border-white/10 bg-darkBg p-5"><i className="fa-solid fa-house-chimney-window text-brandRed" /><p className="mt-3 font-bold text-white">Smart Homes</p></div>
            <div className="rounded-2xl border border-white/10 bg-darkBg p-5"><i className="fa-solid fa-shield-heart text-brandRed" /><p className="mt-3 font-bold text-white">24/7 Security</p></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AmenitiesPage
