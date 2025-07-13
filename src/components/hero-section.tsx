"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { CVViewer } from "./cv-viewer";

export function HeroSection() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden pt-24 md:pt-16">
            {/* Enhanced Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-20 right-4 sm:top-40 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-8 sm:left-40 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                {/* Floating Particles */}
                <div className="absolute inset-0" suppressHydrationWarning>
                    {[
                        { left: 15, top: 25, delay: 0.5, duration: 4 },
                        { left: 85, top: 15, delay: 1.2, duration: 5 },
                        { left: 75, top: 60, delay: 2.1, duration: 3.5 },
                        { left: 25, top: 80, delay: 0.8, duration: 4.5 },
                        { left: 60, top: 35, delay: 1.8, duration: 3.8 },
                        { left: 40, top: 70, delay: 0.3, duration: 5.2 },
                        { left: 90, top: 45, delay: 2.5, duration: 4.2 },
                        { left: 10, top: 55, delay: 1.5, duration: 3.9 },
                        { left: 70, top: 20, delay: 0.9, duration: 4.8 },
                        { left: 30, top: 85, delay: 2.2, duration: 3.6 },
                        { left: 55, top: 10, delay: 1.7, duration: 5.1 },
                        { left: 20, top: 40, delay: 0.6, duration: 4.3 },
                        { left: 80, top: 75, delay: 2.8, duration: 3.7 },
                        { left: 45, top: 65, delay: 1.1, duration: 4.6 },
                        { left: 65, top: 30, delay: 2.4, duration: 3.4 },
                        { left: 35, top: 90, delay: 0.7, duration: 5.3 },
                        { left: 95, top: 50, delay: 1.9, duration: 4.1 },
                        { left: 5, top: 35, delay: 2.6, duration: 3.8 },
                        { left: 50, top: 5, delay: 1.3, duration: 4.9 },
                        { left: 25, top: 75, delay: 0.4, duration: 3.3 }
                    ].map((particle, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                animationDelay: `${particle.delay}s`,
                                animationDuration: `${particle.duration}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 md:py-0">
                <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-4 md:mt-0">
                    {/* Enhanced Profile Image with Glow Effect */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-pulse-glow">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700 relative">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Ahmad Zulkarnaen"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    priority
                                />
                                {/* Status indicator */}
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse">
                                    <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                            CS
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        >
                            3.79
                        </motion.div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Ahmad{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Zulkarnaen
                        </span>
                    </motion.h1>

                    {/* Animated Title */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
                    >
                        <TypeAnimation
                            sequence={[
                                "Computer Science Student",
                                2000,
                                "Frontend Developer",
                                2000,
                                "Backend Developer",
                                2000,
                                "Mobile App Developer",
                                2000,
                                "IT Support Specialist",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        5th semester Computer Science student at Singaperbangsa Karawang University with expertise in
                        web development, mobile app development, and IT support. Passionate about creating innovative
                        technical solutions and continuous learning in technology.
                    </motion.p>

                    {/* Enhanced CTA Buttons */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>

                        <CVViewer />

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 relative overflow-hidden group glass-effect"
                        >
                            <span className="relative z-10">Get In Touch</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-white cursor-pointer"
                        >
                            <ArrowDownIcon className="w-6 h-6" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
