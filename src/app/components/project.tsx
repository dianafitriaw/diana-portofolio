export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-orange-50 font-serif">
        <h2 className="text-3xl font-bold text-center mb-4 text-orange-500">Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold text-blue-800">Job Hunter</h3>
            <p className="mt-2 text-gray-600 text-justify">
            Job Hunter is a website that provides a platform for job seekers to find job vacancies. The site 
            allows users to search for jobs and filter the job listings based on specific criteria such as 
            location, job type, and salary range. With a user-friendly interface and responsive design, Job 
            Hunter offers an easy-to-use experience for job seekers to find opportunities that match their 
            needs. 
            Tech stack: React, Tailwind CSS, Axios. 
            </p>
            <a href="https://deploy-jobhunter.vercel.app/FindJobs" className="text-blue-500 mt-4 inline-block">View Project</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold text-blue-800">Pokedex</h3>
            <p className="mt-2 text-gray-600 text-justify">
            My Pokemon Dex is a collaborative project designed to showcase detailed information about 
            pokemon species from the PokeAPI. Built using React, Axios and Tailwind CSS, this app 
            provides a visually appcaling and interactive experience for Pokemon enthusiasts. 
            Tech stack: React, Tailwind, Axios, Json Server.  
            </p>
            <a href="http://localhost:5173/pokemon" className="text-blue-500 mt-4 inline-block">View Project</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold text-blue-800">MedsStore</h3>
            <p className="mt-2 text-gray-600 text-justify">
            MedsStore is a health technology platform that sells medicines, vitamins and other health 
            necessities. 
            Tech stack: React, Tailwind, Axios 
            </p>
            <a href="https://medsstore-56a13.web.app/" className="text-blue-500 mt-4 inline-block">View Project</a>
          </div>
        </div>
      </section>
    )
  }
  