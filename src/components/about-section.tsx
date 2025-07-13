"use client";

import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, AcademicCapIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export function AboutSection() {
    const skills = [
        { name: "HTML", years: 4 },
        { name: "CSS", years: 4 },
        { name: "JavaScript", years: 3 },
        { name: "TypeScript", years: 2 },
        { name: "React", years: 2 },
        { name: "Next.js", years: 1 },
        { name: "Node.js", years: 2 },
        { name: "PHP", years: 3 },
        { name: "Python", years: 2 },
        { name: "Java", years: 2 },
        { name: "Flutter", years: 1 },
        { name: "MySQL", years: 3 },
        { name: "PostgreSQL", years: 2 },
        { name: "Git", years: 3 },
        { name: "Linux", years: 2 },
        { name: "Network Administration", years: 2 },
    ];

    const achievements = [
        {
            icon: AcademicCapIcon,
            title: "GPA 3.79",
            description: "Current academic performance"
        },
        {
            icon: CodeBracketIcon,
            title: "Full Stack Developer",
            description: "Frontend & Backend expertise"
        },
        {
            icon: LightBulbIcon,
            title: "Mobile Developer",
            description: "Flutter & native apps"
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Passionate about technology and always eager to learn new things
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                I&apos;m a 5th semester Computer Science student at Singaperbangsa Karawang University
                                with expertise in full-stack web development, mobile app development, and IT support.
                                My journey started with curiosity about technology and has evolved into comprehensive
                                skills across multiple programming languages and frameworks.
                            </p>
                            <p>
                                Currently maintaining a GPA of 3.79, I specialize in both frontend technologies
                                (HTML, CSS, JavaScript, React, TypeScript) and backend development (Node.js, PHP, Python, Java).
                                I also have experience with mobile development using Flutter and database management
                                with MySQL and PostgreSQL.
                            </p>
                            <p>
                                Beyond programming, I have practical experience in IT support, network administration,
                                and Linux systems. I&apos;m passionate about continuous learning and staying updated with
                                the latest technology trends while building practical solutions that make a difference.
                            </p>
                        </div>

                        {/* Achievements */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
                                >
                                    <achievement.icon className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                                    <h4 className="font-semibold text-white">{achievement.title}</h4>
                                    <p className="text-sm text-gray-300">{achievement.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-white">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            {skill.years} {skill.years === 1 ? 'year' : 'years'}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${Math.min(skill.years * 20, 100)}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
