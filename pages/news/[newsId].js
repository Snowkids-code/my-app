// our-domain.com/news/something-important
//using the [] allows next to know it is a dynamic file and allows different data to be fetched from here

//for getting the value used for this file
import { useRouter } from 'next/router'

function DetailPage() {

    const router = useRouter();

    //holds the concrete value from the url
    console.log(router.query.newsId);

    return <h1>The Detail Page</h1>
}

export default DetailPage;