import { Link } from 'react-router-dom'

const policySections = [
  {
    title: 'Information we collect',
    body:
      'We may collect personal information you provide directly to us, such as your name, phone number, email address, property interest, and enquiry details. We may also collect usage information through cookies and analytics tools to improve website performance and user experience.',
  },
  {
    title: 'How we use your information',
    body:
      'Your information is used to respond to enquiries, provide project details, schedule consultations, communicate about appointments and updates, and fulfil legal or operational requirements. We may also use aggregated, non-identifying information to improve site performance and marketing efforts.',
  },
  {
    title: 'Data sharing and disclosure',
    body:
      'We do not sell your personal information. We may share information with trusted service providers, legal advisors, and internal teams only where necessary to deliver our services, support business operations, or comply with applicable laws and regulations.',
  },
  {
    title: 'Cookies and tracking',
    body:
      'Our website may use cookies and similar technologies to remember user preferences, understand website traffic, and provide a smoother browsing experience. You may disable cookies in your browser settings, though some website functions may become limited.',
  },
  {
    title: 'Data security',
    body:
      'We use reasonable administrative, technical, and organisational safeguards designed to protect personal information from unauthorised access, misuse, or disclosure. However, no system can be guaranteed completely secure and we encourage users to protect their login credentials and sensitive information.',
  },
  {
    title: 'Your rights',
    body:
      'You may request access to, correction of, or deletion of your personal information, subject to applicable law. You may also object to certain processing or request restrictions on how your data is used. To exercise these rights, please contact us using the details below.',
  },
  {
    title: 'Third-party links',
    body:
      'Our website may include links to third-party websites or platforms. We are not responsible for their privacy practices and encourage you to review their policies before sharing personal information with them.',
  },
]

function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/10 bg-darkCard p-8 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Privacy Policy</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">Your information is handled with care.</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300">
          This privacy policy explains how Daarsheel Realty collects, uses, stores, and protects personal information when you visit our website, enquire about projects, or interact with our team.
        </p>
        <p className="mt-3 text-sm text-gray-400">Effective date: October 12, 2026</p>
      </section>

      <div className="mt-10 space-y-6">
        {policySections.map((section) => (
          <section className="rounded-3xl border border-white/10 bg-darkCard p-6 sm:p-8" key={section.title}>
            <h2 className="text-xl font-bold text-white">{section.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-300">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-brandRed/30 bg-brandRed/5 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">Contact us</h2>
        <p className="mt-3 text-base leading-relaxed text-gray-300">
          If you have questions about this policy or would like to exercise your rights, please contact our team at sales@daarsheelrealty.com or call +91 70304 09118.
        </p>
        <Link className="mt-5 inline-flex items-center gap-3 rounded-full bg-brandRed px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brandRed-hover" to="/contact">
          Contact us <i className="fa-solid fa-arrow-right-long" />
        </Link>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
