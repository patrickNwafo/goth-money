import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
    headContainerAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion";

const Selection = () => {
    const snap = useSnapshot(state);

    const handleBack = () => {
        state.currentPage = "home";
    };

    return (
        <motion.section className="w-full h-full flex justify-center items-center absolute z-10" {...slideAnimation("right")}>
            <motion.div className="flex flex-col items-center gap-10" {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                    <h1>Selection Page</h1>
                    <button onClick={handleBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Back</button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Selection;