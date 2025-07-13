"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Image from "next/image";

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
        tags: string[];
        githubUrl: string;
        liveUrl: string;
        featured: boolean;
    };
    index: number;
}

export function EnhancedProjectCard({ project, index }: ProjectCardProps) {
    const [isLiked, setIsLiked] = React.useState(false);
    // Use project ID to generate consistent likes count
    const [likes, setLikes] = React.useState(20 + (project.id * 7) % 80);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover ${project.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}
        >
            {/* Featured Badge */}
            {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                </div>
            )}

            {/* Like Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
            >
                {isLiked ? (
                    <HeartIconSolid className="w-5 h-5 text-red-500" />
                ) : (
                    <HeartIcon className="w-5 h-5" />
                )}
            </motion.button>

            {/* Project Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-white bg-opacity-90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-opacity-100 transition-all duration-300"
                    >
                        <CodeBracketIcon className="w-4 h-4" />
                        Code
                    </motion.a>
                    <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 bg-purple-500 bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-opacity-100 transition-all duration-300"
                    >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        Live
                    </motion.a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title and Stats */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <HeartIcon className="w-4 h-4" />
                        <span>{likes}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date().getFullYear()}
                    </span>
                    <div className="flex gap-2">
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                        >
                            <CodeBracketIcon className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                        >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
        </motion.div>
    );
}
