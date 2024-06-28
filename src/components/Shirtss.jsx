import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shirtss(props) {
    const { nodes, materials } = useGLTF('/shirt.glb')
    const scaleValue = 0.2
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shirt.geometry}
                material={materials['Shirt.002']}
                position={[0.028, 0.033, 0]}
                rotation={[-Math.PI / 2, 0, 1.635]}
                scale={scaleValue}
            />
        </group>
    )
}

useGLTF.preload('/shirt.glb')
