import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Goth(props) {
    const { nodes, materials } = useGLTF('/goth.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_2.geometry}
                material={nodes.Mesh_2.material}

            />
        </group>
    )
}

useGLTF.preload('/goth.glb')