import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Sidebar from './components/Sidebar'
import Head from 'next/head';
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();
  const inputname = useRef();
  const inputmail = useRef();
  const inputmessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(inputname.current.value.length);

    if (inputname.current.value.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please write your name!',
      })
    } else if (inputmail.current.value.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please write your email!',
      })
    } else if (inputmessage.current.value.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please write your message!',
      })
    } else {

      emailjs.sendForm('service_3jcphxc', 'template_o1si5n9', form.current, 'atwDnmKut-t4_4MyT')
      form.current.reset();
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Message Sent!',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      })
    }
  };

  return (
    <div className='bg-cyan-900 flex flex-col min-h-screen'>
      <Head>
        <link rel="shortcut icon" href="https://i.postimg.cc/6Q7C5GDp/MS-1.png" />
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div className="ml-20 mt-4 md:mt-8 md:ml-52  lg:mt-40 lg:ml-72">
        <div className='flex flex-row justify-center'>

          <h1 className='text-white text-2xl font-mono md:text-4xl lg:text-6xl'>Contact Me!</h1>
        </div>

        <div className="flex items-center justify-center px-3">

          <div className="mx-auto w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-cyan-400"
                >
                  Your Name
                </label>
                <input
                  ref={inputname}
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-cyan-400"
                >
                  Email Address
                </label>
                <input
                  ref={inputmail}
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label

                  className="mb-3 block text-base font-medium text-cyan-400"
                >
                  Message
                </label>
                <textarea
                  ref={inputmessage}
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
                ></textarea>
              </div>
              <div className='flex justify-center'>
                <input
                  className="hover:shadow-form hover:bg-cyan-500 hover:cursor-pointer rounded-md bg-cyan-600 py-3 px-8 text-base font-semibold text-white outline-none lg:text-xl "
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>

        <div className='-ml-2 mt-6'>
          <footer className="footer footer-center py-2 text-base-content rounded">
            <div>
              <div className="grid grid-flow-col gap-12">
                <a rel="noreferrer" href='https://www.instagram.com/matisoto15/' target="_blank" className="text-[#F77737]"><AiOutlineInstagram className='text-2xl md:text-3xl lg:text-4xl'></AiOutlineInstagram></a>
                <a rel="noreferrer" href='https://wa.me/542615696602' target="_blank" className=" text-[#00bb2d]"><IoLogoWhatsapp className='text-2xl md:text-3xl lg:text-4xl'></IoLogoWhatsapp></a>
                <a rel="noreferrer" href='https://www.facebook.com/matias.sotocdgcat' target="_blank" className=" text-sky-600"><AiFillFacebook className='text-2xl md:text-3xl lg:text-4xl'></AiFillFacebook></a>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </div>
  )
}

export default Contact