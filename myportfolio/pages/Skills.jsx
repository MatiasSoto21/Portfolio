import React from 'react'
import Sidebar from './components/Sidebar'
import Image from 'next/image'
import styles from "./modulecss/Skills.module.css"
import Head from 'next/head'


const Skills = () => {
  return (
    <div class="bg-cyan-900 flex flex-row min-h-screen">
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div class="flex flex-col ml-24  md:mt-8 md:ml-52  lg:mt-40 lg:ml-72">
        <h1 class="text-white text-2xl font-mono md:text-4xl lg:text-6xl">My Skill Set</h1>
        <br></br>
        <h2 class="text-white font-mono md:mt-7 md:text-xl lg:mt-14 lg:text-3xl">Programming Languages</h2>
        <div class="flex flex-wrap">
          <img class="mt-5" src='https://img.shields.io/badge/-Javascript-grey?logo=javascript&logoColor=yellow&style=plastic'
            alt='javascript'
            width="92px"
          />
          <img class="mt-5 mx-3" src='https://img.shields.io/badge/-HTML-red?logo=html5&logoColor=white&style=plastic'
            alt='html5'
            width="65px"
          />
          <img class="mt-5" src='https://img.shields.io/badge/-CSS-blue?logo=css3&logoColor=white&style=plastic'
            alt='css3'
            width="65px"
          />
        </div>
        <br></br>
        <h3 class="text-white font-mono md:text-xl md:mt-3 lg:text-3xl lg:mt-5">Frameworks and Libraries</h3>


        <div class="flex flex-wrap">
          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=0064cf&style=plastic'
            alt='reactjs'
            width="75px"
          />
          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-ReactNative-61DAFB?logo=reactnative&logoColor=0064cf&style=plastic'
            alt='reactNative'
            width="83px"
          />
          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-Bootstrap-purple?logo=bootstrap&logoColor=white&style=plastic'
            alt='bootstrap'
            width="95px"
          />
          <img class="mt-5" src='https://img.shields.io/badge/-Redux-red?logo=redux&logoColor=white&style=plastic'
            alt='redux'
            width="75px"
          />
        </div>
        <div class="flex flex-wrap">

          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-Express-white?logo=express&logoColor=black&style=plastic'
            alt='express'
            width="70px"
          />
          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-PostgreSQL-0252a8?logo=postgresql&logoColor=white&style=plastic'
            alt='postgresql'
            width="90px"
          />
          <img class="mt-5" src='https://img.shields.io/badge/-TailwindCSS-0ab3bf?logo=tailwindcss&logoColor=white&style=plastic'
            alt='tailwindcss'
            width="110px"
          />

        </div>
        <div class="mt-5">
          <h4 class="text-white font-mono md:text-xl md: mt-3 lg:text-3xl lg:mt-5">Current Learning</h4>
          <p class="text-white font-mono md:mt-2 lg:mt-3">- TailwindComponents</p>
          <p class="text-white font-mono md:mt-2 lg:mt-3">- Next.Js</p>
          <p class="text-white font-mono md:mt-2 lg:mt-3">- MongoDB</p>

        </div>
      </div>

    </div>
  )
}

export default Skills