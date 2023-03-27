import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Sidebar from './components/Sidebar'
import Head from 'next/head';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3jcphxc', 'template_o1si5n9', form.current, 'atwDnmKut-t4_4MyT')
      .then((result) => {
        console.log(result.text);
        console.log("se envio");
      }, (error) => {
        console.log(error.text);
        console.log("fail");

      });
  };

  return (
    <div className='bg-cyan-900 flex flex-col min-h-screen'>
      <Head>
        <title>Matias Soto Portfolio</title>
      </Head>
      <Sidebar></Sidebar>
      <div className="ml-20 mt-4  md:mt-8 md:ml-52  lg:mt-40 lg:ml-72">
<div className='flex flex-row justify-center'> 

<h1 className='text-white text-2xl font-mono md:text-4xl lg:text-6xl'>Contact Me!</h1>
</div>


{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

    <div class="flex items-center justify-center px-3">
  
  <div class="mx-auto w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]">
    <form ref={form} onSubmit={sendEmail}>
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-cyan-400"
        >
          Your Name
        </label>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Your Name"
          class="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-cyan-400"
        >
          Email Address
        </label>
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="your@email.com"
          class="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
        />
      </div>
    
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-cyan-400"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
        ></textarea>
      </div>
      <div className='flex justify-center'>
        <input
          class="hover:shadow-form hover:bg-cyan-500 hover:cursor-pointer rounded-md bg-cyan-600 py-3 px-8 text-base font-semibold text-white outline-none lg:text-xl "
          type="submit" 
          value="Send"
        />
      </div>
    </form>
  </div>
</div>


      </div>
    </div>
  )
}

export default Contact