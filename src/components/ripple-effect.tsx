"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface RippleEffectProps {
    children: React.ReactNode;
    className?: string;
    rippleColor?: string;
    duration?: number;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}

interface Ripple {
    id: number;
    x: number;
    y: number;
}

export default function RippleEffect({
    children,
    className = "",
    rippleColor = "rgba(255, 255, 255, 0.6)",
    duration = 600,
    disabled = false,
    onClick
}: RippleEffectProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple: Ripple = {
            id: Date.now(),
            x,
            y
        };

        setRipples(prev => [...prev, newRipple]);

        // Remove ripple after animation completes
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, duration);

        // Call custom onClick handler
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <div
            className={`relative overflow-hidden cursor-pointer ${className}`}
            onClick={createRipple}
        >
            {children}

            {/* Ripple animations */}
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    initial={{
                        scale: 0,
                        opacity: 1,
                        x: ripple.x,
                        y: ripple.y
                    }}
                    animate={{
                        scale: 4,
                        opacity: 0
                    }}
                    transition={{
                        duration: duration / 1000,
                        ease: "easeOut"
                    }}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        backgroundColor: rippleColor,
                        width: "20px",
                        height: "20px",
                        left: "-10px",
                        top: "-10px",
                        transformOrigin: "center"
                    }}
                />
            ))}
        </div>
    );
}

// Specialized ripple button component
export function RippleButton({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    onClick,
    ...props
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    [key: string]: unknown;
}) {
    const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500",
        secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500",
        outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
        ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <RippleEffect
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
            disabled={disabled}
            onClick={onClick}
            rippleColor={variant === "outline" || variant === "ghost" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.3)"}
            {...props}
        >
            {children}
        </RippleEffect>
    );
}
