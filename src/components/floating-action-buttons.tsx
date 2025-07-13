"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    PlusIcon,
    EnvelopeIcon,
    DocumentTextIcon,
    ChatBubbleLeftRightIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";

export function FloatingActionButtons() {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        {
            icon: EnvelopeIcon,
            label: "Contact Me",
            action: () => {
                const element = document.querySelector('#contact');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            },
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: DocumentTextIcon,
            label: "View CV",
            action: () => {
                // This will trigger the CV viewer
                const cvButton = document.querySelector('[data-cv-button]') as HTMLButtonElement;
                if (cvButton) {
                    cvButton.click();
                }
            },
            color: "from-green-500 to-green-600"
        },
        {
            icon: ChatBubbleLeftRightIcon,
            label: "Say Hello",
            action: () => {
                window.open('mailto:azulkarnaen@outlook.com?subject=Hello from your portfolio!', '_blank');
            },
            color: "from-yellow-500 to-yellow-600"
        }
    ];

    return (
        <div className="fixed bottom-6 left-6 z-50">
            {/* Action Buttons */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="flex flex-col gap-3 mb-3">
                        {actions.map((action, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, x: -20, scale: 0 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={action.action}
                                className={`group relative w-12 h-12 bg-gradient-to-r ${action.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                            >
                                <action.icon className="w-5 h-5" />

                                {/* Tooltip */}
                                <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {action.label}
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <PlusIcon className="w-6 h-6" />
                    )}
                </motion.div>

                {/* Pulse animation */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0, 0.7]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.button>
        </div>
    );
}
