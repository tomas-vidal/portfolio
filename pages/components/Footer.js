import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-stone-900 mb-5 dark:text-white">
        Contacto
      </h1>
      <form
        className="flex flex-col gap-2 text-sm dark:text-white"
        method="post"
        action="vidalltomas@gmail.com"
      >
        <input
          className="border rounded-md border-stone-400 py-2 px-2 outline-none bg-transparent"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
        />
        <input
          className="border rounded-md border-stone-400 py-2 px-2 outline-none bg-transparent"
          type="email"
          name="email"
          id="email"
          placeholder="Mail"
        />
        <textarea
          className="border rounded-md border-stone-400 py-2 px-2 resize-none outline-none h-48 bg-transparent"
          type="text"
          name="msg"
          id="msg"
          placeholder="Mensaje"
        />
        <button
          className="mr-auto bg-gradient-to-r from-red-500 to-orange-500 py-2 px-10 text-white font-bold rounded-md"
          type="submit"
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
