import cplus from "../assets/cplusplus.png"
import makefile from "../assets/makefile.svg"
import clang from "../assets/clang1.png"
import htmllogo from "../assets/html.png"
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

const Marquee = () => {

    const iconsArray = [cplus, clang, git, makefile, python, htmllogo, css, javascript, reactlogo, tailwind, linux, bash, django, docker, nodejs, mongodb];

    return (
        <div className="text-center">
            <h3 className="pt-7 text-5xl font-extrabold dark:text-white">
                Skills
            </h3>
            <div className="flex items-center">
                <div className="py-7 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {iconsArray && iconsArray.map((icon, index)=>{
                            return  <span className="text-4xl mx-4" key={index}>
                                    <img src={icon} className="marquee-element"/>
                                    </span>
                        })}
                    </div>
                    <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {iconsArray && iconsArray.map((icon, index)=>{
                                return  <span className="text-4xl mx-4" key={index}>
                                        <img src={icon} className="marquee-element"/>
                                        </span>
                            })}
                    </div>
                    <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {iconsArray && iconsArray.map((icon, index)=>{
                                return  <span className="text-4xl mx-4" key={index}>
                                        <img src={icon} className="marquee-element"/>
                                        </span>
                            })}
                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default Marquee;