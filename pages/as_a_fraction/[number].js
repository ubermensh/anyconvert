import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Fraction({ number, numerator, denominator }) {
    console.log(number, numerator, denominator);

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
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { number } = context.query;
      function fraction (numerator, denominator) {
            numerator *= 10;
            denominator *= 10;
        if (numerator % 1 != 0) {
            return fraction(numerator, denominator)
        } else {
            return {numerator, denominator};
        }
    }

// function numberOfZeros(n) {
//   var c = 0;
//   while (!~~n) {
//     c++;
//     n *= 10;
//   }
//   return c - 1;
// }

const {numerator, denominator} = fraction(number, 1);
    const props = { number, numerator, denominator };

    return {
        props
    }
}