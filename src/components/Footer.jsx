import icon from "../assets/totallyrad.gif"

const Footer = ({aboutMeRef}) => {

    const scrollToElement = (elemenet) =>{
        scrollTo({
            top: elemenet.current.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer-div m-4 w-full overflow-hidden">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between w-full">
                    <a href="https://www.totallyrad.tech/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={icon} className="h-8" alt="totallyrad logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">TotallyRaD</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li onClick={()=> scrollToElement(aboutMeRef)} className="hover:underline me-4 md:me-6 cursor-pointer">
                            About
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <a href="https://www.linkedin.com/in/asaad-naji-90423429a/" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center overflow-hidden">© 2024 <a href="https://www.totallyrad.tech/" className="hover:underline">TotallyRaD™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}
 
export default Footer;