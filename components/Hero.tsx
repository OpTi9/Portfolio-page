import React from 'react';
import { Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import {PageInfo} from "../typings";
import {urlFor} from "../sanity";
import Image from "next/image";

type Props = {
    pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {

    const [ text ] = useTypewriter({
        words: [
            `Hello, I'm ${pageInfo?.name}`,
            "React+TypeScript",
            "Next.js",
            "TailwindCSS",
            "Still Work in Progress",
            "Full Stack Developer",
        ],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircle />
            <img
                className="relative rounded-full h-36 w-36 mx-auto object-cover border-4 border-[#F7AB0A]"
                src={urlFor(pageInfo?.heroImage).url()}
                alt="avatar"
                draggable={false}
            />
            <div className="z-20">
                <h2 className="font-semibold text-sm uppercase text-gray-500 pb-2 tracking-[6px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#ffb641"/>
                </h1>
            </div>
            <div className="pt-5 flex space-x-1 z-20 font-semibold">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    )
}