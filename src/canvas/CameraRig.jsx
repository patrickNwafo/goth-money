import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { motion } from 'framer-motion-3d';

import state from '../store'

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);
    const Motion3D = motion.group;

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;



        group.current.rotation.y += delta * 0.1;
    })
    return <Motion3D ref={group} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}>{children}</Motion3D>;
}

export default CameraRig