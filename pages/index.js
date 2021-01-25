import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FractionForm from '../components/FractionForm'
import PercentForm from '../components/PercentForm'
import Top from "../components/Top"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> <title>Web Calculator</title> </Head>
      <Top text="Web Calculator" />
      <div className={styles.cardNoBackground}>
        <FractionForm />
      </div>
      <div className={styles.cardNoBackground}>
        <PercentForm />
      </div>
      <div className={styles.cardNoBackground}>
        <Link href="/as-a-fraction/0.45" className={styles.card}><a>0.45 as a fraction</a></Link>
        <br/>
        <Link href="/what-is-13-percent-of-100" className={styles.card}><a>what is 13% of 100</a></Link>
      </div>
    </div>
  )
}
