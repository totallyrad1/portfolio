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
import pongpong from "../assets/ping-pong.gif"


const Projects = () => {
    const projects = [
      {
        name: "Custom HTTP Server",
        description: [
          "Built a lightweight HTTP server in C++ from scratch, handling HTTP/1.1 requests, CGI execution, and dynamic routing. Implemented advanced features like chunked transfer encoding, persistent connections, andcustom error handling while adhering to RFC standards.",
        ],
        projectimg: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*age3Dgxl8sz6LZgDIwOSNQ.png",
        githublink: "https://github.com/totallyrad1/Custom-HTTP-Server",
        technologies: ["C++"],
      },
      {
          name: "PingPong Mania",
          description: [
          "Developed a secure, responsive web application with user management, authentication (JWT, 2FA), and a dynamic dashboard using Next.js, Tailwind CSS, Django, Django Channels, PostgreSQL, and Redis cache. Ensured real-time communication and enhanced security through advanced authentication methods.",
          ],
          projectimg: pongpong,
          githublink: "",
          technologies: ["Next.js", "Django", "Docker", "Redis", "Tailwind CSS", "PostgreSQL"],
      },
      {
        name: "Real-Time Chat Application",
        description: [
        "Developed a secure, responsive web application with user management, authentication (JWT, 2FA), and a dynamic dashboard using Next.js, Tailwind CSS, Django, Django Channels, PostgreSQL, and Redis cache. Ensured real-time communication and enhanced security through advanced authentication methods.",
        ],
        projectimg: "https://i.imgur.com/gjOniYb.png",
        githublink: "https://github.com/totallyrad1/Real-Time-Chat-Application",
        technologies: ["React.js", "Node.js", "Express.Js", "Tailwind CSS", "MariaDB"],
      },
      {
        name: "Dockerized Web Services",
        description: [
          "Designed and deployed a Docker-based system using multiple containers (NGINX, WordPress, MariaDB, Redis cache) while ensuring security, scalability, and efficient service management through Docker Compose.",
        ],
        projectimg: "https://www.pedroalonso.net/static/b3ec2afb11130f982251a7282ede99f2/dac54/docker-thumb.jpg",
        githublink: "https://github.com/totallyrad1/Dockerized-Web-Services",
        technologies: ["Docker", "Docker Compose", "Shell Scripting", "Redis", "MariaDB", "WordPress"],
      },
      {
        name: "Advanced Shell",
        description: [
          "Created a custom Unix shell in C, supporting advanced features including command chaining (`&&`, `||`), sub-shell execution with parentheses, signal handling, environment variables, and I/O redirection.",
        ],
        projectimg: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*NsEzq9V2YGD6ocBH",
        githublink: "https://github.com/totallyrad1/Advanced-Shell",
        technologies: ["C"],
      },
      {
        name: "AI-Powered Tic-Tac-Toe",
        description: [
          "Developed a Tic-Tac-Toe game with an AI opponent using the Monte Carlo Tree Search (MCTS) algorithm. Implemented efficient decision-making, random simulations, and intelligent move evaluation for adaptive and competitive gameplay.",
        ],
        projectimg: "https://i.ytimg.com/vi/rY25jCtSidM/maxresdefault.jpg",
        githublink: "https://github.com/totallyrad1/MCTS_tic-tac-toe",
        technologies: ["C++"],
      },
    ]

    return (
        <div className="bg-black min-h-screen py-12">
            <h3 className="text-4xl font-extrabold text-white animate-wiggle animate-infinite animate-duration-[4000ms] text-center pb-10">
                Projects
            </h3>
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>);
}
 
export default Projects;