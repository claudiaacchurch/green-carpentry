import Link from "next/link";
import SocialIcons from "./SocialIcons";
import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/media/green-carpentry-logo.png`}
          alt="Green Carpentry Logo"
          className={styles.logoImage}
        />
      </div>

      <div className={styles.headerRight}>
        <nav className={styles.nav}>
          <Link href="/#top">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#team">Meet the Team</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#contact">Get in Touch</Link>
          <div className={styles.navSocials}>
            <SocialIcons />
          </div>
        </nav>
      </div>

      <details className={styles.mobileMenu}>
        <summary className={styles.hamburger} aria-label="Open menu">
          <span />
          <span />
          <span />
        </summary>
        <div className={styles.mobilePanel}>
          <Link href="/#top">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About</Link>
          <Link href="/#team">Meet the Team</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#contact" className={styles.navCta}>Get in Touch</Link>
          <div className={styles.mobileSocials}>
            <SocialIcons />
          </div>
        </div>
      </details>
    </header>
  );
}
