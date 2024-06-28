

{/* 
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, Canvas } from "@react-three/fiber";
import {
    useGLTF,
    useTexture,
    PresentationControls,
    Stage,
} from "@react-three/drei";
import { FaAngleLeft, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import state from "../store";

function Model(props) {
    const { scene } = useGLTF("/shirt.glb");
    return <primitive object={scene} scale={0.01} {...props} />;
}

const handleBack = () => {
    state.currentPage = "home";
};

const Shirt = () => {
    return (
        <div className="flex flex-col items-center justify-between h-screen relative bg-[#101010]">
            <div className="w-full h-full relative">
                <div className="absolute top-4 left-4 z-10">
                    <button className="bg-white p-2 rounded" onClick={handleBack}>
                        <FaAngleLeft />
                    </button>
                </div>
                <Canvas dpr={[2, 3]} shadows camera={{ fov: 150 }} className="w-full h-full">
                    <color attach="background" args={["#101010"]} />
                    <PresentationControls speed={1.5} zoom={2.5} polar={[-0.1, Math.PI / 4]}>
                        <ambientLight intensity={0.5} />
                        <Stage environment={"night"}>
                            <Model scale={0.01} />
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div>
            <div className=" absolute top-[85%]">
                <div className="mt-4 text-center">
                    <p className="text-white">goth money gray logo</p>
                </div>
                <div className="flex justify-between items-center gap-24">
                    <button className="text-white p-2 rounded">
                        <FaAngleLeft />
                    </button>
                    <button className="w-40 h-10 bg-slate-500 text-black rounded-lg mt-2">
                        buy
                    </button>
                    <button className="text-white p-2 rounded">
                        <FaAngleRight />
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    <FaTwitter className="text-white mx-2 bg-black" />
                    <FaInstagram className="text-white mx-2 bg-black" />
                </div>
            </div>

        </div>
    );
}; 

import 

export default Shirt;

*/}

import React from 'react'
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import {
    useGLTF,
    useTexture,
    Decal,
} from "@react-three/drei";
import state from "../store";

const Shirt = ({ props }) => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt2.glb')

    return (
        <group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shirt.geometry}
                material={materials['Shirt.002']}
                position={[3, 3, 3]}
                rotation={[-Math.PI / 2, 0, 1.635]}
                scale={0.2}
                material-roughness={1}
            >
            </mesh>
        </group >
    )
}

export default Shirt