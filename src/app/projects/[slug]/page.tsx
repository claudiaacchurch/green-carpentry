import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, ongoingProjects, getProject } from "@/lib/projects";
import { INSTAGRAM_URL } from "@/lib/constants";
import styles from "./page.module.css";

export function generateStaticParams() {
  const allSlugs = [...projects, ...ongoingProjects].map((p) => p.slug);
  const unique = [...new Set(allSlugs)];
  return unique.map((slug) => ({ slug }));
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
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="100vw"
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

        {/* Instagram callout */}
        <div className={styles.instaCallout}>
          <p>
            For full start-to-finish pictures of this project, head over to our{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram highlights.
            </a>
          </p>
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

      <Footer />
    </div>
  );
}
