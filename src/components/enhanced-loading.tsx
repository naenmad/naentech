"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EnhancedLoading() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const loadingSteps = useMemo(() => [
        "Initializing Portfolio...",
        "Loading Projects...",
        "Fetching Skills Data...",
        "Preparing UI Components...",
        "Almost Ready..."
    ], []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        return () => clearInterval(timer);
    }, [isMounted]);

    useEffect(() => {
        if (!isMounted) return;
        
        const stepTimer = setInterval(() => {
            setCurrentStep(prev => {
                if (prev >= loadingSteps.length - 1) {
                    clearInterval(stepTimer);
                    return prev;
                }
                return prev + 1;
            });
        }, 600);

        return () => clearInterval(stepTimer);
    }, [isMounted, loadingSteps.length]);

    if (!isLoading || !isMounted) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center"
                suppressHydrationWarning
            >
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative z-10 text-center">
                    {/* Logo/Name Animation */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-6xl font-bold text-white mb-2">
                            Ahmad{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Zulkarnaen
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300">Portfolio</p>
                    </motion.div>

                    {/* Loading Animation */}
                    <div className="w-80 mx-auto mb-6">
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent opacity-30 animate-shimmer" />
                            </motion.div>
                        </div>

                        {/* Progress Percentage */}
                        <div className="text-white text-lg font-semibold mb-4">
                            {progress}%
                        </div>

                        {/* Loading Steps */}
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-gray-300 text-sm"
                        >
                            {loadingSteps[currentStep]}
                        </motion.div>
                    </div>

                    {/* Animated Dots */}
                    <div className="flex justify-center space-x-2">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                                className="w-3 h-3 bg-purple-400 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
