import Image from 'next/image'
import React from 'react'
import coder from '../public/coder.jpg'
import styles from "../styles/About.module.css"
const about = () => {
  return (
    <div className={`${styles.body} ${styles.header} `} style={{ textAlign: "center" }}>
      About Page
      <p className='container' style={{ marginBottom: "60px" }} >Another Page style jsx</p>
      <div style={{ textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "70px", paddingBottom: "20px" }}>
        <Image src="/coder.jpg"
          width="200" height="200" alt="">
        </Image>
        <div style={{ marginRight: "20px", marginTop: "40px" }}></div>
        <Image
          src="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg"
          priority
          width="200"
          height="200"
        >
        </Image>
        <div style={{ marginRight: "20px" }}></div>
        <Image src={coder}
          width="200"
          height="200">
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
