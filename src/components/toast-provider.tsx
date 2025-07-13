"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XCircleIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
}

interface ToastContextType {
    showToast: (toast: Omit<Toast, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [idCounter, setIdCounter] = useState(0);

    const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
        const id = `toast-${Date.now()}-${idCounter}`;
        setIdCounter(prev => prev + 1);
        const newToast = { ...toast, id };

        setToasts(prev => [...prev, newToast]);

        // Auto remove after duration
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, toast.duration || 5000);
    }, [idCounter]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const getIcon = (type: ToastType) => {
        switch (type) {
            case 'success':
                return CheckCircleIcon;
            case 'error':
                return XCircleIcon;
            case 'warning':
                return ExclamationTriangleIcon;
            case 'info':
                return InformationCircleIcon;
            default:
                return InformationCircleIcon;
        }
    };

    const getColors = (type: ToastType) => {
        switch (type) {
            case 'success':
                return 'from-green-500 to-emerald-500 text-white';
            case 'error':
                return 'from-red-500 to-rose-500 text-white';
            case 'warning':
                return 'from-yellow-500 to-orange-500 text-white';
            case 'info':
                return 'from-blue-500 to-indigo-500 text-white';
            default:
                return 'from-gray-500 to-slate-500 text-white';
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-[9999] space-y-2">
                <AnimatePresence>
                    {toasts.map((toast) => {
                        const Icon = getIcon(toast.type);
                        return (
                            <motion.div
                                key={toast.id}
                                initial={{ opacity: 0, x: 300, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 300, scale: 0.8 }}
                                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                className={`max-w-sm w-full bg-gradient-to-r ${getColors(toast.type)} rounded-lg shadow-lg overflow-hidden`}
                            >
                                <div className="p-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="ml-3 flex-1">
                                            <h3 className="text-sm font-medium">{toast.title}</h3>
                                            {toast.message && (
                                                <p className="mt-1 text-sm opacity-90">{toast.message}</p>
                                            )}
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => removeToast(toast.id)}
                                            className="ml-4 inline-flex text-white hover:text-gray-200 transition-colors"
                                        >
                                            <XMarkIcon className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <motion.div
                                    initial={{ scaleX: 1 }}
                                    animate={{ scaleX: 0 }}
                                    transition={{ duration: (toast.duration || 5000) / 1000, ease: "linear" }}
                                    className="h-1 bg-white bg-opacity-30 origin-left"
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}
