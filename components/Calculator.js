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
        <div className={styles.calculator}>
            <div>calculate any fraction</div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input name="fraction" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                <select name="type" ref={register} onChange={() => { }} > <option value="fraction">as a fraction</option> </select>
                <button type="submit" value="Submit">calculate</button>
            </form>
        </div>
    )
 
}
 
export default Calculator;