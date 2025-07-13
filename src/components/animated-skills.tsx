"use client";

import React from "react";
import { motion } from "framer-motion";

interface Skill {
    name: string;
    level: number;
    icon?: string;
    color: string;
}

export function AnimatedSkills() {
    const skills: Skill[] = [
        { name: "React & TypeScript", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Node.js & Express", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "PHP & Laravel", level: 80, color: "from-purple-500 to-violet-500" },
        { name: "Flutter & Dart", level: 75, color: "from-blue-400 to-indigo-500" },
        { name: "Python & Django", level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "MySQL & PostgreSQL", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Linux System Admin", level: 78, color: "from-gray-500 to-slate-600" },
        { name: "Network Administration", level: 82, color: "from-teal-500 to-cyan-500" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent opacity-30 animate-shimmer transform -skew-x-12" />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Add shimmer animation to global CSS
// You can add this to your global CSS file:
// @keyframes shimmer {
//   0% { transform: translateX(-100%) skewX(-12deg); }
//   100% { transform: translateX(200%) skewX(-12deg); }
// }
// .animate-shimmer {
//   animation: shimmer 2s infinite;
// }
