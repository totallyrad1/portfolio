import Reveal from "./Reveal";

const AboutMe = () => {
    return (<div className="aboutme-div overflow-hidden">
        <Reveal>
            <h5 className="pb-3 text-4xl font-extrabold text-black">
                    About ME
            </h5>
        </Reveal>
        <div className="grid grid-cols-1 justify-between">
            <Reveal>
                <div className="aboutme-paragraph text-center animate-pulse animate-infinite max-w-4xl mx-auto p-4">
                    <p>Hello, I'm Asaad Naji—a self-taught, highly motivated developer with a solid foundation from 1337 Coding School, Khouribga. I specialize in low-level programming languages like C and C++, and I'm proficient in modern web technologies, including HTML, CSS, JavaScript (ES6), TypeScript, React.js, Next.js, Node.js, Django, and Python.</p>
                    <p>I have hands-on experience with Docker, Tailwind CSS, Git, and GitHub, and I'm familiar with Agile methodologies. My responsible mindset and ability to learn quickly enable me to adapt to new technologies and challenges efficiently.</p>
                    
                </div>
            </Reveal>
            {/* <Reveal>
                <div className="flex justify-center py-3">
                    <img src="https://badge.mediaplus.ma/black/asnaji" alt="asnaji's 42 stats" className="w-96 mdl:w-auto" />
                </div>
            </Reveal> */}
        </div>
    </div>);
}
 
export default AboutMe;