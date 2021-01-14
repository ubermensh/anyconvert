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
        <Link href="/what-percent-of-8888-is-34" className={styles.card}><a>what percent of 8888 is 34</a></Link>
        <Link href="/what-is-13-percent-of-100" className={styles.card}><a>what is 13% of 100</a></Link>
        <Link href={`/what-is-45-of-100`}><a>What is 45% of 100</a></Link> 
        <Link href={`/what-percent-of-12-is-123`}><a> What % of 12 is 123</a></Link>
        <Link href={`/56-is-67-percent-of-what-number`}><a> 56 is 67 percent of what number? </a></Link>
        <Link href={`/118-is-what-percent-of-1199`}><a>118 is what percent of 1199</a></Link> 
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
