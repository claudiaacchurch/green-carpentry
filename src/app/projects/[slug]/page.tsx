import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { projects, getProject } from "@/lib/projects";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            {project.buildVideoEmbed ? (
              <iframe
                src={project.buildVideoEmbed}
                className={styles.heroVideo}
                allow="autoplay"
                loading="lazy"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.heroImage}
                alt={project.title}
                className={styles.heroImage}
              />
            )}
          </div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{project.title}</h1>
          </div>
        </section>

        {/* Info strip */}
        <div className={styles.infoStrip}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Year</span>
            <span className={styles.infoValue}>{project.year}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoValue}>{project.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className={styles.body}>
          <div className={styles.description}>
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Back to projects */}
        <div className={styles.backBar}>
          <Link href="/#projects" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>Green Carpentry</strong>
          <p>Construction services across the South West.</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/#top">Back to top</Link>
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
