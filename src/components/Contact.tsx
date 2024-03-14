import React from "react";
import ContactIcon from "../icons/ContactIcon";

function Contact() {
  return (
    <section className="mt-20">
      <h2 className="flex items-center mb-5 gap-2 text-3xl font-bold">
        Contact
        <ContactIcon className="text-3xl"></ContactIcon>
      </h2>
      <form className="flex flex-col gap-2">
        <input
          className="dark:bg-stone-950 border-2 rounded-sm w-full p-2"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
        />
        <input
          className="dark:bg-stone-950 border-2 rounded-sm w-full p-2"
          type="email"
          name="email"
          id="email"
          placeholder="Correo electrónico"
        />
        <textarea
          className="dark:bg-stone-950 border-2 rounded-sm outline-none p-2"
          placeholder="Mensaje"
          name="msg"
          id="msg"
          cols={30}
          rows={10}
        ></textarea>
        <button
          className="dark:bg-yellow-400 dark:border-yellow-400 dark:text-stone-800 font-bold self-start border-2 py-2 px-4 rounded-sm w-80"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
