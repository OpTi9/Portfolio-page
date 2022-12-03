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
            <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-ping"/>
            <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-52 animate-pulse"/>
            <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 opacity-10"/>
            <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[600px] w-[600px] mt-52 animate-ping"/>
            <div className="absolute border border-[#333333] rounded-full h-[950px] w-[950px] mt-52 opacity-20 animate-pulse"/>
        </motion.div>
    )
}

export default BackgroundCircle;