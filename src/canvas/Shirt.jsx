
import React from 'react'
import { useGLTF } from "@react-three/drei";
import state from "../store";
import { useSnapshot } from 'valtio';


const models = [
    '/shirt2.glb',
    '/bird-shirt.glb',
];


const Shirt = (props) => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF(models[snap.currentModelIndex]);

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
            </mesh>
        </group>
    )
}

export default Shirt