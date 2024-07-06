import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {
    useTexture,
    Decal,
} from "@react-three/drei";
import state from "../store";
import { useSnapshot } from "valtio";

export function Shirt(props) {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt2.glb')
    const logoTexture = useTexture("/goth.png")

    return (
        <group {...props} dispose={null}>
            <group
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 1.635]}
                scale={[1.005, 1, 1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shirt001.geometry}
                    material={materials['Shirt.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shirt001_1.geometry}
                >
                    <meshBasicMaterial transparent opacity={0} />
                    <Decal

                        position={[0, 0.03, 0.05]}
                        rotation={[0, 0, 0]}
                        scale={4}
                    >
                        <meshBasicMaterial
                            map={logoTexture}
                            polygonOffset
                            polygonOffsetFactor={-2}
                        />
                    </Decal>
                </mesh>
            </group>
        </group>
    )
}

useGLTF.preload('/new_shirt.glb')