import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Reveal = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const mainControls = useAnimation();

    useEffect(() =>{
        if(isInView){
            mainControls.start("visible");
        }
        if(!isInView){
            mainControls.start("hidden");
        }
    }, [isInView])

    return (
        <motion.div className="w-full"
            ref={ref}
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.10}}
        >
            {children}
        </motion.div>
    );
}
 
export default Reveal;