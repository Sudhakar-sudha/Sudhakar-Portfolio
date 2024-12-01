import React from 'react';
import '../App.css';
import myImage from '/assets/about.png';

const Aboutus = () => {
  const handleOpenPdf = () => {
    // Replace with the URL or path to your PDF file
    const pdfUrl = "../assets/Resume.pdf";
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };

  return (
    <div>
      <div className="md:flex bg-black">
        {/* Mobile About Us Heading */}
        <div className="md:hidden flex -mt-1 ml-7">
          <h1 className="inline-flex text-4xl text-white font-bold border-b-4 pb-3 border-blue-500 glow-effect mt-9 mb-9">
            About
            <p className="ml-3">us</p>
          </h1>
        </div>

        {/* Image Section */}
        <div className="md:flex-1">
          <div className="inline-block">
            <img
              src={myImage}
              alt="My Profile"
              className="md:w-4/4 md:h-2/4 w-4/5 h-4/5 ml-11 mb-9 mt-7 md:mt-24 rounded-full border-2 border-blue-600 bg-black custom-dark-blue-shadow"
            />
          </div>
        </div>

        {/* About Us Content Section */}
        <div className="md:flex-1 md:mt-14 md:mr-28 p-4">
          {/* Desktop About Us Heading */}
          <div className="hidden md:flex">
            <h1 className="inline-flex text-4xl text-white font-bold border-b-4 pb-3 border-blue-500 mb-5 glow-effect">
              About
              <p className="ml-3">us</p>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-white">
            <span className="pl-16"></span>I am Sudhakar from Sivakasi. I completed my schooling at SHNV Matriculation Higher Secondary School with 89% in my higher studies. Currently, I am in my final semester of B.Sc. Computer Science at Ayya Nadar Janaki Ammal College, Sivakasi. I am passionate about learning new skills and have completed diploma courses in computer applications, hardware services, and desktop applications, as well as certifications in Python, NPTEL Soft Skills Development, and Data Structures and Algorithms. In school, I was an active football player, winning zonal-level matches and becoming a district-level runner-up. I am also a member of the NSS in college. My hobbies include watching movies and playing football. I am fluent in Tamil and have intermediate proficiency in English. Currently, I am studying full-stack web development (MERN stack) and React Native app development.
          </p>

          {/* Resume Button */}
          <button className="btn" onClick={handleOpenPdf}>
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
