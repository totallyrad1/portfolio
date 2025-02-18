
import github from "../assets/github-white.png"
import github_b from "../assets/github-black-1.png"
import linkedin from "../assets/linkedin.png"
import linkedin_b from "../assets/linkedin-black.png"
import { useEffect, useState } from "react"
import { Button } from "./ui/Button";

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
        setNavBarClasses(activeSection === "About Me" || activeSection === "End" ? "NavBar black-nav " : "NavBar white-nav");
        setBlacKOrWhite(activeSection === "About Me" || activeSection === "End" ? "black" : "white");
    }, [activeSection])



    return (
        <div className={navBarClasses}>
            {/* <img src={icon} className="navbaricon" /> */}
            <div className="left-nav-buttons gap-1 mdl:text-sm mdl:gap-5 flex">
                <Button className={activeSection  === "Intro" ? "underline bg-black text-white" : "bg-white text-black border-black"} onClick={() => scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>
                    Intro
                </Button>
                <Button className={activeSection  === "About Me" ? "underline bg-black text-white" : "bg-white text-black border-black"} onClick={() => scrollToElement(aboutMeRef)}>About
                </Button>
                <Button className={activeSection  === "Projects" ? "underline bg-black text-white" : "bg-white text-black border-black"} onClick={() => scrollToElement(projectsRef)}>Projects
                </Button>
                <a href="/resume.pdf" target="blank">
                    <Button className="bg-gray-100 text-black border-black">
                        Resume
                    </Button>
                </a>
            </div>
            <div className="left-nav-buttons gap-3 hidden mdl:gap-10 sm2:flex">
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