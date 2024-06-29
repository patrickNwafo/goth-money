
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