import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const index = ({ data }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Head>
          <title>Home Page</title>
        </Head>
        <h4>
          Blog Data Content
        </h4>
        {data.slice(0, 10).map((data) => {
          return <div key={data.id}>
            <Link href={`/blog/${data.id}`}>
              <p>Title Here is: {data.title}</p>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}
export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json();
  return {
    props: { data }
  }
}

export default index
