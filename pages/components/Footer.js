import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm text-stone-500">
        © 2024 Tomás Vidal. Todos los derechos reservados
      </p>
      <a className="text-sm font-bold text-stone-800 cursor-pointer hover:underline underline-offset-4 dark:text-white">
        Contacto
      </a>
    </div>
  );
}
