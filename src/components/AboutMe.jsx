const AboutMe = () => {
    return (<div className="aboutme-div overflow-hidden">
        <h5 className="py-7 text-4xl font-extrabold text-white animate-wiggle animate-wiggle animate-infinite animate-duration-[4000ms]">
                About ME
        </h5>
        <div className="aboutme-paragraph animate-pulse animate-infinite py-12">
            <p>Hi! I’m <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" target="blank"><strong>Asaad Naji </strong></a>a 19-year-old Moroccan currently studying at 1337.</p>
            <p>I’m passionate about coding and always eager to learn new things.</p>
            <p>I enjoy taking on challenges and am quick to adapt and pick up new skills. </p>
            <p>Whether it's solving problems or building projects, I’m driven by a desire to continuously grow as a developer.</p>
        </div>
        <div class="white-curve">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>);
}
 
export default AboutMe;