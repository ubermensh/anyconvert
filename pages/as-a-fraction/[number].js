import Link from 'next/link';
import styles from '../../styles/Home.module.css'
const Decimal = require('decimal.js')
import FractionForm from "../../components/FractionForm"
import Top from "../../components/Top"
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Fraction({ number, numerator, denominator, hNumerator, hDenominator, closeValues, forTable }) {
    const router = useRouter()
    const percents = Decimal(number).times(100)
    const meta1 = `Calculate ${number} as a Fraction - How to convert ${number} to a fraction | Decimal to Fraction Converter`
    const meta2 = `🏆 ${number} or ${percents}% as a Fraction: Decimal to Fraction Converter`
    const meta3 = `🏆 ${number} or ${percents}% as a Fraction: Decimal to Fraction Converter`
    //todo conig .env base
    const base = 'https://wizardcalc.com'
    const currentUrl = `${base}${router.asPath}`
    const title = `${number} or ${percents}% as a Fraction: Decimal to Fraction Converter`
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={meta1} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta2} />
                <meta name="twitter:description" content={meta1} />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:image" content="" />
                <meta property="og:title" content={meta3} />
                <meta property="og:description" content={meta1} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:site_name" content={currentUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="" />
            </Head>
            <Top text="Fraction Calculator" backButton="true" />

            <div className={styles.question}>
                <span>What is {number} as a fraction?</span>
            </div>
            <div className={styles.answer}>
                <h2>
                    {number} as a fraction is <span className={styles.green}>
                        {numerator}/{denominator}
                        {denominator != hDenominator && <b> or {hNumerator}/{hDenominator}</b>}
                    </span>
                </h2>
            </div>
            <FractionForm />
            <div className={styles.card}>
                <h2>
                    How to convert {number} to a fraction?
                </h2>
                <ol>
                    <li> Write {number} as the numerator</li>
                    <li>Write 1 as the denominator</li>
                    <li>multiply numerator and denominator by 10 as long as you get in numerator
                            the whole number:  <span className={styles.green}>{number}/1={numerator}/{denominator}</span></li>
                </ol>

                <b>Answer: <span className={styles.green}>
                    {number} as a fraction is {numerator}/{denominator}
                    {denominator != hDenominator &&
                        <b> or {hNumerator}/{hDenominator}</b>
                    }
                </span>
                </b>
            </div>

            <div id={styles.cardTable}>
                <table id={styles.valuesTable}> <thead> <tr>
                    <th>Decimal</th>
                    <th>Simplified Fraction</th>
                    <th>Fraction</th>
                    <th>Percentage</th>
                </tr> </thead> <tbody>
                        {[...Array(forTable.decimal.length).keys()].map((i) =>
                            <tr key={i}>
                                <td>{forTable.decimal[i]}</td>
                                <td>{forTable.simplified[i][0]}/{forTable.simplified[i][1]}</td>
                                <td>{forTable.fraction[i][0]}/{forTable.fraction[i][1]}</td>
                                <td>{forTable.percentage[i]}%</td>
                            </tr>
                        )}
                    </tbody> </table>
            </div>


            <div className={styles.card}>
                <h2>Experess {number} as a fraction step by step</h2>
                <ul>
                    <li> <span className={styles.green}>step 1: </span> Write {number} as <span className={styles.boldUnder}>{number}/1</span></li>
                    <li><span className={styles.green}>step 2: </span>Multiply both numerator ({number}) and denominator (1) by 10 for every number
                     after the decimal point: hardcoded!!!! {number} × todo/1 × todo= <span className={styles.boldUnder}>{numerator}/{denominator}</span></li>
                    {denominator != hDenominator &&
                        <li> <span className={styles.green}>step 3: </span>Reduce the fraction: <span className={styles.boldUnder}>{hNumerator}/{hDenominator}</span></li>
                    }
                </ul>
                <b> <span className={styles.green}>
                    {denominator != hDenominator ?
                        `(reduced) fractional number equivalent of ${number} is ${numerator}/${denominator} or ${hNumerator}/${hDenominator}`
                        :
                        `fractional number equivalent of ${number} is ${numerator}/${denominator}`
                    }
                </span>
                </b>
            </div>
            <div className={styles.card}>
                <h2>Q: What is {number} as a fraction in simplest form?</h2><br />
                A: {number} as a simplified fraction is {hNumerator}/{hDenominator}
            </div>

            {/* <div className={styles.card}>
                <h2>Q: What is {number} as a fraction in simplest form?</h2><br />
                A: {number} as a simplified fraction is {hNumerator}/{hDenominator}
            </div>

            <div className={styles.card}>
                <h2>Q: What is {number} as a fraction in simplest form?</h2><br />
                A: {number} as a simplified fraction is {hNumerator}/{hDenominator}
            </div> */}
            <div className={styles.card}>
                <h4>close to {number} values as a fraction</h4>
                {/* todo: links */}
                <ul style={{ columnCount: 2, columnGap: "50px" }}>
                    {Object.keys(closeValues).map((currentNumber, i) => (
                        <li key={i}>
                            <Link href={`/as-a-fraction/${currentNumber}`}><a>{currentNumber} as a fraction equals {closeValues[currentNumber][0]}/{closeValues[currentNumber][1]}</a></Link>
                            <span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const decimal = new Decimal(context.query.number);

    function fractionOrderTen(n) {
        let st = String(n).split('.');
        let num, de
        if (st[1]) {
            num = Number(st[0].concat(st[1]))
            de = Math.pow(10, st[1].length)
        }
        else {
            num = n * 10
            de = 10
        }
        return [num, de]
    }

    function fractionDecimal(num) {
        let [n, d] = num.toFraction()
        return [Number(n), Number(d)]
    }


    function getCloseValuesDecimal() {
        let res = {};
        let currentNumber = decimal;
        for (let i = 0; i <= 10; i++) {
            // currentNumber += 0.1;
            currentNumber = currentNumber.plus(0.1);
            // res[currentNumber] = fraction(currentNumber, 1)
            let [num, den] = fractionDecimal(currentNumber)
            res[currentNumber] = [num, den]
        }
        return res
    }

    function getValuesForTable() {
        const res = {
            'decimal': [],
            'simplified': [],
            'fraction': [],
            'percentage': []
        }
        let currentNumber = decimal;
        for (let i = 0; i <= 10; i++) {
            //todo various step
            currentNumber = currentNumber.plus(0.1);
            res.decimal.push(Number(currentNumber))
            res.simplified.push(fractionDecimal(currentNumber))
            res.fraction.push(fractionOrderTen(currentNumber))
            res.percentage.push(Math.round(currentNumber * 100) / 100)
        }
        return res
    }

    const [numerator, denominator] = fractionOrderTen(decimal)
    const [hNumerator, hDenominator] = fractionDecimal(decimal)

    const closeValues = getCloseValuesDecimal()
    const forTable = getValuesForTable()
    const number = Number(decimal)
    const props = { number, numerator, denominator, hNumerator, hDenominator, closeValues, forTable };
    return { props }
}

    // function numberOfZeros(n) {
    //   var c = 0;
    //   while (!~~n) {
    //     c++;
    //     n *= 10;
    //   }
    //   return c - 1;
    // }