import icon42 from "../assets/totallyrad-textgif-unscreen.gif"

const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={icon42} className="navbaricon" />
            <div className="left-nav-buttons">
                <a href="https://github.com/totallyrad1" target="blank">
                    <button>Github</button>
                </a>
                <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank">
                    <button>linkedin</button>
                </a>
            </div>
        </div>
    );
}
 
export default NavBar;