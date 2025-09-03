import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main className="px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16">
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Hi, I'm Arafat Rahman
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-600">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            I build responsive and interactive web applications
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            using HTML, CSS, JavaScript, and React.js.
          </p>
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
            <Link to="/projects"> View Projects</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="pic.png"
            alt="Arafat Rahman"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-indigo-500"
          />
        </div>
      </main>
      <section className="flex justify-center  px-4 py-8">
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 w-max max-w-4xl ">
          {["HTML", "CSS", "JavaScript", "React.js", "Git"].map((skill) => (
            <button
              key={skill}
              className="px-6 py-3 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white rounded-xl shadow-lg 
                   hover:scale-105 hover:shadow-2xl transform transition duration-300 ease-in-out"
            >
              {skill}
            </button>
          ))}
        </section>
      </section>
      <section className="px-6 py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">About Me</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Hello! I'm <span className="font-semibold">Arafat Rahman</span>, a beginner frontend developer
        from Bangladesh. I love turning ideas into functional, beautiful websites
        and web applications. With experience in <strong>HTML, CSS, JavaScript, and React.js</strong>,
        I focus on building responsive and user-friendly interfaces.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Skills & Tools</h2>
      <ul className="grid grid-cols-2 gap-3 text-gray-700">
        <li className="flex items-center gap-2 bg-white shadow-sm p-2 rounded-lg hover:shadow-md transition">⚡ HTML, CSS, JS</li>
        <li className="flex items-center gap-2 bg-white shadow-sm p-2 rounded-lg hover:shadow-md transition">⚛️ React, Tailwind, Bootstrap</li>
        <li className="flex items-center gap-2 bg-white shadow-sm p-2 rounded-lg hover:shadow-md transition">🛠 Git, GitHub</li>
        <li className="flex items-center gap-2 bg-white shadow-sm p-2 rounded-lg hover:shadow-md transition">🎨 Shadcn, Daisy UI</li>
        <li className="flex items-center gap-2 bg-white shadow-sm p-2 rounded-lg hover:shadow-md transition">📱 Responsive Design</li>
      </ul>
    </div>
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">Education</h1>
      <p className="text-lg text-gray-700">📖 SSC (2025), Science Group</p>
      <p className="text-lg text-gray-700 mb-8">Bangladesh</p>

      <blockquote className="mt-6 p-4 bg-white rounded-xl shadow-md italic border-l-4 border-indigo-600 text-gray-800">
        I enjoy learning new technologies and continuously 
        improving my development skills to create modern web experiences.
      </blockquote>
    </div>
  </div>
</section>

    </>
  );
}
