import { useState, useEffect } from "react";

const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 500){
                setBackToTopButton(true);
            }
            else{
                setBackToTopButton(false);
            }
        });

    }, [])
    
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    if(backToTopButton){
        return (<div onClick={scrollUp} className="scrollup-button cursor-pointer text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
            <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" style={{width: "20px"}}></img>
        </div>)
    }else{
        return null;
    }
}
 
export default BackToTop;