import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav style={{}}>
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <Link style={{ margin: "30px" }} href="/blog"> Home</Link>
          <Link style={{ margin: "30px" }} href="/about">About</Link>
          <Link style={{ margin: "30px" }} href="/blog">Products</Link>
          <Link style={{ margin: "30px" }} href="/">Services</Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
