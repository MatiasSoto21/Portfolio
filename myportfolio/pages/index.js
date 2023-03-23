import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class="bg-cyan-900 flex flex-row">
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
        <Sidebar></Sidebar>
        <div class="flex flex-col mx-40 mt-40">
          <h1 class="text-teal-600 text-7xl font-mono">Hi! I'm Matias Soto</h1>
          <br></br>
          <p class="text-slate-300 text-lg font-mono">Im a full stack developer, dedicated, disciplined with a lot of enthusiasm to continue learning new things.</p>
        </div>
    </div>
  )
}
