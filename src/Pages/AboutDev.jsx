import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const AboutDev = () => {
  const image = {
    url: "https://i.ibb.co/W0M9txx/Whats-App-Image-2024-11-19-at-07-07-30.jpg",
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex justify-center items-center py-10 px-4">
      <div
        className="relative max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-purple-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-indigo-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>

        <div className="p-10 sm:p-12">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative inline-block mb-6">
              <img
                src={image.url}
                alt="Sabuj Chowdhury"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover border-8 border-pink-500 shadow-lg transform hover:scale-110 transition-transform duration-300 animate__animated animate__rubberBand"
              />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2 animate__animated animate__fadeInDown">
              Sabuj Chowdhury
            </h1>
            <p className="text-lg text-gray-600 animate__animated animate__fadeInUp">
              Student at Burdwan University | ICCR Scholarship Holder
            </p>
          </div>

          <div
            className="mt-10 text-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-bold text-pink-500 mb-4 animate__animated animate__pulse animate__infinite">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am a passionate developer currently pursuing my studies at
              Burdwan University under the ICCR Scholarship. I love creating
              innovative projects, exploring cutting-edge technologies, and
              continuously improving my skills to build impactful solutions.
            </p>
          </div>

          <div className="mt-10" data-aos="fade-left" data-aos-delay="400">
            <h2 className="text-3xl font-bold text-indigo-500 text-center mb-6">
              Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4 animate__animated animate__zoomIn">
              {[
                "React",
                "React Packages",
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "DaisyUI",
                "Java",
                "C",
                "C++",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">
              Projects
            </h2>
            <ul className="space-y-6">
              {[
                {
                  name: "Dream 11 React",
                  link: "https://gentle-pudding-900a2a.netlify.app/",
                },
                {
                  name: "Mobile Gadget",
                  link: "https://fancy-kelpie-36dfb6.netlify.app/",
                },
                {
                  name: "Donation DOM",
                  link: "https://sabuj-chowdhury.github.io/Donation-DOM/",
                },
                {
                  name: "Gym Responsive Website",
                  link: "https://sabuj-chowdhury.github.io/gym-responsive-website/",
                },
              ].map((project) => (
                <li
                  key={project.name}
                  className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow animate__animated animate__fadeIn"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-white"
                  >
                    <span className="text-lg font-medium">{project.name}</span>
                    <span className="text-sm italic underline">View Live</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
