import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Percent converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          web calculator
        </h1>

        <h3>all other:</h3>
        <Link href="/what-percent-of-8888-is-34" className={styles.card}>
          <a>what percent of 8888 is 34</a>
        </Link>

        <Link href="/what-is-13-percent-of-100" className={styles.card}>
          <a>what is 13% of 100</a>
        </Link>
    
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
