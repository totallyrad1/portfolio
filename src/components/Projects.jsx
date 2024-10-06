import cplus from "../assets/cplusplus.png"
import makefile from "../assets/makefile.svg"
import ProjectCard from "./ProjectCard";
import clang from "../assets/clang1.png"
import htmllogo from "../assets/html.png"
import http from "../assets/http.svg"

const Projects = () => {

    const webserv_desc = "Webserv is a project that involves building a fully functional HTTP web server from scratch in C++. It handles HTTP requests and responses, manages client connections, supports concurrency, and complies with key HTTP features like GET, POST, and chunked transfer encoding. The project focuses on socket programming, I/O multiplexing, and server optimization, providing a hands-on experience in creating a high-performance web server.";
    const minishell_desc = "Minishell is a lightweight UNIX shell that interprets and executes commands, supporting features like &&, || operators, input/output redirection, and pipes. It manages environment variables and signal handling, while using an abstract syntax tree (AST) to efficiently parse and execute commands.";
    const cub3d_desc = "cub3D is a 3D game engine project inspired by Wolfenstein 3D, built using ray-casting techniques. It allows for rendering 3D environments from 2D maps, handling textures, player movement, and basic collision detection. The project focuses on low-level graphics programming and provides an introduction to building game engines from scratch.";

    return (
        <div className="text-center">
            <h3 className="pt-12 text-5xl font-extrabold dark:text-white">
                Projects
            </h3>
            <div className="flex justify-center w-full">
                <div className="projects-div grid lpl:grid-cols-3 mdl:grid-cols-2 sm:grid-cols-1 gap-10">
                    <ProjectCard name={"Webserv"} githublink={"https://github.com/totallyrad1/Webserv"} description={webserv_desc} projectimg={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*age3Dgxl8sz6LZgDIwOSNQ.png"} icons={[cplus, htmllogo, http, makefile]} />
                    <ProjectCard name={"MiniShell"} githublink={"https://github.com/totallyrad1/Minishell"} description={minishell_desc} projectimg={"https://miro.medium.com/v2/da:true/resize:fit:1200/0*NsEzq9V2YGD6ocBH"} icons={[clang, makefile]} />
                    <ProjectCard name={"Cub3d"} githublink={"https://github.com/totallyrad1/cub3D"} description={cub3d_desc} projectimg={"https://miro.medium.com/v2/resize:fit:1200/1*25dBmsNUQps5geRZZZy-uQ.gif"} icons={[clang, makefile]}/>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;