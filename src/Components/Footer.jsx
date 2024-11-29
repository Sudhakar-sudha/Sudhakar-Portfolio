import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faProjectDiagram,
  faPhone,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin ,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <div>
        <div className='bg-black'>
            <div className='text-6xl flex justify-center md:justify-center space-x-6 font-bold text-blue-500 glow-effect mb-10'>
                <h1>Get in Touch</h1>
            </div>
    {/* Social Icons */}
<div className="flex justify-center md:justify-center space-x-6">
<a
  href="https://www.instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
  style={{
    textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
  }}
>
  <FontAwesomeIcon icon={faInstagram} />
</a>

{/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/sudhakar89/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
  style={{
    textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
  }}
>
  <FontAwesomeIcon icon={faLinkedin} />
</a>

{/* GitHub */}
<a
  href="https://github.com/Sudhakar-sudha/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
  style={{
    textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
  }}
>
  <FontAwesomeIcon icon={faGithub} />
</a>

{/* Email */}
<a
  href="mailto:sudhakarsudha8672@gmail.com"
  target="_blank"
  rel="noopener noreferrer" 
  className="text-white text-3xl bg-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(0,112,255,0.7)]"
  style={{
    textShadow: "0 0 15px rgba(0, 112, 255, 0.8), 0 0 25px rgba(0, 112, 255, 0.6)",
  }}
>
  <FontAwesomeIcon icon={faEnvelope} />
</a>

</div>


<div className='bg-black flex justify-center md:justify-center space-x-6 md:pb-0 pb-5'>
<ol className="list-none float-end text-center text-4xl md:py-5 md:px-0 px-28 bg-black">
            {/* Navigation Items */}
            {[
              { icon: faHome, text: "Home", width: "5rem" },
              { icon: faUser, text: "About Us", width: "6rem" },
              { icon: faGraduationCap, text: "Education", width: "7rem" },
              { icon: faCogs, text: "Skills", width: "4rem" },
              { icon: faProjectDiagram, text: "Projects", width: "6rem" },
              { icon: faPhone, text: "Contact Us", width: "7rem" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex-1 md:inline-block p-3 md:mr-4 text-center text-xl font-bold text-white relative group"
              >
                <a
                  href="#"
                  className="group-hover:text-blue-400 transition duration-300"
                >
                  <FontAwesomeIcon icon={item.icon} /> {item.text}
                </a>
                <span
                  className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 h-0.5 bg-blue-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}
                  style={{ width: item.width }}
                ></span>
              </li>
            ))}
          </ol>
          </div>
          <div className='bg-blue-500 flex justify-center md:justify-center space-x-6 text-white text-xl p-1'>
<h1>Copyright @2024 .Designed by Sudhakar</h1>
          </div>
        </div>
    </div>
  )
}
