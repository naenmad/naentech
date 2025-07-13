"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "Full-Stack Web Application",
            description: "A comprehensive web application built with React frontend and Node.js backend, featuring user authentication, real-time data, and responsive design.",
            image: "/api/placeholder/400/300",
            tags: ["React", "Node.js", "TypeScript", "MySQL"],
            githubUrl: "https://github.com/naenmad",
            liveUrl: "https://naen.tech",
            featured: true
        },
        {
            id: 2,
            title: "Mobile App with Flutter",
            description: "Cross-platform mobile application developed with Flutter, featuring native performance, beautiful UI, and seamless user experience.",
            image: "/api/placeholder/400/300",
            tags: ["Flutter", "Dart", "Firebase", "REST API"],
            githubUrl: "https://github.com/naenmad",
            liveUrl: "https://naen.tech",
            featured: true
        },
        {
            id: 3,
            title: "PHP Web System",
            description: "Dynamic web application built with PHP and MySQL, featuring admin panel, user management, and data visualization.",
            image: "/api/placeholder/400/300",
            tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
            githubUrl: "https://github.com/naenmad",
            liveUrl: "https://naen.tech",
            featured: false
        },
        {
            id: 4,
            title: "Python Data Analytics",
            description: "Data analysis and visualization tool built with Python, featuring automated reports and interactive dashboards.",
            image: "/api/placeholder/400/300",
            tags: ["Python", "Pandas", "Matplotlib", "PostgreSQL"],
            githubUrl: "https://github.com/naenmad",
            liveUrl: "https://naen.tech",
            featured: false
        },
        {
            id: 5,
            title: "Java Desktop Application",
            description: "Desktop application built with Java, featuring GUI interface, database connectivity, and file management system.",
            image: "/api/placeholder/400/300",
            tags: ["Java", "Swing", "MySQL", "JDBC"],
            githubUrl: "https://github.com/naenmad",
            liveUrl: "https://naen.tech",
            featured: false
        },
        {
            id: 6,
            title: "Network Administration Tools",
            description: "Set of tools and scripts for network monitoring, administration, and automation using Linux and shell scripting.",
            image: "/api/placeholder/400/300",
            tags: ["Linux", "Shell Script", "Network Tools", "Monitoring"],
            githubUrl: "https://github.com/naenmad",
            liveUrl: "https://naen.tech",
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A collection of my best work showcasing my skills in web development and problem-solving
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {projects.filter(project => project.featured).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold opacity-50">
                                        {project.title.split(' ').map(word => word[0]).join('')}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                                    >
                                        <CodeBracketIcon className="w-4 h-4" />
                                        Code
                                    </motion.a>
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(project => !project.featured).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                                    <div className="text-white text-4xl font-bold opacity-50">
                                        {project.title.split(' ').map(word => word[0]).join('')}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                                            +{project.tags.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <CodeBracketIcon className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                                    >
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/naenmad"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                        View All Projects on GitHub
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
