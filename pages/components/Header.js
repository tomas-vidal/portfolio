import React from "react";

export default function Header() {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold dark:text-white">Tomás Vidal</h1>
      <p className="tracking-widest dark:text-white/50">
        FRONT END DEVELOPER & DIGITAL DESIGNER
      </p>
      <p className="text-sm max-w-xl mt-4 dark:text-white/80">
        Actualmente soy un estudiante de la carrera Arte y Diseño Digital en la
        Universidad del Salvador. Me fascina todo el mundo de la programación,
        mas concretamente el área que se conecta con mi carrera, que es la de
        <span className="font-bold"> Desarrollo Web</span>.
      </p>
    </div>
  );
}
