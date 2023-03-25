import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-cyan-900 flex flex-row min-h-screen">
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div className="flex flex-col ml-24 mx-8 mt-8 md:ml-52 md:mt-20 lg:ml-72 lg:mt-40">
        <h1 className="text-teal-600 font-mono text-2xl md:text-4xl lg:text-7xl">Hi! I'm Matias Soto</h1>
        <br></br>
        <p className="text-slate-300 font-mono text-xs md:text-base :text-lg">Im a full stack developer, dedicated, disciplined with a lot of enthusiasm to continue learning new things.</p>
        <div className='text-xl flex justify-center gap-8 my-8 text-white'>
          <a rel="noreferrer" href='https://github.com/MatiasSoto21/' target="_blank">
            <AiFillGithub className='text-2xl md:text-3xl lg:text-4xl hover:scale-125'></AiFillGithub>
          </a>
          <a rel="noreferrer" href='https://www.instagram.com/matisoto15/' target="_blank">

            <AiFillInstagram className='text-2xl md:text-3xl lg:text-4xl hover:scale-125'></AiFillInstagram>
          </a>
          <a rel="noreferrer" href='https://www.linkedin.com/in/matias-soto-760853239/' target="_blank">

            <AiFillLinkedin className='text-2xl md:text-3xl lg:text-4xl hover:scale-125'></AiFillLinkedin>
          </a>
        </div>
      </div>
    </div>
  )
}
