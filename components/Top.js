import React from 'react';
import styles from '../styles/Home.module.css'

import Link from 'next/link';
function Top(props) {

    const { text, backButton } = props;

    return (
        <div className={styles.top}>
            {backButton &&
            <div className={styles.backButton}>
                <Link rel="icon" href="/">
                    <img src="../backArrow.svg"></img>
                </Link>
            </div>
            }
            <span className={styles.topText}> {text} </span>
        </div>
    )

}

export default Top;