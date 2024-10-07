
const ProjectCard = ({name, githublink, description, projectimg, icons}) => {
    return (
      <div className="transform hover:scale-110 transition-transform duration-300">
        <div className="project-card relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 h-fit flex-grow animate-flip-down animate-duration-[1000ms]">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src={projectimg} alt="card-image" />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <h6 className="text-slate-800 text-xl font-semibold">
                  {name}
                </h6>
              </div>

            <div className="description-div">
              <p className="text-slate-600 leading-normal font-light">
                {description}
              </p>
            </div>
            </div>

            <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
                {icons && icons.map((icon, index) =>{
                    return (<button key={index} className="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        <img  className="w-4 h-4" src={icon} alt="" />
                    </button>);
                })}
            </div>

            <div className="px-4 pb-4 pt-0 mt-2">
              <a href={githublink} target="blank"><button className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Source Code
              </button></a>
            </div>
        </div>  
      </div>
    );
}
 
export default ProjectCard;