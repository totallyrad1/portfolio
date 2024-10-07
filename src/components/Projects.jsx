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

const Projects = () => {

    const webserv_desc = "Webserv is a project that involves building a fully functional HTTP web server from scratch in C++. It handles HTTP requests and responses, manages client connections, supports concurrency, and complies with key HTTP features like GET, POST, and chunked transfer encoding. The project focuses on socket programming, I/O multiplexing, and server optimization, providing a hands-on experience in creating a high-performance web server.";
    const minishell_desc = "Minishell is a lightweight UNIX shell that interprets and executes commands, supporting features like &&, || operators, input/output redirection, and pipes. It manages environment variables and signal handling, while using an abstract syntax tree (AST) to efficiently parse and execute commands.";
    const cub3d_desc = "cub3D is a 3D game engine project inspired by Wolfenstein 3D, built using ray-casting techniques. It allows for rendering 3D environments from 2D maps, handling textures, player movement, and basic collision detection. The project focuses on low-level graphics programming and provides an introduction to building game engines from scratch.";
    const chat_app_desc = "The Chat App is a real-time messaging platform built from the ground up using modern web technologies. It allows users to communicate instantly through Socket.io, which facilitates real-time notifications and live updates. The frontend is implemented with React and styled using React-Bootstrap, offering a sleek and responsive user experience. On the backend, Express.js and Node.js handle routing, API calls, and server-side logic, ensuring efficient data processing. MongoDB is used as the database to store user information, messages, and chat history. This project emphasizes real-time communication, efficient data handling, and seamless user interaction.";


    return (
        <div className="text-center overflow-hidden w-full">
            <h3 className="py-7 text-4xl font-extrabold text-white animate-wiggle animate-infinite animate-duration-[4000ms]">
                Projects
            </h3>
            <div className="flex justify-center w-full">
                <div className="projects-div grid lpl:grid-cols-3 mdl:grid-cols-2 sm:grid-cols-1 gap-10">
                    <ProjectCard name={"Webserv"} githublink={"https://github.com/totallyrad1/Webserv"} description={webserv_desc} projectimg={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*age3Dgxl8sz6LZgDIwOSNQ.png"} icons={[cplus, htmllogo, http, makefile]} />
                    <ProjectCard name={"Chat-App"} githublink={"https://github.com/totallyrad1/chat-app"} description={chat_app_desc} projectimg={"https://i.imgur.com/gjOniYb.png"} icons={[reactlogo, socketio, css, javascript, nodejs, mongodb]}/>
                    <ProjectCard name={"MiniShell"} githublink={"https://github.com/totallyrad1/Minishell"} description={minishell_desc} projectimg={"https://miro.medium.com/v2/da:true/resize:fit:1200/0*NsEzq9V2YGD6ocBH"} icons={[clang, makefile]} />
                    <ProjectCard name={"Cub3d"} githublink={"https://github.com/totallyrad1/cub3D"} description={cub3d_desc} projectimg={"https://miro.medium.com/v2/resize:fit:1200/1*25dBmsNUQps5geRZZZy-uQ.gif"} icons={[clang, makefile]}/>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;