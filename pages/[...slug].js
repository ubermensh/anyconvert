import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Main({ total, partial, percentage, question }) {
    const router = useRouter()
    const url = router.query.slug[0];

    function formatQuestion(index, isForTotal=false) {
        return isForTotal ? question.replace(total, total + index +1 ): question.replace(partial, partial + index +1 )
    }
    function formatUrl(index, isForTotal=false) {
        return isForTotal ? url.replace(total, total + index +1 ): url.replace(partial, partial + index +1 )
        // return 'aaaa' + index
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
<h1><Link href='/'><a>main page</a></Link></h1>
                <div className={styles.description}>
                    <h2>{question}?</h2>
                    <h2>{partial} is {percentage} percent of {total}</h2>
                </div>
                <div className={styles.grid}>
                    <section className={styles.card}>
                        <h3>другими формулами</h3>
                        <ul>
                            <li><Link href={`/what-is-${total}-of-${partial}`}><a> What is {total}% of {partial}</a></Link></li>
                            <li><Link href={`/what-percent-of-${total}-is-${partial}`}><a> What % of {total} is {partial}</a></Link></li>
                            <li><Link href={`/${total}-is-${partial}-of-what-number`}><a> {total} is {partial} percent of what number? </a></Link></li>
                            <li><Link href={`/${total}-is-what-percent-of-${partial}`}><a>{total} is what percent of {partial}</a></Link></li>
                        </ul>
                    </section>
                    <section className={styles.card}>
                        <h3>Х+1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li><Link href={formatUrl(index)}><a>{ formatQuestion(index)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                     <section className={styles.card}>
                        <h3>Y+1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li><Link href={formatUrl(index, true)}><a>{ formatQuestion(index, true)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                    <section className={styles.card}>
                        <h3>Х+0.1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li><Link href={formatUrl(index+0.1)}><a>{ formatQuestion(index+0.1)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                    <section className={styles.card}>
                        <h3>Y+0.1</h3>
                        <ul>
                            {Array.from(new Array(10).keys()).map(index => (
                                <li><Link href={formatUrl(index+0.1, true)}><a>{ formatQuestion(index+0.1, true)}</a></Link></li>
                            ))
                            }
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    )
}

// export default Main

export async function getServerSideProps(context) {
    let partial, total;
    let first = true;
    const q = context.query.slug[0];
    q.split('-').map(
        (val) => {
            if (!isNaN(val)) {
                if (first) {
                    total = Number(val)
                    first = false;
                }
                else (
                    partial = Number(val)
                )
            }
        }
    )
    const question = q.replaceAll('-', ' ');
    const percentage = Number(((100 * partial) / total).toFixed(2))
    const props = { total, partial, percentage, question };

    return {
        props
    }
}