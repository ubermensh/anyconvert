import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.css'

function FractionForm() {

    const router = useRouter()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        router.push(`/as-a-fraction/${data.fraction}`)
    };
    return (
        <div id={styles.calculator}>
            <div className={styles.header}> <span>Calculate any fraction</span> </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input name="fraction" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                <select name="type" ref={register} onChange={() => { }} > <option value="fraction">as a fraction</option> </select>
                <span>=</span>
                <button id={styles.button} type="submit" value="Submit">CALCULATE</button>
            </form>
        </div>
    )

}

export default FractionForm;