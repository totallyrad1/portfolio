import Reveal from "./Reveal";

const AboutMe = () => {
    return (<div className="aboutme-div overflow-hidden">
        <Reveal>
            <h5 className=" text-4xl font-extrabold text-black animate-wiggle animate-wiggle animate-infinite animate-duration-[4000ms]">
                    About ME
            </h5>
        </Reveal>
        <Reveal>
            <div className="aboutme-paragraph animate-pulse animate-infinite py-12">
                <p>I’m <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank"><strong>Asaad Naji </strong> or <strong>RaD</strong> </a>a 19-year-old Moroccan currently studying at 1337.</p>
                <p>I’m passionate about coding and always eager to learn new things.</p>
                <p>I enjoy taking on challenges and am quick to adapt and pick up new skills. </p>
                <p>Whether it's solving problems or building projects, I’m driven by a desire to continuously grow as a developer.</p>
            </div>
        </Reveal>
    </div>);
}
 
export default AboutMe;