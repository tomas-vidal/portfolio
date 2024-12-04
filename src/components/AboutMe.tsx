import InfoIcon from "../icons/InfoIcon";

function AboutMe() {
  return (
    <section>
      <h2 className="flex items-center mt-14 mb-4 gap-3 text-2xl font-bold">
        Sobre mí
        <InfoIcon className="size-8"></InfoIcon>
      </h2>
      <p className="text-stone-300 text-pretty">
        Actualmente me encuentro cursando el último año de la carrera Arte y
        Diseño Digital en la Universidad del Salvador. Realizo desde trabajos de
        diseño pero me especializo en el desarrollo de
        <span className="font-bold text-yellow-400"> Aplicaciones Web</span>.
      </p>
    </section>
  );
}

export default AboutMe;
