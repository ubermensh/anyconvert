import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { param1, param2 } = router.query
    console.log(router.query);

    // return <p>Post: {param1} </p>
    return <p>Param1: {param1}, param2 {param2} </p>
}

export default Post