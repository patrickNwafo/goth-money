import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bird(props) {
    const { nodes, materials } = useGLTF('/bird.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shirt.geometry}
                material={materials['Shirt.001']}
                position={[0.029, 0.017, -0.035]}
                rotation={[-Math.PI / 2, 0, 1.635]}
                scale={0.06}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['Screenshot_2024-07-02_at_110049'].geometry}
                material={materials['Screenshot 2024-07-02 at 11.00.49']}
                position={[0.127, 0.102, -0.097]}
            />
        </group>
    )
}

useGLTF.preload('/bird.glb')
