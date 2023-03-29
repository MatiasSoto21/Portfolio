import React from 'react'
import Sidebar from './components/Sidebar'
import Head from 'next/head'
import styles from './modulecss/Index.module.css'


const Skills = () => {
  return (
    <div className="bg-cyan-900 flex flex-row min-h-screen">
      <Head>
        <link rel="shortcut icon" href="https://i.postimg.cc/6Q7C5GDp/MS-1.png" />
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div className="flex flex-col ml-[90px] mr-2 md:mt-8 md:ml-52  lg:mt-20 lg:ml-80">
        <h1 id={styles.title} className="mt-2 text-teal-200 text-2xl font-mono md:text-4xl lg:text-6xl">My Skill Set</h1>
        <br></br>
        <div className='bg-cyan-700 rounded-lg pb-2 px-2 md:pb-4 md:pr-12 md:pl-4 lg:pb-6 lg:mt-4'>

          <h2 className="text-white font-mono md:mt-3 md:text-xl lg:mt-4 lg:text-3xl">Programming Languages</h2>
          <div className="flex flex-wrap">
            <img className="mt-5" src='https://img.shields.io/badge/-Javascript-grey?logo=javascript&logoColor=yellow&style=plastic'
              alt='javascript'
              width="92px"
            />
            <img className="mt-5 mx-3" src='https://img.shields.io/badge/-HTML-red?logo=html5&logoColor=white&style=plastic'
              alt='html5'
              width="65px"
            />
            <img className="mt-5" src='https://img.shields.io/badge/-CSS-blue?logo=css3&logoColor=white&style=plastic'
              alt='css3'
              width="65px"
            />
          </div>
        </div>
        
        <div className='bg-cyan-700 mt-4 rounded-lg pb-2 px-2 md:pb-4 md:pr-12 md:pl-4 lg:pb-6 lg:mt-4'>


          <h3 className="text-white font-mono md:text-xl md:mt-3 lg:text-3xl lg:mt-5">Frameworks and Libraries</h3>


          <div className="flex flex-wrap">
            <img className="mt-5 mr-3" src='https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=0064cf&style=plastic'
              alt='reactjs'
              width="75px"
            />
            <img className="mt-5 mr-3" src='https://img.shields.io/badge/-ReactNative-61DAFB?logo=reactnative&logoColor=0064cf&style=plastic'
              alt='reactNative'
              width="83px"
            />
            <img className="mt-5 mr-3" src='https://img.shields.io/badge/-Bootstrap-purple?logo=bootstrap&logoColor=white&style=plastic'
              alt='bootstrap'
              width="95px"
            />
            <img className="mt-5" src='https://img.shields.io/badge/-Redux-red?logo=redux&logoColor=white&style=plastic'
              alt='redux'
              width="75px"
            />
          </div>
          <div className="flex flex-wrap">

            <img className="mt-5 mr-3" src='https://img.shields.io/badge/-Express-white?logo=express&logoColor=black&style=plastic'
              alt='express'
              width="70px"
            />
            <img className="mt-5 mr-3" src='https://img.shields.io/badge/-PostgreSQL-0252a8?logo=postgresql&logoColor=white&style=plastic'
              alt='postgresql'
              width="90px"
            />
            <img className="mt-5" src='https://img.shields.io/badge/-TailwindCSS-0ab3bf?logo=tailwindcss&logoColor=white&style=plastic'
              alt='tailwindcss'
              width="110px"
            />

          </div>
        </div>
        <div className="mt-5 bg-cyan-700 rounded-lg pb-2 px-2 md:pb-4 md:pr-12 md:pl-4 lg:pb-6 lg:mt-4">
          <h4 className="text-white font-mono md:text-xl md: mt-3 lg:text-3xl lg:mt-5">Current Learning</h4>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- TailwindComponents</p>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- Next.Js</p>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- MongoDB</p>
        </div>

        <div className="mt-5 mb-5 bg-cyan-700 rounded-lg pb-2 px-2 md:pb-4 md:pr-12 md:pl-4 lg:pb-6 lg:mt-4 lg:pr-72">
          <h4 className="text-white font-mono md:text-xl md: mt-3 lg:text-3xl lg:mt-5">Soft Skills</h4>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- Time management</p>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- Communication</p>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- Teamwork</p>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- Adaptability</p>
          <p className="text-white font-mono md:mt-2 lg:mt-3 lg:text-lg">- Organization</p>



        </div>
      </div>

    </div>
  )
}

export default Skills