import Projects from "./components/Projects";
import ContactIcon from "./icons/ContactIcon";
import InfoIcon from "./icons/InfoIcon";

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
            <li className="mb-14 ms-4 grid grid-cols-3 gap-10">
              <div>
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-yellow-400 dark:bg-yellow-400"></div>
                <h3 className="text-md font-semibold dark:text-yellow-400">
                  Licenciatura en Arte y Diseño Digital
                </h3>
                <h2 className=" font-bold text-xl">Universidad del Salvador</h2>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021 - 2024
                </time>
              </div>
              <p className="mb-4 font-normal text-gray-500 dark:text-stone-600 col-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                placeat, facere nemo officia repellendus consectetur nisi quo
                aperiam laborum tenetur?
              </p>
            </li>
            <li className="mb-10 ms-4 grid grid-cols-3 gap-10">
              <div>
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-yellow-400 dark:bg-yellow-400"></div>
                <h3 className="text-md font-semibold dark:text-yellow-400">
                  Curso Edición de Audio
                </h3>
                <h2 className=" font-bold text-xl">
                  Universidad Ténica Nacional
                </h2>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021
                </time>
              </div>
              <p className="mb-4 font-normal text-gray-500 dark:text-stone-600 col-span-2 text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo molestiae omnis labore aliquid commodi dignissimos
                hic, sit dolore ad reprehenderit facere qui necessitatibus ipsam
                pariatur minus laboriosam porro quia quisquam.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

export default App;
