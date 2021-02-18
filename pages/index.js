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
        <Link href="what-is/10-of-3000000"><a>what-is/10-of-3000000</a></Link>
        <Link href="what-is/220-of-65"><a>what-is/220-of-65</a></Link >
        <Link href="as-a-fraction/.835"><a>as-a-fraction/.835</a></Link >
        <Link href="what-is/6-of-480"><a>what-is/6-of-480</a></Link >
        <Link href="as-a-fraction/.832"><a>as-a-fraction/.832</a></Link >
        <Link href="what-is/25-of-550"><a>what-is/25-of-550</a></Link >
        <Link href="as-a-fraction/.827"><a>as-a-fraction/.827</a></Link >
        <Link href="as-a-fraction/.828"><a>as-a-fraction/.828</a></Link >
        <Link href="as-a-fraction/.833"><a>as-a-fraction/.833</a></Link >
        <Link href="as-a-fraction/.825"><a>as-a-fraction/.825</a></Link >
        <Link href="what-is/17-of-800"><a>what-is/17-of-800</a></Link >
        <Link href="as-a-fraction/.826"><a>as-a-fraction/.826</a></Link >
        <Link href="what-is/0.01-of-3000000"><a>what-is/0.01-of-3000000</a></Link >
        <Link href="what-is/.001-of-10000"><a>what-is/.001-of-10000</a></Link >
        <Link href="what-is/220-of-60"><a>what-is/220-of-60</a></Link >
        <Link href="as-a-fraction/2.87500"><a>as-a-fraction/2.87500</a></Link >
        <Link href="what-is/77-of-80"><a>what-is/77-of-80</a></Link >
        <Link href="what-is/40-of-1500"><a>what-is/40-of-1500</a></Link >
        <Link href="as-a-fraction/11.021"><a>as-a-fraction/11.021</a></Link >
        <Link href="as-a-fraction/11.022"><a>as-a-fraction/11.022</a></Link >
        <Link href="what-is/3-of-8000"><a>what-is/3-of-8000</a></Link >
        <Link href="what-is/2.95-of-100"><a>what-is/2.95-of-100</a></Link >
        <Link href="what-is/3-of-895"><a>what-is/3-of-895</a></Link >
        <Link href="what-is/7-of-2000000"><a>what-is/7-of-2000000</a></Link >
        <Link href="what-is/75-of-340"><a>what-is/75-of-340</a></Link >
        <Link href="as-a-fraction/.845"><a>as-a-fraction/.845</a></Link >
        <Link href="what-is/0.15-of-1000000"><a>what-is/0.15-of-1000000</a></Link >
        <Link href="as-a-fraction/0.00390625"><a>as-a-fraction/0.00390625</a></Link >
        <Link href="what-is/16-of-250000"><a>what-is/16-of-250000</a></Link >
        <Link href="as-a-fraction/61.333"><a>as-a-fraction/61.333</a></Link >
        <Link href="what-is/30-of-1600000000"><a>what-is/30-of-1600000000</a></Link >
        <Link href="what-is/30-of-450"><a>what-is/30-of-450</a></Link >
        <Link href="what-is/75-of-1500"><a>what-is/75-of-1500</a></Link >
        <Link href="what-is/350000-of-3"><a>what-is/350000-of-3</a></Link >
        <Link href="as-a-fraction/.16666667"><a>as-a-fraction/.16666667</a></Link >
        <Link href="what-is/.24-of-40000"><a>what-is/.24-of-40000</a></Link >
        <Link href="what-is/220-of-50"><a>what-is/220-of-50</a></Link >
        <Link href="what-is/30.-of-13000"><a>what-is/30.-of-13000</a></Link >
        <Link href="what-is/1.5-of-175"><a>what-is/1.5-of-175</a></Link >
        <Link href="what-is/7-of-3.5"><a>what-is/7-of-3.5</a></Link >
        <Link href="what-is/7.-of-5000"><a>what-is/7.-of-5000</a></Link >
        <Link href="what-is/25-of-60000"><a>what-is/25-of-60000</a></Link >
        <Link href="what-is/25-of-35000"><a>what-is/25-of-35000</a></Link >
        <Link href="what-is/80-of-250"><a>what-is/80-of-250</a></Link >
        <Link href="what-is/0.8-of-6"><a>what-is/0.8-of-6</a></Link >
        <Link href="what-is/1.5-of-170"><a>what-is/1.5-of-170</a></Link >
        <Link href="what-is/0.8-of-5"><a>what-is/0.8-of-5</a></Link >
        <Link href="what-is/.40-of-2000"><a>what-is/.40-of-2000</a></Link >
        <Link href="what-is/.05-of-5"><a>what-is/.05-of-5</a></Link >
        <Link href="as-a-fraction/.812"><a>as-a-fraction/.812</a></Link >
        <Link href="what-is/60-of-4000000"><a>what-is/60-of-4000000</a></Link >
        <Link href="as-a-fraction/.813"><a>as-a-fraction/.813</a></Link >
        <Link href="what-is/0.8-of-1"><a>what-is/0.8-of-1</a></Link >
        <Link href="as-a-fraction/297"><a>as-a-fraction/297</a></Link >
        <Link href="what-is/10-of-599.99"><a>what-is/10-of-599.99</a></Link >
        <Link href="as-a-fraction/296"><a>as-a-fraction/296</a></Link >
        <Link href="what-is/20-of-1500000"><a>what-is/20-of-1500000</a></Link >
        <Link href="what-is/.01-of-100000"><a>what-is/.01-of-100000</a></Link >
        <Link href="what-is/25-of-525"><a>what-is/25-of-525</a></Link >
        <Link href="what-is/399-of-500"><a>what-is/399-of-500</a></Link >
        <Link href="what-is/30-of-420"><a>what-is/30-of-420</a></Link >
        <Link href="what-is/20000-of-400000"><a>what-is/20000-of-400000</a></Link >
        <Link href="what-is/77-of-60"><a>what-is/77-of-60</a></Link >
        <Link href="what-is/80-of-240"><a>what-is/80-of-240</a></Link >
        <Link href="what-is/.25-of-4.5"><a>what-is/.25-of-4.5</a></Link >
        <Link href="what-is/200-of-2000"><a>what-is/200-of-2000</a></Link >
        <Link href="what-is/6.99-of-6.99"><a>what-is/6.99-of-6.99</a></Link >
        <Link href="what-is/6.25-of-100"><a>what-is/6.25-of-100</a></Link >
        <Link href="what-is/15-of-70000"><a>what-is/15-of-70000</a></Link >
        <Link href="what-is/6-of-450"><a>what-is/6-of-450</a></Link >
        <Link href="what-is/75-of-320"><a>what-is/75-of-320</a></Link >
        <Link href="what-is/6-of-15000"><a>what-is/6-of-15000</a></Link >
        <Link href="what-is/30-of-5000"><a>what-is/30-of-5000</a></Link >
        <Link href="as-a-fraction/286"><a>as-a-fraction/286</a></Link >
        <Link href="what-is/15-of-99.99"><a>what-is/15-of-99.99</a></Link >
        <Link href="what-is/3.-of-2500"><a>what-is/3.-of-2500</a></Link >
        <Link href="as-a-fraction/1.0833"><a>as-a-fraction/1.0833</a></Link >
        <Link href="what-is/4-of-7.5"><a>what-is/4-of-7.5</a></Link >
        <Link href="as-a-fraction/.815"><a>as-a-fraction/.815</a></Link >
        <Link href="what-is/30-of-430"><a>what-is/30-of-430</a></Link >
        <Link href="what-is/.05-of-1"><a>what-is/.05-of-1</a></Link >
        <Link href="what-is/1.5-of-180"><a>what-is/1.5-of-180</a></Link >
        <Link href="as-a-fraction/0.314961"><a>as-a-fraction/0.314961</a></Link >
        <Link href="as-a-fraction/34.375"><a>as-a-fraction/34.375</a></Link >
        <Link href="as-a-fraction/72.917"><a>as-a-fraction/72.917</a></Link >
        <Link href="what-is/16-of-3000"><a>what-is/16-of-3000</a></Link >
        <Link href="what-is/95-of-24"><a>what-is/95-of-24</a></Link >
        <Link href="what-is/95-of-25"><a>what-is/95-of-25</a></Link >
        <Link href="as-a-fraction/.870"><a>as-a-fraction/.870</a></Link >
        <Link href="as-a-fraction/2.729"><a>as-a-fraction/2.729</a></Link >
        <Link href="what-is/1.5-of-150"><a>what-is/1.5-of-150</a></Link >
        <Link href="what-is/40-of-24000"><a>what-is/40-of-24000</a></Link >
        <Link href="what-is/95-of-20"><a>what-is/95-of-20</a></Link >
        <Link href="what-is/7-of-320"><a>what-is/7-of-320</a></Link >
        <Link href="as-a-fraction/.874"><a>as-a-fraction/.874</a></Link >
        <Link href="as-a-fraction/.875"><a>as-a-fraction/.875</a></Link >
        <Link href="as-a-fraction/0.4875"><a>as-a-fraction/0.4875</a></Link >
        <Link href="as-a-fraction/.872"><a>as-a-fraction/.872</a></Link >
        <Link href="what-is/7-of-1000000"><a>what-is/7-of-1000000</a></Link >
        <Link href="as-a-fraction/.876"><a>as-a-fraction/.876</a></Link >
        <Link href="what-is/.2-of-6000"><a>what-is/.2-of-6000</a></Link >
        <Link href="what-is/1.5-of-158"><a>what-is/1.5-of-158</a></Link >
        <Link href="what-is/30-of-490"><a>what-is/30-of-490</a></Link >
        <Link href="what-is/1-of-10.00"><a>what-is/1-of-10.00</a></Link >
        <Link href="as-a-fraction/275"><a>as-a-fraction/275</a></Link >
        <Link href="what-is/900-of-7"><a>what-is/900-of-7</a></Link >
        <Link href="what-is/4-of-10000"><a>what-is/4-of-10000</a></Link >
        <Link href="as-a-fraction/267"><a>as-a-fraction/267</a></Link >
        <Link href="what-is/1500-of-50000"><a>what-is/1500-of-50000</a></Link >
        <Link href="what-is/0.3-of-300"><a>what-is/0.3-of-300</a></Link >
        <Link href="as-a-fraction/4.0625"><a>as-a-fraction/4.0625</a></Link >
        <Link href="what-is/1.50-of-18.00"><a>what-is/1.50-of-18.00</a></Link >
        <Link href="as-a-fraction/1.4375"><a>as-a-fraction/1.4375</a></Link >
        <Link href="as-a-fraction/0.19685"><a>as-a-fraction/0.19685</a></Link >
        <Link href="what-is/.15-of-24000"><a>what-is/.15-of-24000</a></Link >
        <Link href="what-is/95-of-35"><a>what-is/95-of-35</a></Link >
        <Link href="what-is/1.5-of-160"><a>what-is/1.5-of-160</a></Link >
        <Link href="what-is/250-of-2"><a>what-is/250-of-2</a></Link >
        <Link href="what-is/3-of-850"><a>what-is/3-of-850</a></Link >
        <Link href="what-is/95-of-30"><a>what-is/95-of-30</a></Link >
        <Link href="what-is/50-of-1600"><a>what-is/50-of-1600</a></Link >
        <Link href="what-is/.25-of-400"><a>what-is/.25-of-400</a></Link >
        <Link href="what-is/7-of-330"><a>what-is/7-of-330</a></Link >
        <Link href="as-a-fraction/0.2222"><a>as-a-fraction/0.2222</a></Link >
        <Link href="as-a-fraction/260"><a>as-a-fraction/260</a></Link >
        <Link href="what-is/75-of-300"><a>what-is/75-of-300</a></Link >
        <Link href="as-a-fraction/.889"><a>as-a-fraction/.889</a></Link >
        <Link href="as-a-fraction/266"><a>as-a-fraction/266</a></Link >
        <Link href="what-is/400-of-2000"><a>what-is/400-of-2000</a></Link >
        <Link href="what-is/10-of-40.50"><a>what-is/10-of-40.50</a></Link >
        <Link href="what-is/36-of-2.75"><a>what-is/36-of-2.75</a></Link >
        <Link href="as-a-fraction/.888"><a>as-a-fraction/.888</a></Link >
        <Link href="what-is/.75-of-2.5"><a>what-is/.75-of-2.5</a></Link >
        <Link href="what-is/.4-of-24000"><a>what-is/.4-of-24000</a></Link >
        <Link href="what-is/40-of-12000"><a>what-is/40-of-12000</a></Link >
        <Link href="what-is/80-of-2.5"><a>what-is/80-of-2.5</a></Link >
        <Link href="as-a-fraction/10.666"><a>as-a-fraction/10.666</a></Link >
        <Link href="what-is/.20-of-4500"><a>what-is/.20-of-4500</a></Link >
        <Link href="as-a-fraction/11.011"><a>as-a-fraction/11.011</a></Link >
        <Link href="what-is/1.5-of-130"><a>what-is/1.5-of-130</a></Link >
        <Link href="what-is/150000-of-3.5"><a>what-is/150000-of-3.5</a></Link >
        <Link href="as-a-fraction/2.744"><a>as-a-fraction/2.744</a></Link >
        <Link href="what-is/.25-of-250000"><a>what-is/.25-of-250000</a></Link >
        <Link href="as-a-fraction/72.1"><a>as-a-fraction/72.1</a></Link >
        <Link href="what-is/7-of-300"><a>what-is/7-of-300</a></Link >
        <Link href="what-is/20-of-2700"><a>what-is/20-of-2700</a></Link >
        <Link href="as-a-fraction/.850"><a>as-a-fraction/.850</a></Link >
        <Link href="as-a-fraction/.857"><a>as-a-fraction/.857</a></Link >
        <Link href="as-a-fraction/3.46410162"><a>as-a-fraction/3.46410162</a></Link >
        <Link href="what-is/5-of-3400"><a>what-is/5-of-3400</a></Link >
        <Link href="as-a-fraction/.833333"><a>as-a-fraction/.833333</a></Link >
        <Link href="what-is/31-of-300"><a>what-is/31-of-300</a></Link >
        <Link href="what-is/.5-of-2200"><a>what-is/.5-of-2200</a></Link >
        <Link href="what-is/30.-of-2600"><a>what-is/30.-of-2600</a></Link >
        <Link href="what-is/500-of-35"><a>what-is/500-of-35</a></Link >
        <Link href="what-is/.20-of-90000"><a>what-is/.20-of-90000</a></Link >
        <Link href="what-is/15-of-2400"><a>what-is/15-of-2400</a></Link >
        <Link href="what-is/10-of-39.99"><a>what-is/10-of-39.99</a></Link >
        <Link href="what-is/50-of-12000000"><a>what-is/50-of-12000000</a></Link >
        <Link href="what-is/95-of-12"><a>what-is/95-of-12</a></Link >
        <Link href="what-is/20-of-325000"><a>what-is/20-of-325000</a></Link >
        <Link href="what-is/3-of-175000"><a>what-is/3-of-175000</a></Link >
        <Link href="what-is/1.06-of-300"><a>what-is/1.06-of-300</a></Link >
        <Link href="as-a-fraction/.860"><a>as-a-fraction/.860</a></Link >
        <Link href="what-is/4.5-of-365"><a>what-is/4.5-of-365</a></Link >
        <Link href="what-is/1000-of-30000"><a>what-is/1000-of-30000</a></Link >
        <Link href="as-a-fraction/11.8333"><a>as-a-fraction/11.8333</a></Link >
        <Link href="what-is/75-of-3.5"><a>what-is/75-of-3.5</a></Link >
        <Link href="as-a-fraction/.864"><a>as-a-fraction/.864</a></Link >
        <Link href="what-is/80-of-205"><a>what-is/80-of-205</a></Link >
        <Link href="what-is/220-of-75"><a>what-is/220-of-75</a></Link >
        <Link href="what-is/1.06-of-9"><a>what-is/1.06-of-9</a></Link >
        <Link href="what-is/28-of-2000"><a>what-is/28-of-2000</a></Link >
        <Link href="as-a-fraction/.867"><a>as-a-fraction/.867</a></Link >
        <Link href="as-a-fraction/.865"><a>as-a-fraction/.865</a></Link >
        <Link href="what-is/6-of-70000"><a>what-is/6-of-70000</a></Link >
        <Link href="what-is/80-of-200"><a>what-is/80-of-200</a></Link >
        <Link href="what-is/1.06-of-6"><a>what-is/1.06-of-6</a></Link >
        <Link href="as-a-fraction/.866"><a>as-a-fraction/.866</a></Link >
        <Link href="as-a-fraction/236"><a>as-a-fraction/236</a></Link >
        <Link href="what-is/4.95-of-100"><a>what-is/4.95-of-100</a></Link >
        <Link href="what-is/30-of-480"><a>what-is/30-of-480</a></Link >
        <Link href="as-a-fraction/03125"><a>as-a-fraction/03125</a></Link >
        <Link href="what-is/120-of-25000"><a>what-is/120-of-25000</a></Link >
        <Link href="what-is/24-of-1000000"><a>what-is/24-of-1000000</a></Link >
        <Link href="what-is/15-of-11.5"><a>what-is/15-of-11.5</a></Link >
        <Link href="what-is/9-of-1500"><a>what-is/9-of-1500</a></Link >
        <Link href="what-is/95-of-15"><a>what-is/95-of-15</a></Link >
        <Link href="what-is/.45-of-80"><a>what-is/.45-of-80</a></Link >
        <Link href="what-is/10-of-0.15"><a>what-is/10-of-0.15</a></Link >
        <Link href="what-is/1800-of-100"><a>what-is/1800-of-100</a></Link >
        <Link href="as-a-fraction/2.646"><a>as-a-fraction/2.646</a></Link >
        <Link href="what-is/25-of-11.99"><a>what-is/25-of-11.99</a></Link >
        <Link href="what-is/30.-of-0.85"><a>what-is/30.-of-0.85</a></Link >
        <Link href="what-is/7-of-120"><a>what-is/7-of-120</a></Link >
        <Link href="what-is/1.5-of-239"><a>what-is/1.5-of-239</a></Link >
        <Link href="what-is/7-of-125"><a>what-is/7-of-125</a></Link >
        <Link href="what-is/4.-of-80000"><a>what-is/4.-of-80000</a></Link >
        <Link href="as-a-fraction/354"><a>as-a-fraction/354</a></Link >
        <Link href="what-is/1.5-of-12.5"><a>what-is/1.5-of-12.5</a></Link >
        <Link href="as-a-fraction/.675"><a>as-a-fraction/.675</a></Link >
      </div >
    </div >
  )
}
