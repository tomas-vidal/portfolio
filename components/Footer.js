import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();

  console.log(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    process.env.NEXT_PUBLIC_PUBLIC_KEY
  );

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {},
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <footer className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-stone-900 mb-5 dark:text-white">
        Contacto
      </h1>
      <form
        className="flex flex-col gap-2 text-sm dark:text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="border rounded-md border-stone-400 py-2 px-2 outline-none bg-transparent"
          type="text"
          name="user_name"
          id="name"
          placeholder="Nombre"
        />
        <input
          className="border rounded-md border-stone-400 py-2 px-2 outline-none bg-transparent"
          type="email"
          name="user_email"
          id="email"
          placeholder="Mail"
        />
        <textarea
          className="border rounded-md border-stone-400 py-2 px-2 resize-none outline-none h-48 bg-transparent"
          type="text"
          name="message"
          id="msg"
          placeholder="Mensaje"
        />
        <button
          className="mr-auto bg-gradient-to-r from-red-500 to-orange-500 py-2 px-10 text-white font-bold rounded-md"
          type="submit"
          value="Send"
        >
          Enviar mensaje
        </button>
      </form>
      <p className="text-sm sm:text-xs text-stone-500 text-center mt-10">
        ©{new Date().getFullYear()} Tomás Vidal. Todos los derechos reservados
      </p>
    </footer>
  );
}
