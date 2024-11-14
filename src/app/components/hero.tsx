export default function Hero() {
    return (
      <section className="flex flex-col lg:flex-row w-full items-center justify-center text-center lg:text-left h-screen bg-orange-50 px-4">
        <img
          src="/DIANA (2).JPG"
          alt="Profile picture"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 shadow-lg object-cover rounded-full mb-8 lg:mb-0 lg:mr-10"
        />
        <div className="flex flex-col items-center lg:items-start max-w-full lg:w-[550px]">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-serif text-blue-800">Hi,</h2>
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-serif text-blue-800">
            I am <span className="text-orange-500">Diana</span> Fitria Wati
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black font-serif">Front-End Developer</p>
          <a href="#projects" className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 font-serif">
            View My Work
          </a>
        </div>
      </section>
    );
  }
  