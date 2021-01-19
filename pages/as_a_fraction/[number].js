import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
const Decimal = require('decimal.js')
import MathJax from 'react-mathjax-preview'

export default function Fraction({ number, numerator, denominator, closeValues }) {
    // console.log(number, numerator, denominator, closeValues);
    console.log(closeValues);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h3><Link href="/" className={styles.card}><a>back</a></Link></h3>
                {/* <div className={styles.description}> */}
                <div className={styles.description}>
                    <h2>{number} as a fraction</h2>
                    {/* <h2>{partial} is {percentage} percent of {total}</h2> */}
                </div>
                <div className={styles.card}>
                    What is {number} as a fraction?
How to convert {number} to a fraction:
                    <ol>
                        <li> Write {number} as the numerator</li>
                        <li>Write 1 as the denominator</li>
                        <li>multiply numerator and denominator by 10 as long as you get in numerator the whole number: {number}/1={numerator}/{denominator}</li>
                    </ol>
                So, <b>{number} as a fraction is {numerator}/{denominator}</b>
                </div>
                <div className={styles.card}>
                        <ul style={{  columnCount: 2, columnGap: "50px" }}>
                            {Object.keys(closeValues).map((currentNumber, i) => (
                                <li key={i}>
                                    <span>{currentNumber} as a fraction =
                                    {/* <math><mfrac>
                                        <mn>{closeValues[currentNumber][0]}</mn>
                                        <mi>{closeValues[currentNumber][1]}</mi>
                                        </mfrac></math> */}
                                     {closeValues[currentNumber][0]}/{closeValues[currentNumber][1]}
                                      </span>
                                </li>
                            ))}
                        </ul>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const number = Number(context.query.number);
    function fraction(numerator, denominator) {
        numerator *= 10;
        denominator *= 10;
        if (numerator % 1 != 0) {
            return fraction(numerator, denominator)
        } else {
            return { numerator, denominator };
        }
    }

    function getCloseValues() {
        let res = {};
        let currentNumber = new Decimal(number);
        for (let i = 0; i <= 8; i++) {
            // currentNumber += 0.1;
            currentNumber = currentNumber.plus(0.1);
            // res[currentNumber] = fraction(currentNumber, 1)
            let [num, den] = currentNumber.toFraction()
            res[currentNumber] = [Number(num), Number(den)]
        }
        return res;
    }

    const { numerator, denominator } = fraction(number, 1);
    const closeValues = getCloseValues();

    // function numberOfZeros(n) {
    //   var c = 0;
    //   while (!~~n) {
    //     c++;
    //     n *= 10;
    //   }
    //   return c - 1;
    // }

    //toFixed

    const props = { number, numerator, denominator, closeValues };

    return {
        props
    }
}