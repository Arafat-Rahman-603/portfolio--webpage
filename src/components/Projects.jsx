import React from "react";
import Footer from "./Footer";
import Navber from "./Navber";

const projects = [
  {
    title: "Password Manager App",
    tech: "React.js, Node.js, MongoDB, Tailwind CSS, Express.js",
    img: "1.png",
    github: "#",
  },
  {
    title: "E-commerce Store",
    tech: "React.js, Redux, Redux-toolkit, Bootstrap CSS",
    img: "3.png",
    github: "#",
  },
  {
    title: "Social Media ",
    tech: "React.js, Tailwind CSS",
    img: "2.png",
    github: "#",
  },
];

export default function Projects() {
  return (
    <>
      <Navber />
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on. They showcase my
            skills in building responsive, interactive, and modern web
            applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 max-w-6xl mx-auto px-4 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg w-100 h-auto shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.tech}</p>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-700 hover:text-gray-500 font-medium transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-lg w-100 h-auto shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="p-6">
              <center>
                <h2 className="text-2xl font-semibold mb-10 mt-10 text-gray-800">
                  "Visit my GitHub account to view more projects and their
                  code."
                </h2>
                <a
                  href="https://github.com/Arafat-Rahman-603"
                  target="_blank"
                  className="text-gray-200 text-2xl hover:text-gray-500 hover:bg-blue-200 bg-blue-500 px-4 py-2 rounded-full font-medium transition "
                >
                  GitHub
                </a>
              </center>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
