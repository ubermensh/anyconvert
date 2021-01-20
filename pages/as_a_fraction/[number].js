import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
const Decimal = require('decimal.js')

export default function Fraction({ number, numerator, denominator, hNumerator, hDenominator, closeValues }) {
    console.log(number, numerator, denominator, hNumerator, hDenominator );
    console.log(closeValues);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h3><Link href="/" className={styles.card}><a>back</a></Link></h3>
                <div>
                    <h2>{number} as a fraction</h2>
                </div>
                <div className={styles.card}>
                    What is {number} as a fraction?
How to convert {number} to a fraction:
                    <ol>
                        <li> Write {number} as the numerator</li>
                        <li>Write 1 as the denominator</li>
                        <li>multiply numerator and denominator by 10 as long as you get in numerator the whole number: {number}/1={numerator}/{denominator}</li>
                    </ol>
                So, <b>{number} as a fraction is {numerator}/{denominator}</b> <br/><br/>
                    {denominator != hDenominator &&
                        <b>or more convenient notation: {hNumerator}/{hDenominator}</b>
                    }
                </div>
                <div className={styles.card}>
                    <h3>close values in convenient notation</h3>
                    <ul style={{ columnCount: 2, columnGap: "50px" }}>
                        {Object.keys(closeValues).map((currentNumber, i) => (
                            <li key={i}>
                                <span>{currentNumber} as a fraction equals {closeValues[currentNumber][0]}/{closeValues[currentNumber][1]}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <section className={styles.card}>
                    <h3>Links</h3>
                    <ul>
                        {Object.keys(closeValues).map(index => (
                            <li key={index}><Link href={`/as_a_fraction/${index}`} ><a>What is {index} as a fraction</a></Link></li>
                        ))
                        }
                    </ul>
                </section>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {

    const number = Number(context.query.number);
    const decimalNumber = new Decimal(number);

    function fractionRecursive(numerator, denominator) {
        numerator *= 10;
        denominator *= 10;
        if (numerator % 1 != 0) {
            return fractionRecursive(numerator, denominator)
        } else {
            return [numerator, denominator];
        }
    }

    function fractionDecimal(num) {
        let [n, d] = num.toFraction()
        return [Number(n), Number(d)]
    }


    function getCloseValuesDecimal() {
        let res = {};
        let currentNumber = decimalNumber;
        for (let i = 0; i <= 10; i++) {
            // currentNumber += 0.1;
            currentNumber = currentNumber.plus(0.1);
            // res[currentNumber] = fraction(currentNumber, 1)
            let [num, den] = fractionDecimal(currentNumber)
            res[currentNumber] = [num, den]
        }
        return res
    }

    const [numerator, denominator] = fractionRecursive(number, 1)
    const [hNumerator, hDenominator] = fractionDecimal(decimalNumber)

    const closeValues = getCloseValuesDecimal()


    const props = { number, numerator, denominator, hNumerator, hDenominator, closeValues };
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