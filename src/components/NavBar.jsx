import icon from "../assets/totallyrad.gif"
import github from "../assets/github-white.png"
import github_b from "../assets/github-black-1.png"
import linkedin from "../assets/linkedin.png"
import linkedin_b from "../assets/linkedin-black.png"
import { useInView } from "framer-motion"
import { useEffect, useState } from "react"
import { footer } from "framer-motion/client"

const NavBar = ({introRef, aboutMeRef, projectsRef,footerRef}) => {
    const [activeSection, setActiveSection] = useState("Intro");
    const [navBarClasses, setNavBarClasses] = useState("NavBar");
    const [blackOrWhite, setBlacKOrWhite] = useState("black");

    const checkInView = () => {
        const introRect = introRef.current.getBoundingClientRect();
        const aboutMeRect = aboutMeRef.current.getBoundingClientRect();
        const projectsRect = projectsRef.current.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();

        if (introRect.top >= 0 && introRect.top < window.innerHeight) {
            setActiveSection("Intro");
        } else if (aboutMeRect.top >= 0 && aboutMeRect.top < window.innerHeight) {
            setActiveSection("About Me");
        } else if (projectsRect.top >= 0 && projectsRect.top < window.innerHeight) {
            setActiveSection("Projects");
        }else{
            setActiveSection("End");
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

    useEffect(()=>{
        document.title = activeSection;
        setNavBarClasses(activeSection === "About Me" || activeSection === "End" ? "NavBar black-nav" : "NavBar white-nav");
        setBlacKOrWhite(activeSection === "About Me" || activeSection === "End" ? "black" : "white");
    }, [activeSection])



    return (
        <div className={navBarClasses}>
            {/* <img src={icon} className="navbaricon" /> */}
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
                <button className={activeSection  === "End" ? "underline" : ""} onClick={() => scrollToElement(footerRef)}>End
                </button>
            </div>
            <div className="left-nav-buttons">
                <a href="https://github.com/totallyrad1" target="blank">
                    <button>
                        <img src={blackOrWhite === "black" ? github : github_b} className="navbar-icon"></img>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank">
                    <button>
                        <img src={blackOrWhite === "black" ? linkedin : linkedin_b} className="navbar-icon"></img>
                    </button>
                </a>
            </div>
        </div>
    );
}
 
export default NavBar;