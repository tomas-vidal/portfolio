import Projects from "./components/Projects";
import Education from "./components/Education";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <main className="dark:bg-stone-950 dark:text-white absolute top-0 z-[-2] w-screen min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]">
      <div className="w-1/2 mx-auto">
        <Profile></Profile>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
