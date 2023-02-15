import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css"

const blog = () => {
  const [blog, setblog] = useState([])
  useEffect(() => {
    console.log('useEffect is running')
    fetch('http://localhost:3000/api/posts')
      .then((a) => {
        return a.json();
      }).then((parsed) => {
        console.log(parsed)
        setblog(parsed)
      })
  }, []);

  return (
    <div className='container' style={{ display: "flex", justifyContent: "center", overflow: "auto" }}>
      <div className={styles.body}>
        {blog.map((data) => {
          return <div>
            <Link href={`/${data.slug}`}> </Link>
            <h4 style={{ textAlign: "center" }}>{data.title} </h4>
            <p>{data.desc}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default blog
