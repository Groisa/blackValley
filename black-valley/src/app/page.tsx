import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={300}
        height={100}
      />
      <p>This is a simple Next.js page.</p>
      <p>
        <a href="https://nextjs.org/learn">Learn Next.js</a>
      </p>
    </div>
  );
}
