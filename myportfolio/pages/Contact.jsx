import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import Sidebar from "./components/Sidebar";
import Head from "next/head";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Swal from "sweetalert2";
import "animate.css";
import AppContext from "./components/AppContext";
import styles from "./modulecss/Index.module.css";


const Contact = () => {
  const form = useRef();
  const inputname = useRef();
  const inputmail = useRef();
  const inputmessage = useRef();
  const context = useContext(AppContext);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(inputname.current.value.length);

    if (inputname.current.value.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !context.idioma? "Please write your name!" : "¡Porfavor escribí tu nombre!",
      });
    } else if (inputmail.current.value.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !context.idioma? "Please write your email!" : "¡Porfavor escribí tu email!",
      });
    } else if (inputmessage.current.value.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: !context.idioma? "Please write your message!" : "¡Porfavor escribí tu mensaje!",
      });
    } else {
      emailjs.sendForm(
        "service_3jcphxc",
        "template_o1si5n9",
        form.current,
        "atwDnmKut-t4_4MyT"
      );
      form.current.reset();
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Message Sent!",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
    }
  };

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
      <section className="animate__animated animate__fadeInDown animate__faster">
        <div className="ml-20 mt-4 md:mt-8 md:ml-52  lg:mt-40 lg:ml-72">
          <div className="flex flex-row justify-center">
            <h1 className="text-white text-2xl font-mono md:text-4xl lg:text-6xl">
              {!context.idioma ? "Contact Me!" : "Contáctame"}
            </h1>
          </div>

          <div className="flex items-center justify-center px-3">
            <div className="mx-auto w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-cyan-400">
                  {!context.idioma ? "Your Name" : "Tu Nombre"}
                  </label>
                  <input
                    ref={inputname}
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder={!context.idioma ? "Your Name" : "Tu Nombre"}
                    className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-cyan-400">
                  {!context.idioma ? "Email Address" : "Email"}
                  </label>
                  <input
                    ref={inputmail}
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder={!context.idioma ? "your@email.com" : "tu@email.com"}
                    className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-cyan-400">
                  {!context.idioma ? "Message" : "Mensaje"}
                  </label>
                  <textarea
                    ref={inputmessage}
                    rows="4"
                    name="message"
                    id="message"
                    placeholder={!context.idioma ? "Type your message" : "Escribí tu mensaje"}
                    className="w-full resize-none rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <input
                    className="hover:shadow-form hover:bg-cyan-500 hover:cursor-pointer rounded-md bg-cyan-600 py-3 px-8 text-base font-semibold text-white outline-none lg:text-xl "
                    type="submit"
                    value={!context.idioma ? "Send" : "Enviar"}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="-ml-2 mt-6">
            <footer className="footer footer-center py-2 text-base-content rounded">
              <div>
                <div className="grid grid-flow-col gap-12">
                  <a
                    rel="noreferrer"
                    href="https://www.instagram.com/matisoto15/"
                    target="_blank"
                    className="text-[#F77737]"
                  >
                    <AiOutlineInstagram className="hover:scale-150 duration-100 text-2xl md:text-3xl lg:text-4xl"></AiOutlineInstagram>
                  </a>
                  <a
                    rel="noreferrer"
                    href="https://wa.me/542615696602"
                    target="_blank"
                    className=" text-[#00bb2d]"
                  >
                    <IoLogoWhatsapp className="hover:scale-150 duration-100 text-2xl md:text-3xl lg:text-4xl"></IoLogoWhatsapp>
                  </a>
                  <a
                    rel="noreferrer"
                    href="https://www.facebook.com/matias.sotocdgcat"
                    target="_blank"
                    className=" text-sky-600"
                  >
                    <AiFillFacebook className="hover:scale-150 duration-100 text-2xl md:text-3xl lg:text-4xl"></AiFillFacebook>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
