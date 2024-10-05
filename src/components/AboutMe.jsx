import rad from "../assets/rad.png"

const AboutMe = () => {
    return (<div className="flex aboutme-div items-center">
        {/* <img src={rad} className="aboutme-img"/> */}
        <div className="aboutme-paragraph">
            <p>Hi! I’m <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank"><strong>Asaad Naji </strong></a>a 19-year-old Moroccan currently studying at 1337.</p>
            <p>I’m passionate about coding and always eager to learn new things.</p>
            <p>I enjoy taking on challenges and am quick to adapt and pick up new skills. </p>
            <p>Whether it's solving problems or building projects, I’m driven by a desire to continuously grow as a developer.</p>
        </div>
    </div>);
}
 
export default AboutMe;