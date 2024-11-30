import React from 'react'
import { Footer } from './Footer'
import  project1 from '/assets/project1.png'
import  project2 from '/assets/project2.png'
import  project3 from '/assets/project3.png'
import  project4 from '/assets/project4.png'
export const Projects = () => {
  return (
    <div>

          <div className='bg-black'>
        
          <div className="projects">
          <h1 className="headingprojects glow-effect ">Projects</h1>
          </div>

          <div className="projectwrapper">

                <div className='card'>
                  <img src={project1}/>
                  <div className='info'>
                    <h1>Project1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates voluptas, quae cupiditate qui tenetur consectetur recusandae exercitationem autem. Excepturi velit voluptate doloremque asperiores. Neque natus aliquid qui omnis tempora?</p>
                    <a href='#' className="cardbtn">
                      View Project
                    </a>
                  </div>
                </div>

                <div className='card'>
                  <img src={project2}/>
                  <div className='info'>
                    <h1>Project2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates voluptas, quae cupiditate qui tenetur consectetur recusandae exercitationem autem. Excepturi velit voluptate doloremque asperiores. Neque natus aliquid qui omnis tempora?</p>
                    <a href='#' className="cardbtn">
                      View Project
                    </a>
                  </div>
                </div>
          </div>


          <div className="projectwrapper">
                <div className='card'>
                  <img src={project3}/>
                  <div className='info'>
                    <h1>Project3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates voluptas, quae cupiditate qui tenetur consectetur recusandae exercitationem autem. Excepturi velit voluptate doloremque asperiores. Neque natus aliquid qui omnis tempora?</p>
                    <a href='#' className="cardbtn">
                      View Project
                    </a>
                  </div>
                </div>

                <div className='card'>
                  <img src={project4}/>
                  <div className='info'>
                    <h1>Project4</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptates voluptas, quae cupiditate qui tenetur consectetur recusandae exercitationem autem. Excepturi velit voluptate doloremque asperiores. Neque natus aliquid qui omnis tempora?</p>
                    <a href='#' className="cardbtn">
                      View Project
                    </a>
                  </div>
                </div>
          </div>

    
          </div>
    </div>
  )
}
