import Image from 'next/image'
import React from 'react'
import styles from "../styles/About.module.css"
const about = () => {
  return (
    <div className={`${styles.body} ${styles.header} `}>
      About Page
      <p className='container'>Another Page style jsx</p>
      <div style={{ textAlign: "center" }}>
        <Image src="/coder.jpg"
          width="200" height="200" alt="">
        </Image>
      </div>
      <style jsx>
        {`
        .container{
        color:red;
              }
          `}
      </style>
    </div >
  )
}

export default about
