import { useState } from "react";
import { Home } from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faProjectDiagram,
  faPhone,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // State to toggle the navigation menu
  const [active, setActive] = useState(false);

  // Function to handle menu toggle
  function toggleMenu() {
    setActive(!active);
  }

  return (
    <div className="body">
      {/* Navbar container */}
      <div className="md:flex m-0 p-3">
        {/* Logo Section */}
        <div className="text-6xl font-medium flex-1 p-3 text-blue-900 font-serif">
          <h1>S</h1>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div
          className="md:hidden text-4xl -mt-16 text-white float-right justify-end cursor-pointer flex-1 text-end pr-6 pt-1"
          onClick={toggleMenu}
        >
          &#9776;
        </div>

        {/* Navigation Menu */}
        <div className={`${active ? "block" : "hidden"} md:block`}>
          <ol className="list-none float-end text-center text-4xl md:py-5 md:px-0 px-32">
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
      </div>

      {/* Home Component */}
      <Home />
    </div>
  );
}

export default Navbar;
