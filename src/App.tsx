import GithubIcon from "./icons/GithubIcon";
import InfoIcon from "./icons/InfoIcon";
import PreviewIcon from "./icons/PreviewIcon";
import ProjectIcon from "./icons/ProjectIcon";
import RedirectIcon from "./icons/RedirectIcon";

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
        <div>
          <div className="mt-10 flex items-center mb-6   gap-2">
            <h2 className="text-3xl font-bold">Projects</h2>
            <ProjectIcon className="text-2xl"></ProjectIcon>
          </div>
          <div>
            <div className="flex gap-7">
              <img
                className="object-cover w-80 h-50 rounded-sm"
                src="https://i.pinimg.com/originals/3a/31/dc/3a31dc8ba646dc1797829617d739d538.jpg"
              ></img>
              <div>
                <div className="flex gap-3 items-center cursor-pointer  mb-2 mr-auto">
                  <h5 className="text-4xl font-bold ">Budget APP</h5>
                  <RedirectIcon className="w-6 "></RedirectIcon>
                </div>
                <p>
                  Simple APP to track expenses and what is people’s live cost at
                  their respective cities.
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="border rounded-sm py-2 px-4 flex items-center gap-1">
                    <GithubIcon className="text-xl"></GithubIcon>
                    Github
                  </button>
                  <button className="border rounded-sm py-2 px-4 flex items-center gap-1">
                    <PreviewIcon className="text-xl"></PreviewIcon>
                    Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
