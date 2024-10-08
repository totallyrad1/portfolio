import rad from "../assets/rad.jpg"
import Reveal from "./Reveal";

const Intro = () => {
    return (
        <div className="flex justify-center text-center grid mdl:grid-cols-2 smallest:grid-cols-1">
            <Reveal>
                <h1 className="intro-title text-white p-0">RaD/.</h1>
            </Reveal>
            <Reveal>
                <img src={rad} className="intro-img p-0"></img>
            </Reveal>
            <Reveal>
                <div className="intro-scroll-down flex flex-col items-center animate-bounce animate-infinite animate-duration-[2000ms] cursor-pointer">
                    <h6 className="text-white vertival-text">{"Scroll Down"}</h6>
                    <img src="https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png" className="w-4 h-4 mt-3"></img>
                </div>
            </Reveal>
        </div>
    );
}
 
export default Intro;