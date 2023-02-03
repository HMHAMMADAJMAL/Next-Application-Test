import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

const index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <NavBar />
      <h6>
        Data Value
      </h6>
      {data.slice(0, 5).map((data) => {
        return <div key={data.id}>
          <Link href={`/blog/${data.id}`}>
            <p>Title Here: {data.title}</p>
          </Link>
        </div>
      })}
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
