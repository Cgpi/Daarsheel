import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

function EnquirySection() {
  return (
    <section className="relative overflow-hidden border-t border-brandRed/20 bg-darkCard py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,37,42,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal as="p" className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed" delay={120} direction="up">Your next signature address</Reveal>
        <Reveal as="h2" className="mt-5 text-3xl font-extrabold text-white sm:text-5xl" delay={180} direction="up">Begin your property journey with a private consultation.</Reveal>
        <Reveal as="p" className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400" delay={240} direction="up">Share your requirements and our advisors will help you compare opportunities, understand value, and take the next confident step.</Reveal>
        <Reveal as="div" className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row" delay={300} direction="up">
          <Link className="rounded-full bg-brandRed px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,37,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandRed-hover hover:shadow-[0_0_35px_rgba(229,37,42,0.7)]" to="/contact">
            Schedule a consultation
          </Link>
          <a className="rounded-full border border-white/15 bg-darkBg px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-brandRed hover:text-brandRed" href="tel:+919876543210">
            Call sales desk
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default EnquirySection
