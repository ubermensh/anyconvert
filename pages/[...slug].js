import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Main({ total, partial, percentage, question, closeValues }) {
    const router = useRouter()
    const url = router.query.slug[0];

    function formatQuestion(index, isForTotal = false) {
        return isForTotal ? question.replace(total, total + index + 1) : question.replace(partial, partial + index + 1)
    }
    function formatUrl(index, isForTotal = false) {
        return isForTotal ? url.replace(total, total + index + 1) : url.replace(partial, partial + index + 1)
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1><Link href='/'><a>to the main page</a></Link></h1>
                {/* <h1><Link href='/'><a>main page</a></Link></h1>
                <div className={styles.description}>
                    <h2>{question}?</h2>
                    <h2>{partial} is {percentage} percent of {total}</h2>
                </div>
                <h3>what is {partial}% of {total} and other numbers </h3>
                <section style={{width:"100%"}}>
                    <ul style={{ columnCount: 4, columnGap: "10px" }}>
                        {Object.keys(closeValues).map((currentTotal, i) => (
                            <li key={i}>
                                <span>{partial}% of {currentTotal} = {closeValues[currentTotal]} </span>
                            </li>
                        ))}
                    </ul>

                </section> */}
                <div >
                    <p>
                    What is {partial} percent (calculated percentage %) of number {total}?  <br />
                    What is {partial} per cent of the number {total}? <br />
                    Percentage {partial}% of number {total} = ? <br />
                    {partial}% of {total} is equal to their multiplication: {partial}% * {total}. <br/>
                    {partial} percent of {total}: {partial}% of {total} = {partial}/100 * {total} = {percentage} <br />
</p>
                    <p>
                        <b>To calculate what is 25 per cent of 70:</b>
                        <ol start='1'>
                            <ul>{partial}%*{total} = </ul>
                            <ul>({partial}:100)*{total} = </ul>
                            <ul>({partial}*{total}):100 = </ul>
                            <ul>{partial * total}:100={percentage}</ul>
                        </ol>
                    </p>
                    <p>
                        Example:
                    If a product costs {total} and you were given a {partial}% discount, you will save ${percentage} <br/>
                    Savings: Original price * percentage off / 100  <br/>
                    Amount saved: ({partial} * {total}) / 100 =<br/>
                    Savings: ${percentage}<br/>
                    That means for an original price of {total} and a {partial}% discount, you would pay ${total - percentage} and save ${percentage}
                    </p>
                </div>
                <section style={{ width: "100%" }}>
                    <h3>close values:</h3>
                    <ul style={{ columnCount: 4, columnGap: "10px" }}>
                        {Object.keys(closeValues).map((currentTotal, i) => (
                            <li key={i}>
                                <span>{partial}% of {currentTotal} = {closeValues[currentTotal]} </span>
                            </li>
                        ))}
                    </ul>

                </section>
                <div className={styles.grid}>
                    {/* <section className={styles.card}>
                        <h3>другими формулами</h3>
                        <ul>
                            <li><Link href={`/what-is-${total}-of-${partial}`}><a> What is {total}% of {partial}</a></Link></li>
                            <li><Link href={`/what-percent-of-${total}-is-${partial}`}><a> What % of {total} is {partial}</a></Link></li>
                            <li><Link href={`/${total}-is-${partial}-of-what-number`}><a> {total} is {partial} percent of what number? </a></Link></li>
                            <li><Link href={`/${total}-is-what-percent-of-${partial}`}><a>{total} is what percent of {partial}</a></Link></li>
                        </ul>
                    </section> */}
                    <section className={styles.card}>
                        <h3>Х+1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li key={index}><Link href={formatUrl(index)}><a>{formatQuestion(index)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                    <section className={styles.card}>
                        <h3>Y+1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li key={index}><Link href={formatUrl(index, true)}><a>{formatQuestion(index, true)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                    <section className={styles.card}>
                        <h3>Х+0.1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li key={index}><Link href={formatUrl(index + 0.1)}><a>{formatQuestion(index + 0.1)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                    <section className={styles.card}>
                        <h3>Y+0.1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li key={index}><Link href={formatUrl(index + 0.1, true)}><a>{formatQuestion(index + 0.1, true)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    let partial, total;
    let first = true;
    const q = context.query.slug[0];
    q.split('-').map(
        (val) => {
            if (!isNaN(val)) {
                if (first) {
                    partial = Number(val)
                    first = false;
                }
                else (
                    total = Number(val)
                )
            }
        }
    )
    const question = q.replace(new RegExp('-', 'g'), ' ');
    const percentage = Number(((100 * partial) / total).toFixed(2))
    function getCloseValues() {
        let currentTotal = total;
        let oneTenth = currentTotal / 10;
        let res = {};
        for (let i = 0; i <= 16; i++) {
            currentTotal += oneTenth;
            res[currentTotal] = Number(((100 * partial) / currentTotal).toFixed(2))
        }
        return res;
    }

    const closeValues = getCloseValues()
    const props = { partial, total, percentage, question, closeValues };

    return {
        props
    }
}