import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Calculator from '../components/Calculator'
import FractionForm from '../components/FractionForm'
import Top from "../components/Top"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> <title>Web Calculator</title> </Head>
        <Top text="Fraction Calculator" />
        <Calculator />
        <FractionForm />
        <Link href="/as_a_fraction/0.45" className={styles.card}><a>0.45 as a fraction</a></Link>
        <Link href="/what-is-13-percent-of-100" className={styles.card}><a>what is 13% of 100</a></Link>
    </div>
  )
}
