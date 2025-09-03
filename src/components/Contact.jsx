import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navber from "./Navber";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Navber />
      <section id="contact" className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, or just want to say hello? Feel free to
            reach out! I’m always open to discussing new opportunities, creative
            ideas, or collaborations.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <FaEnvelope className="text-indigo-600 text-2xl mx-auto mb-3" />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:arafat.rahman.6003@gmail.com"
              className="text-gray-600 hover:text-indigo-600"
            >
              arafat.rahman.6003@gmail.com
            </a>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <FaPhoneAlt className="text-indigo-600 text-2xl mx-auto mb-3" />
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+880 1609 611 399</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg">
            <FaMapMarkerAlt className="text-indigo-600 text-2xl mx-auto mb-3" />
            <p className="font-semibold">Location</p>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>
        <center>
          <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
            <q>
              Thank you for visiting my website. I hope to stay on your mind
              when you have a project or opportunity that fits my skills.
            </q>
          </blockquote>
        </center>
      </section>
      <Footer />
    </>
  );
}
