import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.css'

function Calculator() {

    const router = useRouter()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        router.push(`/as_a_fraction/${data.fraction}`)
    };
    return (
        <div id={styles.calculator}>
            <div className={styles.header}> <span>Calculate any fraction</span> </div>
            <div className={styles.formContainer}>
                <form className={styles.row} onSubmit={handleSubmit(onSubmit)} >
                    <div className={styles.column}>
                        <input  id={styles.inputFraction} name="fraction" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                    </div>
                    <div className={styles.column}>
                        <select id={styles.dropdown} name="type" ref={register} onChange={() => { }} > <option value="fraction">as a fraction</option> </select>
                    </div>
                       
                    <div className={styles.column}> <span id={styles.equal}>=</span> </div>
                    <div className={styles.column}>
                         <button id={styles.button} type="submit" value="Submit">CALCULATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
 
}
 
export default Calculator;