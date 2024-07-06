
import React, { useRef } from 'react'
import * as THREE from 'three';
import {
    Decal,
    useGLTF,
    useTexture,
} from "@react-three/drei";
import state from "../store";
import { useSnapshot } from 'valtio';
// import { useFrame } from '@react-three/fiber';
// import { easing } from 'maath';




const Shirt = (props) => {
    const { nodes, materials } = useGLTF('/shirt2.glb')
    const snap = useSnapshot(state);

    const originalTexture = materials['Shirt.002'].map;

    const texture1 = useTexture('/textures/bird.png');
    const texture2 = useTexture('/textures/red2.png');
    const texture3 = useTexture('/textures/red.png');

    const textures = [originalTexture, texture1, texture2, texture3];
    const currentTexture = textures[snap.currentTextureIndex];



    return (
        <group {...props} >
            <mesh

                castShadow
                receiveShadow
                geometry={nodes.Shirt.geometry}
                material={materials['Shirt.002']}
                position={[0, -0.062, 0]}
                rotation={[-1.601, 0, 0]}
                scale={0.2}
                dispose={null}
            >
                <meshStandardMaterial map={currentTexture} />
            </mesh>
        </group>
    )
}

export default Shirt