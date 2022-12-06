import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

function ContactMe({}: Props) {

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    Let's{" "}
                    <span className="text-[#F7AB0A]/80 font-bold">Talk</span>
                </h4>

                <div className="space-y-8">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">aezhaev@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">+33789692494</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">Strasbourg</p>
                    </div>
                </div>

                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                        />
                        <input
                            placeholder="Email"
                            className="contactInput"
                            type="text"
                        />
                    </div>
                    <input
                        className="contactInput"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        className="contactInput"
                        placeholder="Message"
                    />
                    <button
                        className="py-4 px-10 rounded-md text-black font-bold text-lg bg-[#F7AB0A]/60 hover:bg-[#F7AB0A]/90"
                            type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;