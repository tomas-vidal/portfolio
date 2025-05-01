import { useState, useEffect } from "react";
import Head from "next/head";
import DarkModeButton from "../components/DarkModeButton";
import Header from "../components/Header";
import CardProject from "../components/CardProject";
import portfolioWorks from "../api/data";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(undefined);

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("darkMode")) || false;
    setDarkMode(value);
  }, []);

  const useDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tomás Vidal Portfolio</title>
        <meta
          name="description"
          content="Portfolio personal de Tomás Vidal, desarrollador web."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="portfolio, Tomás Vidal, desarrollador, proyectos web"
        />
        <meta property="og:title" content="Tomás Vidal Portfolio" />
        <meta property="og:description" content="" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="max-w-screen mx-auto h-screen font-inter text-stone-900 overflow-y-scroll snap-y snap-mandatory scroll-smooth dark:bg-stone-900">
        <header className="h-screen md:px-4 py-20 px-20 flex flex-col items-center justify-center gap-6 snap-start overflow-hidden">
          <DarkModeButton
            useDarkMode={useDarkMode}
            darkMode={darkMode}
            aria-label="Activar/desactivar modo oscuro"
          />
          <div>
            <Header />
          </div>

          <section aria-labelledby="projects-section">
            <h2 id="projects-section" className="sr-only">
              Proyectos
            </h2>
            <div className="grid grid-cols-3 lg:gap-2 gap-5 px-12 lg:px-0">
              {portfolioWorks.map((work, idx) => (
                <CardProject
                  key={idx}
                  title={work.title}
                  img={work.img}
                  technologies={work.technologies}
                  description={work.description}
                  link={work.link}
                />
              ))}
            </div>
          </section>
        </header>
        <section className="min-h-screen mt-14 flex flex-col justify-around snap-start pt-10">
          <div className="px-16 sm:px-10 pt-4 overflow-y-auto">
            <Experience />
            <Projects />
          </div>
          <footer className="mt-10 mb-4 w-1/2 mx-auto lg:w-full md:px-10">
            <Footer />
          </footer>
        </section>
      </main>
    </div>
  );
}
