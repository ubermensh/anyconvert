import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Calculator from '../components/Calculator'
import FractionForm from '../components/FractionForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Calculator</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          web calculator
        </h1>
        <Calculator />
        <Link href="/as_a_fraction/0.45" className={styles.card}><a>0.45 as a fraction</a></Link>
        <FractionForm />
        <Link href="/what-is-13-percent-of-100" className={styles.card}><a>what is 13% of 100</a></Link>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
