import icon from "../assets/totallyrad.gif"
import github from "../assets/25231.png"
import linkedin from "../assets/linkedin-icon.svg"

const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={icon} className="navbaricon" />
            <div className="left-nav-buttons">
                <a href="https://github.com/totallyrad1" target="blank">
                    <button>
                        <img src={github} className="navbar-icon"></img>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank">
                    <button>
                        <img src={linkedin} className="navbar-icon"></img>
                    </button>
                </a>
            </div>
        </div>
    );
}
 
export default NavBar;