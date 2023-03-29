import Head from 'next/head'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import styles from './modulecss/Index.module.css'
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-cyan-900 flex flex-row min-h-screen">
      <Head>
        <title>Matias Soto Portfolio</title>
        <link rel="shortcut icon" href="https://i.postimg.cc/6Q7C5GDp/MS-1.png" />
      </Head>
      <Sidebar></Sidebar>
      <div className="flex flex-col ml-24 mx-8 mt-8 md:ml-52 md:mt-20 lg:ml-80 lg:mt-40">
        <motion.h1 id={styles.title} className="drop-shadow-xs text-teal-200 font-mono text-2xl md:text-4xl lg:text-7xl"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
        >Hi! I'm Matias Soto</motion.h1>
        <br></br>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay:0.5, duration: 2 }}>
          <p className="text-slate-200 font-mono text-base md:text-xl lg:text-2xl">Welcome to my Portfolio</p>
          <br></br>
          <p className="text-slate-300 font-mono text-xs md:text-lg lg:text-lg">Im a full stack developer, dedicated, disciplined with a lot of enthusiasm to continue learning new things.</p>
          <br></br>
          {/* <div className='flex'> */}
          <p className="text-slate-300 font-mono text-xs md:text-lg lg:text-lg">If you want to get in touch with me feel free to write to <span className='underline text-cyan-300 font-mono text-xs md:text-lg lg:text-lg'>matias2015fernando@gmail.com</span></p>
        </motion.div>
        {/* </div> */}
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 30 }}
        >
          <a rel="noreferrer" href='https://drive.google.com/file/d/1A-DDe6IexPJcAXxEkluhBXoraIgUe_pC/view' target="_blank">
            <button
              className=" drop-shadow-md shadow-md shadow-cyan-300 mt-6 py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-4 bg-teal-600 text-slate-100 font-semibold border border-teal-600 rounded hover:bg-cyan-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              Download my Resume
            </button>
          </a>
        </motion.div>


        <motion.div className='text-xl flex justify-center gap-8 my-8 text-white'
        
        >
          <a rel="noreferrer" href='https://github.com/MatiasSoto21/' target="_blank">
            <AiFillGithub className='text-2xl md:text-3xl lg:text-4xl hover:scale-150 duration-100 hover:text-cyan-400'></AiFillGithub>
          </a>
          <a rel="noreferrer" href='https://www.instagram.com/matisoto15/' target="_blank">

            <AiFillInstagram className='text-2xl md:text-3xl lg:text-4xl hover:scale-150 duration-100 hover:text-cyan-400'></AiFillInstagram>
          </a>
          <a rel="noreferrer" href='https://www.linkedin.com/in/matias-soto-760853239/' target="_blank">

            <AiFillLinkedin className='text-2xl md:text-3xl lg:text-4xl hover:scale-150 duration-100 hover:text-cyan-400'></AiFillLinkedin>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
