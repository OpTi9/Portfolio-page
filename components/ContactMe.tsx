import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

function ContactMe({}: Props) {
    // TODO: Add mail sending functionality
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:aezhaev@gmail.com?subject=${data.subject}&body=${data.message} \n Sincerely,\n ${data.name}`;
    };

    return (
        <div className="pb-2 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute ml-3 sm:ml-0 top-6 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="hidden sm:block text-4xl font-semibold text-center">
                    Lets{" "}
                    <span className="text-[#F7AB0A]/80 font-bold">Talk</span>
                </h4>

                <div className="space-y-8">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">aezhaev@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">Strasbourg, France</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                        />
                        <input
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="contactInput"
                            type="email"
                        />
                    </div>
                    <input
                        {...register("subject", { required: true })}
                        className="contactInput"
                        type="text"
                        placeholder="Subject"
                    />
                    <textarea
                        {...register("message", { required: true })}
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