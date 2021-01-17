import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Fraction({ number }) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.description}>
                    <h2>{number} as a fraction</h2>
                    {/* <h2>{partial} is {percentage} percent of {total}</h2> */}
                </div>
                <div>

                    What is {number} as a fraction?

How to convert {number} to a fraction:

1) Write {number} as the numerator

2) Write 1 as the denominator

3) 0.978/1=978/1000

So .978 as a fraction is 1/978
                </div>
            </main>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { number } = context.query;
    const props = { number };

    return {
        props
    }
}