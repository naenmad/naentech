"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-20 right-4 sm:top-40 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-8 sm:left-40 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                {/* 404 Animation */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        The page you&apos;re looking for seems to have wandered off into the digital void.
                        Don&apos;t worry, even the best developers sometimes take wrong turns!
                    </p>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 text-6xl opacity-20"
                >
                    💻
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 5, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-1/3 right-1/4 text-5xl opacity-20"
                >
                    🚀
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-1/4 left-1/3 text-4xl opacity-20"
                >
                    ⚡
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        >
                            <HomeIcon className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            Go Back
                        </button>
                    </motion.div>
                </motion.div>

                {/* Fun Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12"
                >
                    <p className="text-sm text-gray-400 italic">
                        &ldquo;In the world of coding, 404 errors are just unexpected adventures!&rdquo;
                        <br />
                        <span className="text-purple-400">- Ahmad Zulkarnaen</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
