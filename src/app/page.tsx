import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/project";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
