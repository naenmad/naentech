"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentTextIcon, XMarkIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export function CVViewer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* CV Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cv-button="true"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
                <DocumentTextIcon className="w-5 h-5" />
                View CV
            </motion.button>

            {/* CV Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    CV - Ahmad Zulkarnaen
                                </h3>
                                <div className="flex items-center gap-3">
                                    <motion.a
                                        href="/CV Ahmad Zulkarnaen.pdf"
                                        download
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                                    >
                                        <ArrowDownTrayIcon className="w-4 h-4" />
                                        Download
                                    </motion.a>
                                    <motion.button
                                        onClick={() => setIsOpen(false)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all"
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* PDF Viewer */}
                            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
                                <iframe
                                    src="/CV Ahmad Zulkarnaen.pdf#toolbar=1&navpanes=0&scrollbar=1"
                                    className="w-full h-[600px] border rounded-lg"
                                    title="CV Ahmad Zulkarnaen"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
