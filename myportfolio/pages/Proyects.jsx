import React from "react";
import Sidebar from "./components/Sidebar";
import Head from "next/head";
import pokefind from "../public/Pokefind.png";
import consolegame from "../public/console.png";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import styles from "./modulecss/Index.module.css";
import "animate.css";

const Proyects = () => {
  return (
    <div className="bg-cyan-900 flex flex-row min-h-screen">
      <Head>
        <title>Matias Soto Portfolio</title>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/6Q7C5GDp/MS-1.png"
        />
      </Head>
      <Sidebar></Sidebar>
      <section className="animate__animated animate__fadeInDown animate__faster mt-1 ml-20 md:mx-20 md:mt-8 md:ml-52 lg:mx-40 lg:mt-20 lg:ml-80">
        <h1
          id={styles.title}
          className="mt-2 ml-3 text-teal-200 text-xl font-mono md:text-4xl lg:text-6xl"
        >
          Lastest Proyects
        </h1>

        <section className="flex flex-col md:flex-row lg:flex-row lg: lg:justify-center">
          <div className="flex flex-col mx-2 mb-4 shadow-2xl shadow-black rounded-2xl md:mt-10 md:px-2  bg-cyan-800 hover:scale-105 duration-300">
            <div className="text-white text-center flex flex-col items-center">
              <h3 className="text-lg font-medium mb-1 md:text-xl mt-2 lg:text-3xl">
                PokeFind App
              </h3>
              <Image
                priority
                src={pokefind}
                alt="pokeAppImg"
                className="w-24 md:w-36 lg:w-64"
              />
              <p className="text-xs py-2 max-w-xs mx-auto md:text-base md:font-normal lg:text-lg lg:font-medium">
                Wiki Web App
              </p>
              <p className="text-xs py-2 max-w-xs mx-auto md:text-base md:font-normal lg:text-lg lg:font-medium">
                •Search-Filtering-Ordering-Creation.
              </p>
              <h4 className="-mt-1 mb-2">Made with</h4>
            </div>
            <div className="-mt-4 flex flex-wrap justify-center">
              <img
                className="mt-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-Javascript-grey?logo=javascript&logoColor=yellow&style=plastic"
                alt="javascript"
                width="92px"
              />
              <img
                className="mt-3 mx-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-HTML-red?logo=html5&logoColor=white&style=plastic"
                alt="html5"
                width="65px"
              />
              <img
                className="mt-3 mr-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-CSS-blue?logo=css3&logoColor=white&style=plastic"
                alt="css3"
                width="60px"
              />
              <img
                className="mt-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=0064cf&style=plastic"
                alt="reactjs"
                width="60px"
              />
            </div>
            <div className="text-xl flex justify-center gap-8 my-2 text-white">
              <a
                rel="noreferrer"
                href="https://github.com/MatiasSoto21/HENRY-PI"
                target="_blank"
                className="hover:text-cyan-300"
              >
                <AiFillGithub className="text-xl md:text-2xl lg:text-4xl"></AiFillGithub>
              </a>
              <a
                rel="noreferrer"
                href="https://henry-pi-ruby.vercel.app/"
                target="_blank"
                className="hover:text-cyan-300"
              >
                <AiOutlineLink className="text-xl md:text-2xl lg:text-4xl"></AiOutlineLink>
              </a>
            </div>
          </div>

          <div className="flex flex-col mx-2 mb-4 shadow-2xl shadow-black rounded-2xl md:mt-10 md:px-2  bg-cyan-800 hover:scale-105 duration-300">
            <div className="text-white text-center flex flex-col items-center">
              <h3 className="text-lg font-medium mb-1 md:tex-xl mt-2 lg:text-3xl">
                Console.Game
              </h3>
              <Image
                priority
                src={consolegame}
                alt="consolegameApp"
                className="w-16 md:w-28 lg:w-44"
              />
              <p className="text-xs py-2 max-w-xs mx-auto md:text-base md:font-normal lg:text-lg lg:font-medium">
                E-commerce Android App
              </p>
              <p className="text-xs py-2 max-w-xs mx-auto md:text-base md:font-normal lg:text-lg lg:font-medium">
                •Auth0-Shopping cart-Notifications-etc.
              </p>
              <h4 className="-mt-1 mb-2">Made with</h4>
            </div>
            <div className="-mt-4 flex flex-wrap justify-center">
              <img
                className="mt-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-Javascript-grey?logo=javascript&logoColor=yellow&style=plastic"
                alt="javascript"
                width="92px"
              />
              <img
                className="mt-3 mx-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-HTML-red?logo=html5&logoColor=white&style=plastic"
                alt="html5"
                width="65px"
              />
              <img
                className="mt-3 mr-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-CSS-blue?logo=css3&logoColor=white&style=plastic"
                alt="css3"
                width="60px"
              />
              <img
                className="mt-3 md:mt-5 lg:mt-5"
                src="https://img.shields.io/badge/-ReactNative-61DAFB?logo=reactnative&logoColor=0064cf&style=plastic"
                alt="reactjs"
                width="60px"
              />
            </div>
            <div className="text-xl flex justify-center gap-8 my-2 text-white">
              <a
                rel="noreferrer"
                href="https://github.com/Leandro-Larrea/PF-Ecommerce"
                target="_blank"
                className="hover:text-cyan-300"
              >
                <AiFillGithub className="text-xl md:text-2xl lg:text-4xl"></AiFillGithub>
              </a>
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1iv5c1CzGqt7dRl1hu2f1Js9pdxR31oTX/view"
                target="_blank"
                className="hover:text-cyan-300"
              >
                <AiOutlineLink className="text-xl md:text-2xl lg:text-4xl"></AiOutlineLink>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Proyects;
