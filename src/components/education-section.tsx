"use client";

import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function EducationSection() {
    const education = [
        {
            degree: "Bachelor of Computer Science",
            institution: "Singaperbangsa Karawang University",
            period: "2023 - Present",
            status: "5th Semester",
            gpa: "3.79",
            location: "Karawang, West Java, Indonesia",
            courses: [
                "Data Structures & Algorithms",
                "Web Development",
                "Mobile App Development",
                "Database Management Systems",
                "Network Administration",
                "Software Engineering",
                "Object-Oriented Programming",
                "Computer Networks"
            ]
        }
    ];

    const certifications = [
        {
            title: "Frontend Development",
            skills: "HTML, CSS, JavaScript, React, TypeScript"
        },
        {
            title: "Backend Development",
            skills: "Node.js, PHP, Python, Java"
        },
        {
            title: "Mobile Development",
            skills: "Flutter, Cross-platform Apps"
        },
        {
            title: "Database Management",
            skills: "MySQL, PostgreSQL, Database Design"
        },
        {
            title: "IT Support & Network Administration",
            skills: "Linux, Network Configuration, System Administration"
        }
    ];

    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Education & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        My academic journey and technical skills development
                    </p>
                </motion.div>

                {/* Education */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Academic Background</h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        <AcademicCapIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                                            {edu.institution}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                                            <div className="flex items-center gap-1">
                                                <CalendarDaysIcon className="w-4 h-4" />
                                                {edu.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPinIcon className="w-4 h-4" />
                                                {edu.location}
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                            <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-lg">
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {edu.status}
                                                </span>
                                            </div>
                                            <div className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-lg">
                                                <span className="text-sm font-medium text-green-800 dark:text-green-200">
                                                    GPA: {edu.gpa}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Courses:</h5>
                                    <div className="grid grid-cols-2 gap-2">
                                        {edu.courses.map((course, courseIndex) => (
                                            <div
                                                key={courseIndex}
                                                className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-slate-800 px-3 py-2 rounded-lg"
                                            >
                                                {course}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Expertise</h3>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        {cert.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {cert.skills}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Languages */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6"
                        >
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Languages</h4>
                            <div className="flex gap-4">
                                <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg">
                                    <span className="font-medium text-gray-900 dark:text-white">Indonesian</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">(Native)</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg">
                                    <span className="font-medium text-gray-900 dark:text-white">English</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">(Intermediate)</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
