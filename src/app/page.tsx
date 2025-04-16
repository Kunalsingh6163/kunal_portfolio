import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Technologies from "./components/technology/Technologies";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects"
import Contacts from "./components/contact/Contacts";

export default function Home() {
  return (
    <div className="relative h-full w-full bg-black overflow-x-hidden text-neutral-300 slection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container mx-auto px-8"></div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}
