import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav style={{ margin: "20px" }}>
        <ul style={{ display: "flex", maxWidth: "100vh", width: "100%", marginRight: "20px" }}>
          <Link style={{ margin: "30px" }} href="/about"> Home</Link>
          <Link style={{ margin: "30px" }} href="/about">About</Link>
          <Link style={{ margin: "30px" }} href="/about">Contact</Link>
          <Link style={{ margin: "30px" }} href="/about">Services</Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
