import { motion, useInView, useAnimation, easeInOut } from "framer-motion";
import { useRef, useEffect } from "react";

const Reveal = ({children, rad = false}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() =>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
        if(!isInView){
            mainControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView])

    return (
        <>
            <motion.div className="w-full m-0"
                ref={ref}
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.1}}
            >
                {children}
            </motion.div>
            {rad && <motion.div>

            </motion.div>}
        </>
    );
}
 
export default Reveal;