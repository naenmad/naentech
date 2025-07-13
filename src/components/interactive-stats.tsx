"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
    AcademicCapIcon, 
    CodeBracketIcon, 
    ClockIcon, 
    StarIcon,
    TrophyIcon
} from "@heroicons/react/24/outline";

interface StatItem {
    label: string;
    value: number;
    suffix: string;
    icon: React.ReactNode;
    color: string;
    description: string;
}

export function InteractiveStats() {
    const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);

    const stats: StatItem[] = useMemo(() => [
        {
            label: "GPA",
            value: 3.79,
            suffix: "/4.0",
            icon: <AcademicCapIcon className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            description: "Current Academic Performance"
        },
        {
            label: "Projects",
            value: 25,
            suffix: "+",
            icon: <CodeBracketIcon className="w-8 h-8" />,
            color: "from-green-500 to-emerald-500",
            description: "Completed Projects"
        },
        {
            label: "Study Hours",
            value: 1200,
            suffix: "+",
            icon: <ClockIcon className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
            description: "Total Study Hours This Year"
        },
        {
            label: "Skills",
            value: 15,
            suffix: "+",
            icon: <StarIcon className="w-8 h-8" />,
            color: "from-yellow-500 to-orange-500",
            description: "Technical Skills Mastered"
        }
    ], []);

    useEffect(() => {
        const observers = stats.map((stat, index) => {
            return new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        animateCounter(index, stat.value);
                    }
                },
                { threshold: 0.5 }
            );
        });

        const elements = document.querySelectorAll('.stat-item');
        elements.forEach((el, index) => {
            if (observers[index]) {
                observers[index].observe(el);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [stats]);

    const animateCounter = (index: number, targetValue: number) => {
        let startValue = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);

        const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= targetValue) {
                startValue = targetValue;
                clearInterval(timer);
            }

            setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = startValue;
                return newCounters;
            });
        }, 16);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="stat-item group relative"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 card-hover">
                        {/* Icon with Gradient Background */}
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">
                                {stat.icon}
                            </div>
                        </div>

                        {/* Value */}
                        <div className="mb-2">
                            <span className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.label === "GPA"
                                    ? counters[index].toFixed(2)
                                    : Math.floor(counters[index])
                                }
                            </span>
                            <span className="text-lg text-gray-500 dark:text-gray-400 ml-1">
                                {stat.suffix}
                            </span>
                        </div>

                        {/* Label */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {stat.label}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {stat.description}
                        </p>

                        {/* Hover Glow Effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`} />

                        {/* Achievement Badge for High Values */}
                        {((stat.label === "GPA" && counters[index] >= 3.5) ||
                            (stat.label !== "GPA" && counters[index] >= stat.value * 0.8)) && (
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                                >
                                    <TrophyIcon className="w-4 h-4 text-white" />
                                </motion.div>
                            )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
