import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title}, ${project.location}`;
  const intro = project.description[0] ?? "";
  const description =
    intro.length > 155 ? `${intro.slice(0, 152).trimEnd()}…` : intro;
  const ogImage = project.image.replace("/media/projects/", "/media/og/");

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${title} | Green Carpentry`,
      description,
      url: `/projects/${project.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const isOngoing = ongoingProjects.some((item) => item.slug === project.slug);

  // Previous/next within the same list (completed or ongoing), wrapping round
  const siblings = isOngoing ? ongoingProjects : projects;
  const index = siblings.findIndex((item) => item.slug === project.slug);
  const prevProject = siblings[(index - 1 + siblings.length) % siblings.length];
  const nextProject = siblings[(index + 1) % siblings.length];

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

        <section className={styles.quoteBanner}>
          <div>
            <h2>Planning something similar?</h2>
            <p>
              Tell us about your project and we&apos;ll get back to you with a
              free, no-obligation quote.
            </p>
          </div>
          <Link href="/#contact" className={styles.quoteBtn}>
            Get a free quote
          </Link>
        </section>

        <nav className={styles.projectNav} aria-label="More projects">
          <Link
            href={`/projects/${prevProject.slug}`}
            className={styles.projectNavLink}
            aria-label={`Previous project: ${prevProject.title}`}
          >
            <span className={styles.projectNavLabel}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </span>
          </Link>
          <Link
            href={isOngoing ? "/#ongoingProjects" : "/#projects"}
            className={styles.projectNavAll}
          >
            All projects
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className={`${styles.projectNavLink} ${styles.projectNavNext}`}
            aria-label={`Next project: ${nextProject.title}`}
          >
            <span className={styles.projectNavLabel}>
              Next
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M19 12l-7-7M19 12l-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
