import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.css'

function PercentForm(props) {

    let { total } = props;
    const router = useRouter()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        router.push(`/what-is/${data.partial}-of-${data.total}`)
    };
    return (
        <div id={styles.calculator}>
            <div className={styles.header}> <span>Calculate percent</span> </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <span>What is</span>
                <input  name="partial" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                <span>% of</span>
                <input  defaultValue={total} name="total" type="number" step="any" ref={register({ required: true })} onChange={() => { }} />
                <span>?</span>
                <button id={styles.button} type="submit" value="Submit">CALCULATE</button>
            </form>
        </div>
    )
}

export default PercentForm;