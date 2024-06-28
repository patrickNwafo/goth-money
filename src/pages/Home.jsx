import { motion } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store";

import { Canvas } from "@react-three/fiber";
import { Goth } from "../components/Goth";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import CameraRig from "../canvas/CameraRig";



const Home = () => {
    const snap = useSnapshot(state);

    const handleClick = () => {
        state.currentPage = "selection";
    };

    return (
        <motion.section className="w-screen h-screen"

        >
            {snap.currentPage === "home" && (
                <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
                    <ambientLight intensity={0.5} />
                    <Environment files="/spoun.hdr" background />
                    <OrbitControls />

                    <CameraRig>
                        <Center>
                            <Goth onClick={handleClick} />
                        </Center>
                    </CameraRig>
                </Canvas>


            )}
        </motion.section>
    )
}

export default Home