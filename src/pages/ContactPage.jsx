import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const contactOptions = [
  { icon: 'fa-phone', title: 'Call our sales desk', detail: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: 'fa-envelope', title: 'Email us', detail: 'sales@daarsheelrealty.com', href: 'mailto:sales@daarsheelrealty.com' },
  { icon: 'fa-location-dot', title: 'Visit our office', detail: 'Baner Road, Pune, Maharashtra', href: '#' },
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.state?.projectName) {
      const select = document.getElementById('project-select')
      if (select) select.value = location.state.projectName
    }
  }, [location.state])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Contact us</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">Let’s discuss your next <span className="text-gradient-red">signature address.</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">Speak with our real estate specialists to explore residences, investments, hospitality opportunities, and custom property requirements.</p>
          <div className="mt-8 space-y-4">
            {contactOptions.map((option) => (
              <a className="flex items-center gap-4 rounded-2xl border border-white/10 bg-darkCard p-4 transition-colors hover:border-brandRed/40" href={option.href} key={option.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brandRed/30 bg-brandRed/10 text-brandRed"><i className={`fa-solid ${option.icon}`} /></span>
                <span><span className="block text-xs uppercase tracking-wider text-gray-500">{option.title}</span><span className="mt-1 block font-bold text-white">{option.detail}</span></span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="rounded-3xl border border-white/10 bg-darkCard p-6 sm:p-9" onSubmit={handleSubmit}>
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-white/10 pb-6"><div><p className="text-xs font-bold uppercase tracking-wider text-brandRed">Request a callback</p><h2 className="mt-2 text-2xl font-extrabold text-white">Tell us about your requirement</h2></div><span className="hidden rounded-full border border-brandRed/20 bg-brandRed/10 px-3 py-1 text-[10px] font-bold uppercase text-brandRed sm:block">No-obligation</span></div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-gray-300">Full name<input className="mt-2 w-full rounded-xl border border-white/10 bg-darkBg px-4 py-3.5 text-white outline-none transition focus:border-brandRed" name="name" placeholder="Your name" required type="text" /></label>
              <label className="block text-sm font-semibold text-gray-300">Phone number<input className="mt-2 w-full rounded-xl border border-white/10 bg-darkBg px-4 py-3.5 text-white outline-none transition focus:border-brandRed" name="phone" placeholder="Your phone" required type="tel" /></label>
              <label className="block text-sm font-semibold text-gray-300">Email address<input className="mt-2 w-full rounded-xl border border-white/10 bg-darkBg px-4 py-3.5 text-white outline-none transition focus:border-brandRed" name="email" placeholder="Your email" required type="email" /></label>
              <label className="block text-sm font-semibold text-gray-300">Project interest<select className="mt-2 w-full rounded-xl border border-white/10 bg-darkBg px-4 py-3.5 text-white outline-none transition focus:border-brandRed" defaultValue="" id="project-select" name="interest" required><option disabled value="">Select a project</option><option value="Luminare Heights">Luminare Heights</option><option value="Kuber Ananta">Kuber Ananta</option><option value="Vasant Bahar">Vasant Bahar</option><option value="The Serenity Tower">The Serenity Tower</option><option value="Bliss Coast">Bliss Coast</option><option value="Other">Other</option></select></label>
              <label className="block text-sm font-semibold text-gray-300 sm:col-span-2">Requirements<textarea className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-darkBg px-4 py-3.5 text-white outline-none transition focus:border-brandRed" name="message" placeholder="Tell us your budget, preferred location, and desired timeline" required /></label>
            </div>
            <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs leading-relaxed text-gray-500">By submitting, you agree to be contacted by our team regarding your enquiry.</p>
              <button className="rounded-full bg-brandRed px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brandRed-hover" type="submit">Send enquiry</button>
            </div>
            {submitted && <p className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">Thank you. Our team will contact you shortly.</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
