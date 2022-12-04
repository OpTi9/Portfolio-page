import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircle({}: Props) {

    return (
        <motion.div initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 2.5,
        }}
        className="relative flex justify-center items-center">
            <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-ping"/>
            <div className="absolute border border-[#333333] rounded-full h-[365px] w-[365px] mt-52 animate-pulse opacity-10"/>
            <div className="absolute border border-[#333333] rounded-full h-[475px] w-[475px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#333333] rounded-full h-[575px] w-[575px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[700px] w-[700px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#333333] rounded-full h-[650px] w-[650px] mt-52 animate-ping"/>
        </motion.div>
    )
}

export default BackgroundCircle;