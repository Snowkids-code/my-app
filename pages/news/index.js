// our-domain.com/news - when this route is hit, this page is served
//Here we load the react component that should be loaded for this page
//the file is put in a folder which also acts as a path
//creating the news folder is important for nested paths eg: our-domain.com/news/something-important

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is great</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
