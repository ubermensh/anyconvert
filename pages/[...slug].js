import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import PercentForm from "../components/PercentForm"
import Top from "../components/Top"
const Decimal = require('decimal.js')

export default function Main({ total, partial, percentage, question, closeValues }) {
    const router = useRouter()
    const url = router.query.slug[0];

    function formatQuestion(index, isForTotal = false) {
        //todo check speed
        const toReplace = isForTotal ?
        new Decimal(total).plus(index).plus(1).toFixed(1)  
        :
        new Decimal(partial).plus(index).plus(1).toFixed(1)
        return isForTotal ? question.replace(total, toReplace ) : question.replace(partial, toReplace)
    }
    function formatUrl(index, isForTotal = false) {
        const toReplace = isForTotal ?
        new Decimal(total).plus(index).plus(1).toFixed(1)  
        :
        new Decimal(partial).plus(index).plus(1).toFixed(1)
        return isForTotal ? url.replace(total, toReplace) : url.replace(partial, toReplace)
    }
    return (
        <div className={styles.container}>
            <Top text="Percent Calculator" backButton="true" />
            <div >
                <h2> What is {partial} percent of {total}?</h2>
            </div>
            <div className={styles.answer}>
                <h2>
                    {partial} of {total} is <span className={styles.green}> {percentage} </span>
                </h2>
            </div>
            <div className={styles.cardNoBackground}>
                <PercentForm />
            </div>
            <div className={styles.card} >
                <h2>How to calculate {partial} of {total}</h2>
                <ul>
                    <ul>step 1: {partial}%*{total} = </ul>
                    <ul>step 2: ({partial}:100)*{total} = </ul>
                    <ul>step 3: ({partial}*{total}):100 = </ul>
                    <ul>step 4: {new Decimal(partial).times(total).toPrecision(4) }:100={percentage}</ul>
                </ul>
                <b>Answer: <span className={styles.green}>{partial} of {total} is {percentage}</span></b>
            </div>
            <div className={styles.card}>
                <h2>{partial}% of other values:</h2>
                {/* todo table */}
                <ul style={{ columnCount: 4, columnGap: "10px" }}>
                    {Object.keys(closeValues).map((currentTotal, i) => (
                        <li key={i}>
                            <span>{partial}% of {currentTotal} = {closeValues[currentTotal]} </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.card} >
                <h2>How much will you save if product costs {total} and discount is {partial}%</h2>
                <b>Savings:</b> Original price * percentage off / 100  <br />
            Amount saved: ({partial} * {total}) / 100 =<br />
                <span className={styles.green}>Savings: ${percentage}<br /> <br />
            That means for an original price of {total} and a {partial}% discount, you would pay ${total - percentage} and save ${percentage}
                </span>
            </div>
            <div className={styles.card} >
                <h2>
                    What is {partial} percent (calculated percentage %) of number {total}?
                </h2>
                {partial}% of {total} is equal to their multiplication: {partial}% * {total}. <br />
                {partial} percent of {total}:
                    <ul>
                    <li>{partial}% of {total} =</li>
                    <li>{partial}/100 * {total} =</li>
                    <li><span className={styles.green}> = {percentage}</span></li>
                </ul>
            </div>
            <h4>What are the other percentages of {total}?</h4>
            <div className={styles.grid}>
                <section className={styles.card}>
                    <ul>
                        {Array.from(new Array(10).keys()).map(index => (
                            <li key={index}><Link href={formatUrl(index)}><a>{formatQuestion(index)}</a></Link></li>
                        ))
                        }
                    </ul>
                </section>
                <section className={styles.card}>
                    <ul>
                        {Array.from(new Array(10).keys()).map(index => (
                            <li key={index}><Link href={formatUrl(index + 0.1)}><a>{formatQuestion(index + 0.1)}</a></Link></li>
                        ))
                        }
                    </ul>
                </section>
            </div>
            <h4> What is {partial}% of other values? </h4>
            <div className={styles.grid}>
                <section className={styles.card}>
                    <ul>
                        {Array.from(new Array(10).keys()).map(index => (
                            <li key={index}><Link href={formatUrl(index, true)}><a>{formatQuestion(index, true)}</a></Link></li>
                        ))
                        }
                    </ul>
                </section>
                <section className={styles.card}>
                    <ul>
                        {Array.from(new Array(10).keys()).map(index => (
                            <li key={index}><Link href={formatUrl(index + 0.1, true)}><a>{formatQuestion(index + 0.1, true)}</a></Link></li>
                        ))
                        }
                    </ul>
                </section>
            </div>
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
                    partial = new Decimal(val)
                    first = false;
                }
                else (
                    total =new Decimal(val)
                )
            }
        }
    )
    const question = q.replace(new RegExp('-', 'g'), ' ');
    // const percentage = Number(((100 * partial) / total).toFixed(2))
    let percentage = partial.times(100).dividedBy(total)
    function getCloseValues() {
        let currentTotal = total;
        let oneTenth = currentTotal.dividedBy(10);
        let res = {};
        for (let i = 0; i <= 16; i++) {
            currentTotal = currentTotal.plus(oneTenth);
            // res[Number(currentTotal)] = Number(((100 * partial) / currentTotal).toFixed(2))
            res[Number(currentTotal)] = Number((partial.times(100).dividedBy(currentTotal)).toPrecision(4))
        }
        return res;
    }

    const closeValues = getCloseValues()

    partial = Number(partial)
    total = Number(total)
    percentage = Number(percentage.toPrecision(4))

    const props = { partial, total, percentage, question, closeValues };

    return {
        props
    }
}
{/* <section className={styles.card}>
                        <h3>другими формулами</h3>
                        <ul>
                            <li><Link href={`/what-is-${total}-of-${partial}`}><a> What is {total}% of {partial}</a></Link></li>
                            <li><Link href={`/what-percent-of-${total}-is-${partial}`}><a> What % of {total} is {partial}</a></Link></li>
                            <li><Link href={`/${total}-is-${partial}-of-what-number`}><a> {total} is {partial} percent of what number? </a></Link></li>
                            <li><Link href={`/${total}-is-what-percent-of-${partial}`}><a>{total} is what percent of {partial}</a></Link></li>
                        </ul>
                    </section> */}