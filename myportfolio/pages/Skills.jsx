import React from 'react'
import Sidebar from './components/Sidebar'
import Image from 'next/image'
import styles from "./modulecss/Skills.module.css"
import Head from 'next/head'

const Skills = () => {
  return (
    <div class="bg-cyan-900 flex flex-row">
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div class="flex flex-col mx-40 mt-40">
        <h1 class="text-white text-6xl font-mono">My Skill Set</h1>
        <br></br>
        <h2 class="text-white text-3xl mt-14 font-mono">Programming Languages</h2>
        <div class="flex flex-row">
          <img class="mt-5" src='https://img.shields.io/badge/-Javascript-grey?logo=javascript&logoColor=yellow&style=plastic'
            alt='javascript'
            width="90px"
          />
          <img class="mt-5 mx-3" src='https://img.shields.io/badge/-HTML-red?logo=html5&logoColor=white&style=plastic'
            alt='html5'
            width="70px"
          />
          <img class="mt-5" src='https://img.shields.io/badge/-CSS-blue?logo=css3&logoColor=white&style=plastic'
            alt='css3'
            width="70px"
          />
        </div>
        <br></br>
        <h3 class="text-white text-3xl font-mono mt-5">Frameworks and Libraries</h3>


        <div class="flex flex-row">
          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=0064cf&style=plastic'
            alt='reactjs'
            height="100px"
            width="100px"
          />
          <img class="mt-5" src='https://img.shields.io/badge/-ReactNative-61DAFB?logo=reactnative&logoColor=0064cf&style=plastic'
            alt='reactNative'
            height="100px"
            width="100px"
          />
          <img class="mt-5 mx-3" src='https://img.shields.io/badge/-Bootstrap-purple?logo=bootstrap&logoColor=white&style=plastic'
            alt='bootstrap'
            width="100px"
          />
          <img class="mt-5" src='https://img.shields.io/badge/-Redux-red?logo=redux&logoColor=white&style=plastic'
            alt='redux'
            width="80px"
          />
        </div>
        <div class="flex flex-row">

          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-Express-white?logo=express&logoColor=black&style=plastic'
            alt='express'
            width="90px"
          />
          <img class="mt-5 mr-3" src='https://img.shields.io/badge/-PostgreSQL-0252a8?logo=postgresql&logoColor=white&style=plastic'
            alt='postgresql'
            width="110px"
          />
          {/* <img class="mt-5 mx-3" src='https://img.shields.io/badge/-Nextjs-grey?logo=nextjs&logoColor=white&style=plastic'
            alt='next'
            width="60px"
          /> */}
          <img class="mt-5" src='https://img.shields.io/badge/-TailwindCSS-0ab3bf?logo=tailwindcss&logoColor=white&style=plastic'
            alt='tailwindcss'
            width="120px"
          />

        </div>
        <div class="mt-5">
          <h4 class="text-white text-3xl font-mono mt-5">Current Learning</h4>
          <p class="text-white mt-3 font-mono">- TailwindComponents</p>
          <p class="text-white mt-3 font-mono">- Next.Js</p>
          <p class="text-white mt-3 font-mono">- MongoDB</p>

        </div>
      </div>

    </div>
  )
}

export default Skills