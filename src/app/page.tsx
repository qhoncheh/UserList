import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <li>this ptoject is powerd by:</li>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            You can see the user list by clicking on the link on the navbar.
          </li>
          <li>And also my resume is on another link to Navbar.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            href="https://taxdo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            more about company →
          </a>
        </div>
      </main>
    </div>
  );
}
