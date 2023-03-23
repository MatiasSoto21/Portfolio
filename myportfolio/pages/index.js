import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-cyan-900 flex flex-row">
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
        <Sidebar></Sidebar>
        <div className="flex flex-col mx-8 mt-8 md:mx-20 md:mt-20 lg:mx-40 lg:mt-40">
          <h1 className="text-teal-600 font-mono text-2xl md:text-4xl lg:text-7xl">Hi! I'm Matias Soto</h1>
          <br></br>
          <p className="text-slate-300 font-mono text-xs md:text-base :text-lg">Im a full stack developer, dedicated, disciplined with a lot of enthusiasm to continue learning new things.</p>
        </div>
    </div>
  )
}
