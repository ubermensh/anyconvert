import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Main (props) {
    console.log( 'props', props);

    return (
        <>
            {/* <head> */}
                {/* <title>{q}</title> */}
                {/* <meta name="keywords" content= { metacontent } /> */}
            {/* </head> */}
                {/* <h4>query: {q}</h4> */}
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

    console.log('query' , context.query);
    //what percent of totalValue is partial value
    // switch (q) {
    //     case 'What*':
    //         console.log('what 1');
    //         break;
    //     default:
    //         console.log(`redirect 404 - ${q}.`);
    // }
    // let param1, param2;

    function percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    }
    const ololo = 'oooo';

  return {
    props: {ololo}, // will be passed to the page component as props
  }
}

// posts will be populated at build time by getStaticProps()
// function Blog({ posts }) {
//     return (
//       <ul>
//         {posts.map((post) => (
//           <li>{post.title}</li>
//         ))}
//       </ul>
//     )
//   }
  
//   // This function gets called at build time on server-side.
//   // It won't be called on client-side, so you can even do
//   // direct database queries. See the "Technical details" section.
//   export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     // const res = await fetch('https://.../posts')
//     // const posts = await res.json()
//    const posts = [ {title: 'ololo'}]
//     // By returning { props: posts }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }
  
//   export default Blog