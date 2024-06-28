import { Canvas } from "@react-three/fiber";

import { Environment, Center, OrbitControls } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
// import Backdrop from "./Backdrop"
import { Scroll, ScrollControls } from "@react-three/drei";
import { Controls } from "../components/Controls";




const CanvasModel = () => {
    return (
        <>
            <Canvas>
                <ambientLight intensity={0.5} />
                <Environment files="/spoun.hdr" background />
                <OrbitControls />
                <ScrollControls pages={1} damping={0.1}>
                    <CameraRig>
                        <Center>
                            <Shirt />
                        </Center>
                    </CameraRig>
                    <Scroll html>
                        <Controls />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </>


    )
}

export default CanvasModel