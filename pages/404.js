import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react';
const ErrorPage = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/')
  }
  useEffect(() => {
    setTimeout((e) => {
      e.preventDefault()
      router.push('/')
    }, 1000);
  },)

  return (
    <div>
      <p>Page Not Found</p>
      <Link href='/'>
        Back To HomePage Using Link
      </Link>
      <button onClick={handleRoute}>
        Back To Home Using
        Router push method</button>
    </div>
  )
}

export default ErrorPage
