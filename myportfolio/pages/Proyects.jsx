import React from 'react'
import Sidebar from './components/Sidebar'
import Head from 'next/head'

const Proyects = () => {
  return (
    <div className='bg-cyan-900 flex flex-row'>
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <section>
        <div>
          <h1>Last Proyects </h1>
        </div>
        <div>
          <div>
            <h3>PokeFind App</h3>
            imagen
            <p>Design and develop a Pokemon App that included search, filtering, ordering and creation</p>
            <h4>Made with</h4>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Proyects