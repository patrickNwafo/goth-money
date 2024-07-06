import { Canvas, useThree } from "@react-three/fiber";

import { Center, OrbitControls, ScrollControls, Scroll } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
import { Controls } from "../components/Controls";
import { useEffect } from "react";
import * as THREE from 'three';
import { useSnapshot } from "valtio";
import state from "../store";





const CanvasModel = () => {
    // const [currentShirt, setCurrentShirt] = useState(0);

    // const shirts = [
    //     { name: "Goth money gray logo", modelPath: "/shirt_baked.glb" },
    //     { name: "Another Shirt", modelPath: "/blankshirt.glb" },
    // ];

    // const handlePreviousShirt = () => {
    //     setCurrentShirt((prevShirt) => (prevShirt > 0 ? prevShirt - 1 : shirts.length - 1));
    // };

    // const handleNextShirt = () => {
    //     setCurrentShirt((prevShirt) => (prevShirt < shirts.length - 1 ? prevShirt + 1 : 0));
    // };
    const snap = useSnapshot(state);


    return (

        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.5} position={[5, 5, 5]} />
            <OrbitControls />
            <ScrollControls pages={1} damping={0.1}>
                <CameraRig>
                    <Center>
                        <Shirt
                        // modelPath={shirts[currentShirt].modelPath}
                        />
                    </Center>
                </CameraRig>
                <BrickBackground />
                <Scroll html>
                    <Controls

                    />
                </Scroll>
            </ScrollControls>
        </Canvas>

    )
}

const BrickBackground = () => {
    const { scene } = useThree();

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        const brickTexture = textureLoader.load('/textures/brick.jpeg');
        scene.background = brickTexture;
    }, [scene]);

    return null;
};

export default CanvasModel