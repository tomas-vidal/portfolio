import Head from "next/head";
import DarkModeButton from "./components/DarkModeButton";
import Header from "./components/Header";
import CardProject from "./components/CardProject";
import portfolioWorks from "./api/data";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const useDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <head className="">
        <title>Tomás Vidal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <main className="max-w-screen mx-auto h-screen font-inter text-stone-900 overflow-y-scroll snap-mandatory snap-y scroll-smooth dark:bg-stone-900">
        <header className="md:h-screen h-[100px] py-20 px-20 flex flex-col items-center justify-center gap-6 snap-center overflow-hidden">
          <DarkModeButton useDarkMode={useDarkMode} darkMode={darkMode} />
          <div className="">
            <Header />
          </div>
          <div className="grid grid-cols-3 gap-5 px-12 mdh:h-3/4">
            {portfolioWorks.map((work, idx) => (
              <CardProject
                title={work.title}
                img={work.img}
                technologies={work.technologies}
                description={work.description}
                link={work.link}
                key={idx}
              />
            ))}
          </div>
        </header>
        <div className="h-screen mt-14 flex flex-col justify-around snap-center">
          <div className="">
            <Experience />
            <Projects />
          </div>
          <footer className="w-1/2 mx-auto">
            <Footer />
          </footer>
        </div>
      </main>
    </div>
  );
}
