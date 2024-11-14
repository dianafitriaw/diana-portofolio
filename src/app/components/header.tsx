export default function Header() {
    return (
      <header className="bg-orange-50 text-blue-800 py-4 shadow-lg">
        <div className="container mx-auto flex justify-center items-center md: text-2xl font-bold font-serif">
          <nav>
            <a href="#about" className="mx-2 hover:text-gray-300">About</a>
            <a href="#projects" className="mx-2 hover:text-gray-300">Projects</a>
            <a href="#contact" className="mx-2 hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>
    )
  }
  