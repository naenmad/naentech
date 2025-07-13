"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
}

export function ParallaxSection({
    children,
    className = "",
    speed = 0.5
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}

export function FloatingElements() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Floating Geometric Shapes */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-purple-500 opacity-10"
                    style={{
                        left: `${10 + (i * 12)}%`,
                        top: `${20 + (i * 8)}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3 + (i * 0.5),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                    }}
                />
            ))}

            {/* Floating Circles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`circle-${i}`}
                    className="absolute w-8 h-8 border border-pink-400 rounded-full opacity-20"
                    style={{
                        right: `${5 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                    }}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4 + (i * 0.3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
}
