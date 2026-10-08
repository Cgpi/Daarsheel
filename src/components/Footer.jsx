import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { company, navigation } from "../data/company";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-darkBg pt-16 pb-8 text-xs text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <Reveal
            as="div"
            className="space-y-4 lg:col-span-2"
            delay={120}
            direction="up"
          >
            <Link className="flex items-center gap-3" to="/">
              <img
                alt="Daarsheel Realty logo"
                className="h-10 w-8 object-contain"
                src="/images/logo/logo.png"
              />
              <span className="font-heading text-lg font-bold tracking-wider text-white">
                DAARSHEEL <span className="text-brandRed">REALTY</span>
              </span>
            </Link>
            <p className="max-w-sm leading-relaxed text-gray-400">
              Setting benchmarks in luxury real estate, premium hospitality, and
              strategic financial advisory across Pune and western India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {["facebook-f", "instagram", "linkedin-in", "youtube"].map(
                (icon) => (
                  <a
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-darkCard text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brandRed hover:text-brandRed"
                    href="#"
                    key={icon}
                  >
                    <i className={`fa-brands fa-${icon} text-xs`} />
                  </a>
                ),
              )}
            </div>
          </Reveal>

          <Reveal as="div" delay={180} direction="up">
            <h5 className="mb-4 font-bold uppercase tracking-wider text-white">
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    className="transition-colors hover:text-brandRed"
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* <Reveal as="div" delay={240} direction="up">
            <h5 className="mb-4 font-bold uppercase tracking-wider text-white">Core Focus</h5>
            <ul className="space-y-2.5">
              <li>Luxury Residences</li>
              <li>Commercial Developments</li>
              <li>Hospitality Ventures</li>
              <li>Investment Advisory</li>
            </ul>
          </Reveal> */}

          <Reveal as="div" className="lg:col-span-1" delay={300} direction="up">
            <h5 className="mb-4 font-bold uppercase tracking-wider text-white">
              Contact
            </h5>
            <ul className="space-y-2.5">
              <li>
                <a className="hover:text-brandRed" href={company.phoneHref}>
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-brandRed"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </Reveal>
        </div>

        <Reveal
          as="div"
          className="flex flex-col items-center justify-between border-t border-white/10 pt-6 text-center md:flex-row md:text-left"
          delay={360}
          direction="up"
        >
          <p>
            © {currentYear} {company.name}. All rights reserved.
          </p>
          <div className="mt-2 flex items-center gap-4 md:mt-0">
            <a className="hover:text-brandRed" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-brandRed" href="#">
              Terms of Service
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
