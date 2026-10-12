import { Link } from 'react-router-dom'

const termsSections = [
  {
    title: 'Acceptance of terms',
    body:
      'By accessing or using the Daarsheel Realty website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website or contact us for any services or enquiries.',
  },
  {
    title: 'Website information',
    body:
      'The information on this website is intended to provide general information about our projects, ventures, developments, and services. While we strive to keep the content accurate and up to date, specifications, pricing, availability, and timelines may change without notice and are subject to final documentation and formal approvals.',
  },
  {
    title: 'Property enquiries and bookings',
    body:
      'Any enquiry submitted through the website is treated as a request for information and does not constitute a reservation, commitment, or acceptance of a purchase proposal. All bookings, applications, and transactions are subject to formal agreement, due diligence, legal documentation, and applicable regulatory compliance.',
  },
  {
    title: 'No warranties',
    body:
      'We do our best to ensure the correctness and completeness of website content, but we do not guarantee that it will always be error-free, complete, or current. We disclaim all express and implied warranties, including merchantability, fitness for a particular purpose, and non-infringement to the extent permitted by law.',
  },
  {
    title: 'Limitation of liability',
    body:
      'Daarsheel Realty shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the website or reliance on information presented here, including but not limited to loss of business, loss of opportunities, or loss of data, even if we have been advised of the possibility of such damages.',
  },
  {
    title: 'Intellectual property',
    body:
      'All website content, including text, images, branding, logos, and design elements, is the property of Daarsheel Realty or its licensors and may not be copied, distributed, modified, or reused without prior written permission. Any unauthorised use may result in legal action.',
  },
  {
    title: 'Privacy and data use',
    body:
      'Information submitted through this website is processed in accordance with our Privacy Policy. By contacting us or submitting an enquiry, you consent to the collection, processing, and use of that information as described in the Privacy Policy.',
  },
  {
    title: 'Governing law',
    body:
      'These terms are governed by the laws of India, and any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, unless otherwise required by applicable law.',
  },
]

function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/10 bg-darkCard p-8 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Terms of Service</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">Terms and conditions for using our website.</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300">
          These terms of service govern your use of the Daarsheel Realty website and any related interaction with our team, projects, and property information.
        </p>
        <p className="mt-3 text-sm text-gray-400">Effective date: October 12, 2026</p>
      </section>

      <div className="mt-10 space-y-6">
        {termsSections.map((section) => (
          <section className="rounded-3xl border border-white/10 bg-darkCard p-6 sm:p-8" key={section.title}>
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-300">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-brandRed/30 bg-brandRed/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">Need clarification?</h2>
        <p className="mt-3 text-base leading-relaxed text-gray-300">
          If you have any questions about these terms, please speak with our sales team before proceeding with any property enquiry or booking request.
        </p>
        <Link className="mt-5 inline-flex items-center gap-3 rounded-full bg-brandRed px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brandRed-hover" to="/contact">
          Contact our team <i className="fa-solid fa-arrow-right-long" />
        </Link>
      </section>
    </div>
  )
}

export default TermsOfServicePage
