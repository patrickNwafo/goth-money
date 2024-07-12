import { Canvas, useThree } from "@react-three/fiber";

import { Center, OrbitControls, ScrollControls, Scroll, Environment } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
import { Controls } from "../components/Controls";
import { useEffect } from "react";
import * as THREE from 'three';
import { useSnapshot } from "valtio";
import state from "../store";
import brickBackground from '/textures/brick.jpg';





const CanvasModel = () => {

    const snap = useSnapshot(state);


    return (
        <div className="w-full h-full"
            style={{
                backgroundImage: `url(${brickBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
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
                    <Scroll html>
                        <Controls />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>


    )
}



export default CanvasModel