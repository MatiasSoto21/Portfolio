import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import styles from "./modulecss/Index.module.css";
import folk1 from "../public/folk1.png";
import folk2 from "../public/folk2.png";
import smite from "../public/smite.png";
import smite1 from "../public/smite1.png";
import arg from "../public/arg.png";
import { motion } from "framer-motion";
import "animate.css";

import AppContext from "../utils/AppContext";

const Aboutme = () => {
  const context = useContext(AppContext);

  return (
    <div id={styles.background} className="bg-cyan-900 flex flex-col min-h-screen">
      <Head>
        <link
          rel="shortcut icon"
          href="https://i.postimg.cc/6Q7C5GDp/MS-1.png"
        />
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div className="animate__animated animate__fadeInDown animate__faster">
        <div className="ml-20 text-white mt-8 md:ml-48 lg:ml-72">
          <div className="flex flex-row justify-center">
            <h1
              id={styles.title}
              className="font-mono text-teal-200 text-lg md:text-4xl lg:text-6xl"
            >
              {" "}
              {context.idioma ? "Sobre mi" : "About Me"}
            </h1>
            <span className="font-mono   text-lg md:text-4xl lg:text-6xl">
              🧉
            </span>
            <Image
              priority
              className="w-[35px] h-[25px] md:w-[50px] md:h-[40px] lg:w-[80px] lg:h-[60px]"
              src={arg}
              alt="ArgFlag"
              width={100}
            />
            <motion.p
              className="font-mono mt-1 text-base md:text-2xl lg:text-4xl lg:mt-4"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.2 }}
            >
              ⭐
            </motion.p>
            <motion.p
              className="font-mono text-xl md:text-4xl lg:text-6xl"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.5 }}
            >
              ⭐
            </motion.p>
            <motion.p
              className="font-mono mt-1 text-base md:text-2xl lg:text-4xl lg:mt-4"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: 1.8 }}
            >
              ⭐
            </motion.p>
          </div>
          <p className="font-mono mt-4 text-xs font-medium text-center px-5 md:text-base lg:text-lg lg:mt-10 max-w-5xl mx-auto">
            {!context.idioma
              ? "I'm from Argentina and I'm 22 years old, At the beginning of 2022 I decided to start my path to become a Web Developer. While and before that, I spent a lot of time being a professional smite player and dancing as a hobby. Here I leave you some images as a fun fact about me."
              : "Soy de Argentina y tengo 22 años, a principios del 2022 decidí empezar mi camino para ser un desarrollador web. Mientras y antes de eso, pasé mucho tiempo siendo un jugador profesional de smite y bailando como hobby. Acá te dejo algunas imagenes como dato curioso."}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="carousel w-60 ml-20 mt-6 md:mt-10 md:w-96 md:ml-48 lg:w-1/3">
            <div
              id="slide1"
              className="carousel-item relative w-full h-64 flex justify-center md:h-96 lg:h-full"
            >
              <Image
                priority
                src={smite1}
                alt="Pic1"
                className="w-full h-60 rounded-2xl md:h-96 lg:h-4/5"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide4"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full h-60 flex justify-center md:h-96 lg:h-full"
            >
              <Image
                priority
                src={folk2}
                alt="Pic2"
                className="w-full h-64 rounded-2xl md:h-96 lg:h-4/5"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full h-60 flex justify-center md:h-96 lg:h-full"
            >
              <Image
                priority
                src={smite}
                alt="Pic3"
                className="w-full rounded-2xl md:h-96 lg:h-4/5"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full h-60 flex justify-center md:h-96 lg:h-full"
            >
              <Image
                priority
                src={folk1}
                alt="Pic4"
                className="w-full h-64 rounded-2xl md:h-96 lg:h-4/5"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-xs btn-circle md:btn-sm lg:btn-md"
                >
                  ❯
                </a>
              </div>
            </div>
            {/*                 <div id="slide5" className="carousel-item relative w-full h-64 flex justify-center md:h-96 lg:h-full">
                    <Image priority src={smitelan} alt="Pic5" className="w-[1400px] h-64 rounded-2xl md:h-96 lg:h-4/5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-xs btn-circle md:btn-sm lg:btn-md">❮</a>
                        <a href="#slide1" className="btn btn-xs btn-circle md:btn-sm lg:btn-md">❯</a>
                    </div>
                </div> */}
          </div>
        </div>
        <div className="ml-20 mt-4 flex justify-center text-white md:ml-48 lg:-mt-20 lg:mb-20">
          <h1 className="font-mono font-medium text-sm md:text-lg lg:text-3xl">
            {!context.idioma?
"I love Art and Videogames too! :)"
:
"¡También me encanta el arte y los videojuegos! :)"
            }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
