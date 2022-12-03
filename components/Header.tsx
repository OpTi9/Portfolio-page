import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div 
                className="flex flex-row items-center"
                initial={{ opacity: 0, x: -500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* socials */}
                <SocialIcon 
                    url="https://www.linkedin.com/in/azamat-ezhaev/" 
                    fgColor='transparent'
                    bgColor='gray'
                />
                <SocialIcon 
                    url="https://www.linkedin.com/in/azamat-ezhaev/" 
                    fgColor='transparent'
                    bgColor='gray'
                />
                <SocialIcon 
                    url="https://www.linkedin.com/in/azamat-ezhaev/" 
                    fgColor='transparent'
                    bgColor='gray'
                />
            </motion.div>

            <motion.div 
                className='flex flex-row items-center text-gray-300 cursor-pointer'
                initial={{ opacity: 0, x: 500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <SocialIcon 
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    className='cursor-pointer'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get in Touch
                </p>
            </motion.div>

        </header>
    )
}