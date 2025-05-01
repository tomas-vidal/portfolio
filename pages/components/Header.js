import React from "react";

export default function Header() {
  return (
    <section className="text-center">
      <h1
        className="text-7xl font-bold dark:text-white"
        aria-label="Nombre del desarrollador: Tomás Vidal"
      >
        Tomás Vidal
      </h1>
      <p
        className="tracking-widest dark:text-white/50"
        aria-label="Profesión: Front-end Developer & Digital Designer"
      >
        BACKEND DEVELOPER & DIGITAL DESIGNER
      </p>
      <p className="text-sm max-w-xl mt-4 dark:text-white/80">
        Soy diseñador digital especializado en desarrollo web. Me dedico a crear
        sitios desde la etapa de bocetado hasta su implementación final.
        Actualmente soy desarrollador freelance y estuve en proyectos que
        abarcan desde páginas institucionales hasta plataformas más complejas.
      </p>
    </section>
  );
}
