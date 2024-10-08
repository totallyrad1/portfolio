import rad from "../assets/rad.jpg"
import Reveal from "./Reveal";

const Intro = ({aboutMeRef}) => {
    return (
        <div className="flex justify-center items-center text-center grid md1:grid-cols-2 df:grid-cols-1 pt-12 mdl:p-0">
            <Reveal>
                <div>
                    <h1 className="intro-title text-white">RaD/.</h1>
                </div>
            </Reveal>
            <Reveal>
                <img src={rad} className="intro-img p-0"></img>
            </Reveal>
            <div onClick={() => scrollTo({
                top: aboutMeRef.current.offsetTop,
                behavior: "smooth"
            })} className="intro-scroll-down flex flex-col items-center animate-bounce animate-infinite animate-duration-[2000ms] cursor-pointer">
                <h6 className="text-white vertival-text">{"Scroll Down"}</h6>
                <img src="https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png" className="w-4 h-4 mt-3"></img>
            </div>
        </div>
    );
}
 
export default Intro;