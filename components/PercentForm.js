import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.css'

function PercentForm() {

    const router = useRouter()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        router.push(`/what-is-${data.partial}-of-${data.total}`)
    };
    return (
        <div id={styles.calculator}>
            <div className={styles.header}> <span>Calculate percent</span> </div>
            <div className={styles.formContainer}>
                <form className={styles.row} onSubmit={handleSubmit(onSubmit)} >

                    <div className={styles.column}> <span id={styles.equal}>What is</span> </div>
                    <div className={styles.column}>
                        <input  id={styles.inputFraction} name="partial" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                    </div>
                    <div className={styles.column}> <span id={styles.equal}>% of</span> </div>
                    <div className={styles.column}>
                        <input  id={styles.inputFraction} name="total" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                    </div>
                    <div className={styles.column}> <span id={styles.equal}>?</span> </div>
                    <div className={styles.column}>
                         <button id={styles.button} type="submit" value="Submit">CALCULATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default PercentForm;