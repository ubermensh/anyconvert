import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Main ({total, partial, percentage}) {
    return (
        <>
        <h2>{partial} is {percentage} of {total}</h2>
        <ul>
                    <li> What is X% off Y</li>
                    <li>What % of X is Y</li>
                    <li>X is Y percent of what number?</li>
                    <li>X is what percent of Y</li>
                </ul>
        </>
    )
}

// export default Main

export async function getServerSideProps(context) {
    let partial, total;
    let first = true;
    context.query.slug[0].split('-').map(
        (val) => {
            if(!isNaN(val)){
                if(first) {
                    total = Number(val)
                    first = false;
                }
                else(
                    partial = Number(val)
                )
            }
        }
    )
    console.log(total, partial);
    // const per= (100 * partial) / total; 
    const percentage = Number(((100 * partial) / total).toFixed(2))
    const props = {total, partial, percentage};

  return {
    props 
  }
}