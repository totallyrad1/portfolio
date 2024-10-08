import icon from "../assets/totallyrad.gif"
import github from "../assets/25231.png"
import linkedin from "../assets/linkedin.png"

const NavBar = ({introRef, aboutMeRef, projectsRef}) => {

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
                <button onClick={() => scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>
                    Intro
                </button>
                <button onClick={() => scrollToElement(aboutMeRef)}>About me
                </button>
                <button onClick={() => scrollToElement(projectsRef)}>Projects
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