import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroMedia from "@/components/HeroMedia";
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
  const isOngoing = ongoingProjects.some((item) => item.slug === project.slug);

  return (
    <div className={styles.page}>
      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <HeroMedia
              poster={project.image}
              alt={project.title}
              videoUrl={project.buildVideoEmbed}
              imageClassName={styles.heroImage}
              videoClassName={styles.heroVideo}
            />
          </div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>
              {isOngoing ? "Ongoing project" : "Completed project"}
            </span>
            <h1 className={styles.heroTitle}>{project.title}</h1>
          </div>
        </section>

        <section className={styles.projectOverview}>
          <aside className={styles.projectMeta}>
            <div className={styles.metaItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>{project.location}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.infoLabel}>Year</span>
              <span className={styles.infoValue}>{project.year}</span>
            </div>
          </aside>

          <div className={styles.projectStory}>
            <div className={styles.description}>
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <aside className={styles.instaCallout}>
          <div>
            <span className={styles.calloutLabel}>See the full build</span>
            <p>
              Follow the project from start to finish through our Instagram
              highlights.
            </p>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            View on Instagram
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h11M11 6l4 4-4 4" />
            </svg>
          </a>
        </aside>

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
