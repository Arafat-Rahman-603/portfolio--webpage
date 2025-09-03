import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-indigo-500 mb-4">Arafat Rahman</h1>
          <p className="text-gray-400">
            Frontend Developer passionate about building responsive and interactive web applications using React.js, Tailwind CSS, and modern web technologies.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 underline">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link to="/Projects" className="hover:text-indigo-400 transition">Projects</Link></li>
            <li><Link to="/Contact" className="hover:text-indigo-400 transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 underline">Contact</h2>
          <p className="flex items-center gap-2 mb-2">
            <a href="mailto:arafat.rahman.6003@gmail.com" className="hover:text-indigo-400 transition gap-2 flex items-center"> <FaEnvelope />  arafat.rahman.6003@gmail.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Arafat-Rahman-603" target="_blank" className="hover:text-indigo-400 transition"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-indigo-400 transition"><FaLinkedin size={24} /></a>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; 2025 Arafat Rahman. All rights reserved.
      </div>
    </footer>
  );
}
