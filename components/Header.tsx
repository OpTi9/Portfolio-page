import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

type Props = {}

export default function Header({}: Props) {
    return (
        <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
                    draggable={false}
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/azamat-ezhaev/"
                    fgColor='transparent'
                    bgColor='gray'
                    draggable={false}
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/azamat-ezhaev/"
                    fgColor='transparent'
                    bgColor='gray'
                    draggable={false}
                />
            </motion.div>

            <Link href="#contact">
                <motion.div
                    className='flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#F7AB0A]'
                    initial={{ opacity: 0, x: 500, scale: 0.5 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <EnvelopeIcon className="h-6 w-6 mr-1" />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#F7AB0A]'>
                        Get in Touch
                    </p>
                </motion.div>
            </Link>
        </div>
    )
}