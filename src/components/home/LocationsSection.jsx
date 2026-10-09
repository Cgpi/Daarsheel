import Reveal from '../Reveal.jsx'

const locations = [
  {
    name: 'Baner',
    image: '/images/image-07.jpg',
    description: 'Premium residential addresses with convenient access to business districts and lifestyle destinations.',
  },
  {
    name: 'Koregaon Park',
    image: '/images/image-09.jpg',
    description: 'An established urban enclave known for its elegance, social atmosphere, and refined living.',
  },
  {
    name: 'Kothrud',
    image: '/images/image-11.jpg',
    description: 'A well-connected residential hub offering a balanced mix of convenience, culture, and community.',
  },
]

function LocationsSection() {
  return (
    <section className="relative overflow-hidden bg-darkBg py-24" id="locations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal as="div" className="mb-14 text-center" delay={120} direction="up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Addressed across Pune</p>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-5xl">Exceptional living in <span className="text-gradient-red">Pune’s most sought-after neighborhoods</span></h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {locations.map((location, index) => (
            <Reveal as="article" className="group overflow-hidden rounded-3xl border border-white/10 bg-darkCard" delay={index * 140 + 180} direction={index % 2 === 0 ? 'up' : 'right'} key={location.name}>
              <div className="relative h-72 overflow-hidden">
                <img alt={location.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={location.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">{location.name}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-gray-400">{location.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationsSection
