import Reveal from '../components/Reveal.jsx'
import { testimonials } from '../data/company'

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal as="div" className="mx-auto max-w-3xl text-center" delay={120} direction="hero">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Resident stories</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">People who found their <span className="text-gradient-red">perfect address.</span></h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">Our homeowners and investors trust us because we deliver not only spaces, but experiences that exceed expectations.</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal as="article" className="relative flex flex-col rounded-3xl border border-white/10 bg-darkCard p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/40" delay={index * 110 + 180} direction={index % 2 === 0 ? 'up' : 'right'} key={testimonial.author}>
            <div className="mb-5 text-xl text-brandRed"><i className="fa-solid fa-quote-left" /></div>
            <p className="flex-1 text-base leading-relaxed text-gray-300">“{testimonial.quote}”</p>
            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
              <img alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" src={testimonial.image} />
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="section" className="mt-20 rounded-3xl border border-brandRed/20 bg-darkCard px-6 py-12 text-center sm:px-12" delay={220} direction="up">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Client satisfaction</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
          <span className="text-4xl font-extrabold text-white">4.9/5</span>
          <span className="text-sm text-gray-400">Average family satisfaction rating</span>
        </div>
      </Reveal>
    </div>
  )
}

export default ReviewsPage
