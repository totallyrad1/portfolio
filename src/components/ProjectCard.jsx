import Reveal from "./Reveal";
import { Github } from "lucide-react";
import { Button } from "./ui/Button";

const ProjectCard = ({name, githublink, description, projectimg, technologies}) => {
    return (
      <Reveal>
  <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative flex flex-col md:flex-row gap-6 p-6 bg-zinc-950 border-0">
          <div className="w-full md:w-1/2">
            <img
              src={projectimg}
              alt={`${name} image`}
              className="rounded-lg w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{name}</h3>
              <div className="space-y-2">
                {description.map((desc, index) => (
                  <p key={index} className="text-zinc-400 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <div key={index} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-full p-2">
                    {tech}
                  </div>
                ))}
              </div>

              {githublink !== "" && <div className="flex justify-end">
                <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-zinc-800">
                  <a href={githublink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    View Code
                  </a>
                </Button>
              </div>}
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    );
}
 
export default ProjectCard;