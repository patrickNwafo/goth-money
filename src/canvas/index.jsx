import { Canvas, useThree } from "@react-three/fiber";

import { Center, OrbitControls, ScrollControls, Scroll, Environment } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
import { Controls } from "../components/Controls";
import { useEffect } from "react";
import * as THREE from 'three';
import { useSnapshot } from "valtio";
import state from "../store";





const CanvasModel = () => {

    const snap = useSnapshot(state);


    return (

        <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls />
            <ScrollControls pages={1} damping={0.1}>
                <CameraRig>
                    <Center>
                        <Shirt
                        />
                    </Center>
                </CameraRig>
                <BrickBackground />
                <Scroll html>
                    <Controls />
                </Scroll>
            </ScrollControls>
        </Canvas>

    )
}

const BrickBackground = () => {
    const { scene } = useThree();

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        const brickTexture = textureLoader.load('/textures/brick.jpg');
        scene.background = brickTexture;
    }, [scene]);

    return null;
};

export default CanvasModel