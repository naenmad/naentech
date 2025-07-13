"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageTransition({
    children,
    className = ""
}: PageTransitionProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoaded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        staggerChildren: 0.1
                    }}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Staggered children wrapper
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger item
interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function StaggerItem({
    children,
    className = "",
    delay = 0
}: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Fade in on scroll wrapper
interface FadeInScrollProps {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

export function FadeInScroll({
    children,
    className = "",
    direction = "up",
    distance = 50
}: FadeInScrollProps) {
    const getInitialPos = () => {
        switch (direction) {
            case "up": return { y: distance };
            case "down": return { y: -distance };
            case "left": return { x: distance };
            case "right": return { x: -distance };
            default: return { y: distance };
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...getInitialPos() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Scale in animation
interface ScaleInProps {
    children: React.ReactNode;
    className?: string;
    scale?: number;
    delay?: number;
}

export function ScaleIn({
    children,
    className = "",
    scale = 0.8,
    delay = 0
}: ScaleInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay
            }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Slide in from direction
interface SlideInProps {
    children: React.ReactNode;
    className?: string;
    direction: "left" | "right" | "up" | "down";
    distance?: number;
    delay?: number;
}

export function SlideIn({
    children,
    className = "",
    direction,
    distance = 100,
    delay = 0
}: SlideInProps) {
    const getInitialPos = () => {
        switch (direction) {
            case "left": return { x: -distance };
            case "right": return { x: distance };
            case "up": return { y: -distance };
            case "down": return { y: distance };
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...getInitialPos() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay
            }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
