import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const param1 = router.query.slug
    console.log(router.query);

    // return <p>Post: {param1} </p>
    return <p>
        <h4>Param1: {param1}</h4>

        тут семантический разбор url с достованием 2 цифр в правильном контексте, 
        or 404 
        <ul>
            <li> What is X% off Y</li>
            <li>What % of X is Y</li>
            <li>X is Y percent of what number?</li>
            <li>X is what percent of Y</li>
        </ul>

    </p>
}

export default Post