"use client"

import Svg_mszyszlo from "@/app/components/SVG/svg_mszyszlo";
import Image from "next/image";
import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions";
import { motion } from "motion/react";

export default function About() {
    const [status, setStatus] = useState("idle");
    const formRef = useRef(null);

    async function handleFormSubmit(formData) {
        setStatus("sending");
        const result = await sendEmail(formData);

        if (result?.success) {
            setStatus("success");
            formRef.current?.reset();
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
        }
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: custom * 0.1, ease: "easeOut" }
        })
    };

    return (
        <div id="contact" className="w-full min-h-screen flex flex-col justify-center items-center p-5 py-20 md:py-10">
            <div className="relative w-full h-full flex flex-col gap-20 md:gap-10">
                <div className="flex flex-col md:flex-row w-full h-max justify-between md:p-20 gap-10">
                    <div className="w-full md:w-2/5 h-max text-wrap flex flex-col gap-5">
                        <div className="w-full h-max flex flex-col gap-4">
                            <motion.p
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                custom={0}
                                className="text-md md:text-xl font-bold text-zinc-400 font-[raleway]"
                            >
                                SHORT ABOUT ME
                            </motion.p>
                            <motion.h1
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                custom={1}
                                className="text-3xl md:text-5xl font-bold"
                            >
                                <span className="text-yellow-400">Web</span> Developer and a little bit of <span className="text-yellow-400">everything</span>
                            </motion.h1>
                        </div>
                        <motion.p
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            className="text-sm"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate auctor dolor, sollicitudin mollis lectus faucibus sed. Cras sed lectus eget justo laoreet convallis at vitae velit. Donec risus leo, porta sit amet justo a, lacinia consectetur tellus. Cras vestibulum congue pellentesque. Curabitur dignissim gravida elit.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        className="md:w-1/2 flex justify-center relative md:h-full"
                    >
                        <Svg_mszyszlo />
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row w-full h-max gap-10 md:p-20 justify-center">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        className="relative w-2/3 md:w-1/4 aspect-[1/2] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/20"
                    >
                        <Image
                            src={"/foto.jpg"}
                            alt={"Foto"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                    <div className="w-full md:w-max h-max text-wrap flex flex-col gap-5">
                        <div className="w-full h-max flex flex-col gap-4">
                            <motion.p
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                custom={2}
                                className="text-md md:text-xl font-bold text-zinc-400 font-[raleway]"
                            >
                                CONTACT
                            </motion.p>
                            <motion.h1
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                custom={3}
                                className="text-3xl md:text-5xl/15 font-bold"
                            >
                                Let's work <span className="text-yellow-400">together!</span><br/><span className="text-yellow-400">Get in touch</span> when you're <span className="text-yellow-400">ready</span>
                            </motion.h1>
                        </div>

                        <motion.form
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            custom={4}
                            ref={formRef}
                            action={handleFormSubmit}
                            className="w-max md:grid grid-cols-2 grid-rows-2 gap-4"
                        >
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2.5 text-md font-medium text-heading">Your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="bg-zinc-800 border border-neutral-500 text-white text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full px-3 py-2.5 shadow-xs placeholder:text-zinc-400"
                                    placeholder="Adam"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2.5 text-md font-medium text-heading">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="bg-zinc-800 border border-neutral-500 text-white text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-zinc-400"
                                    placeholder="name@test.com"
                                    required
                                />
                            </div>
                            <div className="mb-5 col-span-2">
                                <label htmlFor="description" className="block mb-2.5 text-md font-medium text-heading">Describe what do you expect</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    className="bg-zinc-800 border border-neutral-500 text-white text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full px-3 py-2.5 shadow-xs placeholder:text-zinc-400"
                                    placeholder="I expect pretty responsive website with amazing animations"
                                    required
                                />
                            </div>

                            <div className="row-start-3 col-span-2 flex flex-col gap-2">
                                <button
                                    type="submit"
                                    disabled={status === "sending" || status === "success"}
                                    className={`text-white p-3 rounded-xl transition-all ${
                                        status === "success"
                                            ? "bg-green-600 border-green-600 cursor-default"
                                            : "bg-neutral-700 border border-zinc-700 hover:bg-neutral-800 cursor-pointer disabled:opacity-50"
                                    }`}
                                >
                                    {status === "idle" && "Send to me"}
                                    {status === "sending" && "Sending..."}
                                    {status === "success" && "Message sent!"}
                                    {status === "error" && "Error! Try again."}
                                </button>

                                {status === "success" && (
                                    <p className="text-green-500 text-sm font-medium">Thanks! I will get back to you soon.</p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please check your internet or try again later.</p>
                                )}
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    )
}