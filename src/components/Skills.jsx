import cplus from "../assets/cplusplus.png"
import makefile from "../assets/makefile.svg"
import ProjectCard from "./ProjectCard";
import clang from "../assets/clang1.png"
import htmllogo from "../assets/html.png"
import http from "../assets/http.svg"
import css from "../assets/css.png"
import python from "../assets/python.png"
import javascript from "../assets/javascript.webp"
import reactlogo from "../assets/React.webp"
import git from "../assets/Git.png"
import tailwind from "../assets/Tailwind.png"
import linux from "../assets/linux.png"
import bash from "../assets/shell.png"
import docker from "../assets/docker.webp"
import django from "../assets/django.png"
import nodejs from "../assets/nodejs.png"
import mongodb from "../assets/mongodb.png"
import socketio from "../assets/socketio.png"

const Skills = () => {
    
    const iconsArray = [cplus, clang, git, makefile, python, htmllogo, css, javascript, reactlogo, tailwind, linux,socketio, bash, django, docker, nodejs, mongodb];
    
    return (
        <div className="text-center overflow-hidden">
            <h3 className="text-4xl font-extrabold text-black animate-wiggle animate-infinite animate-duration-[4000ms]">
                Skills
            </h3>
            <div className="flex py-12 justify-center w-full">
                <div className="projects-div grid lpl:grid-cols-9 mdl:grid-cols-6 sm:grid-cols-3 smallest:grid-cols-3 gap-10">
                    {iconsArray && iconsArray.map((icon, index)=>{
                        return  <span className="text-4xl mx-4" key={index}>
                                 <img src={icon} className="marquee-element transform hover:scale-125 transition-transform duration-300"/>
                                </span>
                    })}
                </div>
            </div>
            <div class="black-curve">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}
 
export default Skills;