"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("Loading");

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Animate loading text
        const textTimer = setInterval(() => {
            setLoadingText(prev => {
                if (prev === "Loading...") return "Loading";
                return prev + ".";
            });
        }, 500);

        return () => {
            clearTimeout(timer);
            clearInterval(textTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 flex items-center justify-center"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-4 sm:left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-1/3 right-4 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-8 sm:left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 text-center">
                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                            <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Ahmad Zulkarnaen"
                                    width={88}
                                    height={88}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name Animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Ahmad{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            Zulkarnaen
                        </span>
                    </motion.h1>

                    {/* Loading Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-gray-700 dark:text-gray-300 text-xl mb-8"
                    >
                        {loadingText}
                    </motion.p>

                    {/* Progress Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="w-64 mx-auto"
                    >
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            />
                        </div>
                    </motion.div>

                    {/* Spinning Loader */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 mx-auto border-2 border-purple-500 border-t-transparent rounded-full"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
