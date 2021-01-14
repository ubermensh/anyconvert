import Link from "next/link";

export default function ErrorPage() {
    return (
        <>
        <h1>Eror 404</h1>
        <p>Please <Link href= {'/'}><a>go back</a></Link></p>
         </> 
    )
}