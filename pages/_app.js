import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import NavBar from './NavBar';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main >
    </>)
}
