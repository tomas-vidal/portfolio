import EducationItem from "./components/EducationItem";
import Projects from "./components/Projects";
import ContactIcon from "./icons/ContactIcon";
import InfoIcon from "./icons/InfoIcon";
import { education } from "./data/education";
import { educationType } from "./types/education";

function App() {
  return (
    <main className="dark:bg-stone-950 dark:text-white absolute top-0 z-[-2] w-screen min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
      <div className="w-1/2 mx-auto">
        <section className="text-center pt-20">
          <img
            className="w-52 h-52 object-cover mx-auto rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13HWX0ZMRmDqi9M9K84i0ZLXY4k3A1FtpnrnbzELEMw&s"
          ></img>
          <h1 className="text-6xl uppercase font-bold mt-10">Tomas Vidal</h1>
          <h3 className="text-stone-300 font-medium mt-2 text-md">
            Desarrollador Web Full Stack & Diseñador Digital
          </h3>
          <hr className=" mx-auto h-px my-8 border-0 dark:bg-stone-700"></hr>
        </section>
        <div>
          <div className="flex items-center mb-4 gap-2">
            <h2 className="text-3xl font-bold">About me</h2>
            <InfoIcon className="w-7 pt-1"></InfoIcon>
          </div>
          <p className="text-stone-300 text-pretty">
            Actualmente me encuentro cursando el último año de la carrera Arte y
            Diseño Digital en la Universidad del Salvador. Realizo desde
            trabajos de diseño pero me especializo en el desarrollo de
            <span className="font-bold text-yellow-400"> Aplicaciones Web</span>
            .
          </p>
        </div>
        <Projects></Projects>
        <section className="mt-10">
          <h2 className="flex items-center mb-10 gap-2 text-3xl font-bold">
            Estudios
            <ContactIcon className="text-4xl"></ContactIcon>
          </h2>
          <ol className="relative border-s border-gray-700">
            {education.map((item: educationType) => {
              return (
                <EducationItem
                  name={item.name}
                  university={item.university}
                  date={item.date}
                  description={item.description}
                ></EducationItem>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}

export default App;
