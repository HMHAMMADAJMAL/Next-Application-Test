import React from 'react'

const PageNo = ({ data }) => {
  const { title, body } = data;
  return (
    <div>
      <h6>Details of Data is </h6>
      <div>
        <h3 >Title Here: {title}</h3>
        <p>Body Here: {body}</p>
      </div>
    </div>
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
