import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import LazyVideo from "@/components/LazyVideo";
import styles from "./page.module.css";

const services = [
  {
    title: "Structural Carpentry",
    meta: "Frames & Reinforcement",
    description:
      "Timber framing, structural repairs, and load-bearing solutions built for longevity.",
    image: "/placeholders/drone-1.svg",
  },
  {
    title: "Exterior Builds",
    meta: "Cladding & Weatherproofing",
    description:
      "Durable exterior envelopes, bespoke cladding, and protective finishes.",
    image: "/placeholders/drone-2.svg",
  },
  {
    title: "Renovation Packages",
    meta: "Full-Site Upgrades",
    description:
      "End-to-end renovation management with clear timelines and clean handovers.",
    image: "/placeholders/drone-3.svg",
  }
];

const projects = [
  {
    title: "Project 1",
    meta: "Project Description",
    image: "/placeholders/project-1.svg",
  },
  {
    title: "Project 2",
    meta: "Project Description",
    image: "/placeholders/project-2.svg",
  },
  {
    title: "Project 3",
    meta: "Project Description",
    image: "/placeholders/project-3.svg",
  },
];

const reviews = [
  {
    quote:
      "Placeholder testimonial.....",
    name: "Client Name",
  },
  {
    quote:
      "Placeholder testimonial.....",
    name: "Client Name",
  },
  {
    quote:
       "Placeholder testimonial.....",
    name: "Client Name",
  },
];

const team = [
  {
    name: "Member Name",
    role: "Member Role",
    bio: "A small bio",
    image: "/placeholders/person-placeholder.jpg",
  },
  {
    name: "Member Name",
    role: "Member Role",
    bio: "A small bio",
    image: "/placeholders/person-placeholder.jpg",
  },
  {
    name: "Member Name",
    role: "Member Role",
    bio: "A small bio",
    image: "/placeholders/person-placeholder.jpg",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <a href="tel:0000000000" className={styles.topBarContact}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Call 000 000 0000
        </a>
        <div className={styles.topBarRight}>
          <a href="mailto:email@greencarpentry.com" className={styles.topBarContact}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            email@greencarpentry.com
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M14 8.5V7.2c0-1 .5-1.7 1.7-1.7h1.3V3h-2c-2.5 0-4 1.6-4 4v1.5H8.5v3H11V21h3v-9.5h2.7l.3-3H14Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>LOGO HERE</div>
        <nav className={styles.nav}>
          <a href="#top">Home</a>
          <a href="#services">Services</a>
          <a href="#team">Meet the Team</a>
          <a href="#projects">Projects</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Get in Touch</a>
        </nav>
        <details className={styles.mobileMenu}>
          <summary className={styles.hamburger} aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>
          <div className={styles.mobilePanel}>
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#team">Meet the Team</a>
            <a href="#projects">Projects</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact" className={styles.navCta}>
              Get in Touch
            </a>
          </div>
        </details>
      </header>

      <main>
        <section className={styles.hero} id="top">
          <div className={styles.heroMedia}>
            <HeroVideo src="/media/hero-drone.mp4" className={styles.heroVideo} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>GREEN CARPENTRY</span>
            <h1 className={styles.heroTitle}>
              Commercial<br />
              Domestic<br />
              Maintenance
            </h1>
            <p className={styles.heroSub}>
              Quick brief about where you're based, why choose us, get in touch.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryBtn}>
                Get in Touch
              </a>
              <a href="#gallery" className={styles.secondaryBtn}>
                View Projects
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="services">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionEyebrow}>Services</p>
              <h2 className={styles.sectionTitle}>Our Services</h2>
            </div>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceMedia}>
                  <Image
                    src={service.image}
                    alt={`${service.title} placeholder`}
                    width={600}
                    height={400}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceBody}>
                  <span className={styles.serviceMeta}>{service.meta}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="team">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionEyebrow}>Meet the Team</p>
              <h2 className={styles.sectionTitle}>Who we Are</h2>
            </div>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <article className={styles.teamCard} key={`${member.role}-${index}`}>
                <div className={styles.teamAvatar}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className={styles.teamAvatarImage}
                  />
                </div>
                <div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
                <p className={styles.teamBio}>{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionEyebrow}>Projects</p>
              <h2 className={styles.sectionTitle}>Featured builds</h2>
            </div>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectMedia}>
                  <Image
                    src={project.image}
                    alt={`${project.title} placeholder`}
                    width={1200}
                    height={800}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectBody}>
                  <span className={styles.projectMeta}>{project.meta}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p>
                    Placeholder summary of scope, materials, and timeline details
                    for this project.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="reviews">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionEyebrow}>Reviews</p>
              <h2 className={styles.sectionTitle}>What our Customers Say</h2>
            </div>
            <p className={styles.sectionCopy}>
              Link to Google reviews?
            </p>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map((review, index) => (
              <article className={styles.reviewCard} key={`${review.name}-${index}`}>
                <p className={styles.reviewQuote}>“{review.quote}”</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfoBox}>
              <h2 className={styles.contactInfoTitle}>Contact us</h2>
              <p className={styles.contactInfoText}>
                We want to hear about your next carpentry project. Call us today for a consultation and a free quote on our services.
              </p>

              <div className={styles.contactInfoSection}>
                <strong>Business Hours:</strong>
                <p>Monday-Friday: 8am-6pm</p>
                <p>Saturday: 8am-12pm</p>
                <p>Sunday: Closed</p>
              </div>

              <div className={styles.contactInfoSection}>
                <strong>Our Address:</strong>
                <p>123 Example Street, City Name, County, AB12 3CD</p>
              </div>

              <div className={styles.contactInfoSection}>
                <strong>Get In Touch:</strong>
                <p className={styles.contactInfoItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="tel:0000000000">000 000 0000</a>
                </p>
                <p className={styles.contactInfoItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="mailto:email@greencarpentry.com">email@greencarpentry.com</a>
                </p>
              </div>
            </div>

            <div className={styles.contactFormBox}>
              <h3 className={styles.contactFormTitle}>Send us a message</h3>
              <form
                className={styles.contactFormFields}
                action="mailto:email@greencarpentry.com"
                method="POST"
                encType="text/plain"
              >
                <div className={styles.formGrid}>
                  <div>
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Telephone *</label>
                    <input id="phone" name="phone" type="tel" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                  />
                </div>
                <button type="submit" className={styles.primaryBtn}>
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>Green Carpentry</strong>
          <p>Construction & renovation partners for ambitious builds.</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#top">Back to top</a>
        </div>
        <div>
          <p>email@greencarpentry.com</p>
          <p>000 000 0000</p>
        </div>
      </footer>
    </div>
  );
}
