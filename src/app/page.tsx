import Header from "@/components/Header";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/constants";
import { projects } from "@/lib/projects";
import styles from "./page.module.css";

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
      <Header />

      <main>
        <section className={styles.hero} id="top">
          <div className={styles.heroMedia}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/610237/71858d3d-4c6f-4a88-bae3-5de046b33908?autoplay=true&loop=true&muted=true&preload=true&background=true"
              className={styles.heroVideo}
              allow="autoplay"
              loading="lazy"
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>Green Carpentry</span>
            <h1 className={styles.heroTitle}>
              Construction<br />
              services across<br />
              the South West
            </h1>
            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryBtn}>
                View Projects
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Projects</h2>
            </div>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.projectCard}>
                <div className={styles.projectMedia}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectBody}>
                  <span className={styles.projectMeta}>{project.meta}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section} id="about">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>About </h2>
            </div>
          </div>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutImageWrap}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/media/about.JPG`}
                alt="About Green Carpentry"
                width={600}
                height={500}
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutText}>
              <p>Placeholder blurb about what you offer — your experience, your approach, the types of projects you take on. Why clients choose you over others, what makes your work stand out.</p>
              <p>A second paragraph here about your values, or something.</p>
              <p>A closing line about getting in touch or inviting people to browse your projects.</p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="team">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Meet the Team</h2>
            </div>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <article className={styles.teamCard} key={`${member.role}-${index}`}>
                <div className={styles.teamAvatar}>
                  <img
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

        <section className={styles.section} id="reviews">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Reviews</h2>
            </div>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map((review, index) => (
              <article className={styles.reviewCard} key={`${review.name}-${index}`}>
                <p className={styles.reviewQuote}>"{review.quote}"</p>
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
                <p>Monday-Friday: 9am-5pm</p>
                <p>Saturday-Sunday: Closed</p>
              </div>

              <div className={styles.contactInfoSection}>
                <strong>Our Address:</strong>
                <p>Taunton, Somerset, UK</p>
              </div>

              <div className={styles.contactInfoSection}>
                <strong>Get In Touch:</strong>
                <p className={styles.contactInfoItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </p>
                <p className={styles.contactInfoItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href={EMAIL_HREF}>{EMAIL}</a>
                </p>
              </div>

              <div className={styles.contactInfoSection}>
                <strong>Follow Us:</strong>
                <div className={styles.contactSocialRow}>
                  <a href={INSTAGRAM_URL} aria-label="Instagram" className={styles.contactSocialLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
                      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
                    </svg>
                    Instagram
                  </a>
                  <a href={FACEBOOK_URL} aria-label="Facebook" className={styles.contactSocialLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M14 8.5V7.2c0-1 .5-1.7 1.7-1.7h1.3V3h-2c-2.5 0-4 1.6-4 4v1.5H8.5v3H11V21h3v-9.5h2.7l.3-3H14Z" fill="currentColor"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactFormBox}>
              <h3 className={styles.contactFormTitle}>Send us a message</h3>
              <form
                className={styles.contactFormFields}
                action={EMAIL_HREF}
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
          <p>Construction services across the South West.</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#top">Back to top</a>
        </div>
        <div className={styles.footerContact}>
          <a href={EMAIL_HREF} className={styles.footerContactLink}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {EMAIL}
          </a>
          <a href={PHONE_HREF} className={styles.footerContactLink}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </footer>
    </div>
  );
}
