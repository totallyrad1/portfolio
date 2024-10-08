import icon from "../assets/totallyrad.gif"
import github from "../assets/25231.png"
import linkedin from "../assets/linkedin.png"
import { useInView } from "framer-motion"
import { useEffect, useState } from "react"

const NavBar = ({introRef, aboutMeRef, projectsRef}) => {
    const [activeSection, setActiveSection] = useState("Intro");

    const checkInView = () => {
        const introRect = introRef.current.getBoundingClientRect();
        const aboutMeRect = aboutMeRef.current.getBoundingClientRect();
        const projectsRect = projectsRef.current.getBoundingClientRect();

        if (introRect.top >= 0 && introRect.top < window.innerHeight) {
            setActiveSection("Intro");
        } else if (aboutMeRect.top >= 0 && aboutMeRect.top < window.innerHeight) {
            setActiveSection("About Me");
        } else if (projectsRect.top >= 0 && projectsRect.top < window.innerHeight) {
            setActiveSection("Projects");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkInView);
        return () => {
            window.removeEventListener("scroll", checkInView);
        };
    }, []);

    const scrollToElement = (elemenet) =>{
        scrollTo({
            top: elemenet.current.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <div className="NavBar">
            <img src={icon} className="navbaricon" />
            <div className="left-nav-buttons">
                <button className={activeSection  === "Intro" ? "underline" : ""} onClick={() => scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>
                    Intro
                </button>
                <button className={activeSection  === "About Me" ? "underline" : ""} onClick={() => scrollToElement(aboutMeRef)}>About me
                </button>
                <button className={activeSection  === "Projects" ? "underline" : ""} onClick={() => scrollToElement(projectsRef)}>Projects
                </button>
            </div>
            {/* <div className="left-nav-buttons">
                <a href="https://github.com/totallyrad1" target="blank">
                    <button>
                        <img src={"https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"} className="navbar-icon"></img>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank">
                    <button>
                        <img src={linkedin} className="navbar-icon"></img>
                    </button>
                </a>
            </div> */}
        </div>
    );
}
 
export default NavBar;