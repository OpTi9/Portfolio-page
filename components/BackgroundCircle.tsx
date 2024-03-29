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
            <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
            <div className="absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-52 animate-pulse opacity-10"/>
            <div className="absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[750px] w-[750px] mt-52 animate-pulse opacity-5"/>
            <div className="absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-52 animate-ping"/>
        </motion.div>
    )
}

export default BackgroundCircle;