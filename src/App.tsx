import Info from "./icons/Info";

function App() {
  return (
    <main className="dark:bg-stone-900 min-h-screen dark:text-white">
      <div className="w-[780px] mx-auto">
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
            <Info className="w-7 pt-1"></Info>
          </div>
          <p className="text-stone-300 text-pretty">
            Actualmente me encuentro cursando el último año de la carrera Arte y
            Diseño Digital en la Universidad del Salvador. Realizo desde
            trabajos de diseño pero me especializo en el desarrollo de
            <span className="font-bold text-yellow-400"> Aplicaciones Web</span>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
