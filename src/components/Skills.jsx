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
import Reveal from "./Reveal";

const Skills = () => {
    const techStack = [
        {stackname:"Frontend", techs:["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"]},
        {stackname:"Backend", techs:["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]},
        {stackname:"Languages", techs:["C", "C++", "Python", "JavaScript ES6", "Typescript"]},
        {stackname:"DevOps", techs:["Docker", "Git", "Linux", "Nginx"]},
        {stackname:"Tools", techs:["VS Code", "Postman", "Figma", "GitHub", "Vercel"]},

    ]
  
    return (
      <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Tech Stack</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((u , index) => (
            <div key={index} className="bg-zinc-950 border-zinc-800 p-4 rounded-xl">
              <h1>
                <div className="text-xl text-white pb-4">{u.stackname}</div>
              </h1>
              <div>
                <div className="flex flex-wrap gap-2">
                  {u.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-sm hover:bg-zinc-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
 
export default Skills;