import Image from 'next/image';
import React from 'react'
import coder from '/public/coder.jpg'

const PageNo = ({ data }) => {
  const { title } = data;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div >
        <h6 style={{ textAlign: "center" }}>Details of The Data:</h6>
        <h3>Title Here: {title}</h3>
        <div style={{ textAlign: "center" }}>
          <Image
            src={coder}
            alt='Picture of the auther'
            width={200}
            priority
            height={200}
          />
        </div>
      </div>
    </div >
  )
}
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(context) {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  return {
    props: { data }
  }
}

export default PageNo
