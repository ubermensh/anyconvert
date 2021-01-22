import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
const Decimal = require('decimal.js')
import { useForm } from "react-hook-form";

export default function Fraction({ number, numerator, denominator, hNumerator, hDenominator, closeValues, forTable }) {
    console.log(forTable);
    const router = useRouter()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        router.push(`/as_a_fraction/${data.fraction}`)
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.backButton}>
                    <Link rel="icon" href="/">
                        <img src="../backArrow.svg"></img>
                    </Link>
                </div>
                <span className={styles.topText}> Fraction Calculator </span>
            </div>


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

            <div className={styles.calculator}>
                <div>calculate any fraction</div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input name="fraction" type="number" ref={register({ required: true })} onChange={() => { }} />
                    <select name="type" ref={register} onChange={() => { }} > <option value="fraction">as a fraction</option> </select>
                    <button type="submit" value="Submit">calculate</button>
                </form>
            </div>
            <div className={styles.card}>
                <table> <thead> <tr>
                            {Object.keys(forTable).map((row, i) => (
                                <th key={i}>{row}</th>
                            ))}
                        </tr> </thead> <tbody>
                        {[...Array(forTable.decimal.length).keys()].map((i) => 
                            <tr key={i}>
                                <td>{forTable.decimal[i]}</td>
                                <td>{forTable.simplified[i][0]}/{forTable.simplified[i][1]}</td>
                                <td>{forTable.fraction[i][0]}/{forTable.fraction[i][1]}</td>
                                <td>{forTable.percentage[i]}</td>
                            </tr>
                        ) }
                    </tbody> </table>
            </div>
            <div className={styles.card}>
                <span className={styles.header}>How to convert {number} to a fraction?</span>
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


            <div className={styles.card}>
                <span className={styles.header}>Experess {number} as a fraction step by step</span>
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
                <span className={styles.header}>Q: What is {number} as a fraction in simplest form?</span><br />
                A: {number} as a simplified fraction is {hNumerator}/{hDenominator}
            </div>

            <div className={styles.card}>
                <span className={styles.header}>Q: What is {number} as a fraction in simplest form?</span><br />
                A: {number} as a simplified fraction is {hNumerator}/{hDenominator}
            </div>

            <div className={styles.card}>
                <span className={styles.header}>Q: What is {number} as a fraction in simplest form?</span><br />
                A: {number} as a simplified fraction is {hNumerator}/{hDenominator}
            </div>
            <div className={styles.card}>
                <h3>close to {number} values as a fraction</h3>
                {/* todo: links */}
                <ul style={{ columnCount: 2, columnGap: "50px" }}>
                    {Object.keys(closeValues).map((currentNumber, i) => (
                        <li key={i}>
                            <Link href={`/as_a_fraction/${currentNumber}`}><a>{currentNumber} as a fraction equals {closeValues[currentNumber][0]}/{closeValues[currentNumber][1]}</a></Link>
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

    function getValuesForTable() {
        const res = {
            'decimal': [],
            'simplified': [],
            'fraction': [],
            'percentage': []
        }
        let currentNumber = decimalNumber;
        for (let i = 0; i <= 10; i++) {

            currentNumber = currentNumber.plus(0.1);
            res.decimal.push(Number(currentNumber))
            res.simplified.push(fractionDecimal(currentNumber))
            res.fraction.push(fractionRecursive(Number(currentNumber), 1))
            res.percentage.push(currentNumber * 100)
        }
        return res

    }

    const [numerator, denominator] = fractionRecursive(number, 1)
    const [hNumerator, hDenominator] = fractionDecimal(decimalNumber)

    const closeValues = getCloseValuesDecimal()
    const forTable = getValuesForTable()



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