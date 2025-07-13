"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxScrollProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    offset?: number;
    style?: React.CSSProperties;
}

export default function ParallaxScroll({
    children,
    speed = 0.5,
    className = "",
    direction = "up",
    offset = 0,
    style
}: ParallaxScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Create smooth spring animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate transform values based on direction
    const distance = speed * 100;
    
    const transformUp = useTransform(smoothProgress, [0, 1], [distance + offset, -distance + offset]);
    const transformDown = useTransform(smoothProgress, [0, 1], [-distance + offset, distance + offset]);
    const transformLeft = useTransform(smoothProgress, [0, 1], [distance + offset, -distance + offset]);
    const transformRight = useTransform(smoothProgress, [0, 1], [-distance + offset, distance + offset]);
    const transformDefault = useTransform(smoothProgress, [0, 1], [distance + offset, -distance + offset]);

    const transform = direction === "up" ? transformUp :
                     direction === "down" ? transformDown :
                     direction === "left" ? transformLeft :
                     direction === "right" ? transformRight :
                     transformDefault;

    const getMotionStyle = () => {
        if (direction === "left" || direction === "right") {
            return { x: transform };
        }
        return { y: transform };
    };

    return (
        <div ref={ref} className={className} style={style}>
            <motion.div style={getMotionStyle()}>
                {children}
            </motion.div>
        </div>
    );
}

// Parallax container for multiple layers
interface ParallaxLayerProps {
    children: React.ReactNode;
    speed: number;
    className?: string;
    zIndex?: number;
}

export function ParallaxLayer({ children, speed, className = "", zIndex = 0 }: ParallaxLayerProps) {
    return (
        <ParallaxScroll
            speed={speed}
            className={`absolute inset-0 ${className}`}
            style={{ zIndex }}
        >
            {children}
        </ParallaxScroll>
    );
}

// Advanced parallax container with multiple layers
interface ParallaxContainerProps {
    children: React.ReactNode;
    className?: string;
    height?: string;
}

export function ParallaxContainer({
    children,
    className = "",
    height = "100vh"
}: ParallaxContainerProps) {
    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{ height }}
        >
            {children}
        </div>
    );
}

// Floating elements with parallax
interface FloatingElementProps {
    children: React.ReactNode;
    speed?: number;
    rotationSpeed?: number;
    className?: string;
    initialX?: number;
    initialY?: number;
}

export function FloatingElement({
    children,
    speed = 0.3,
    rotationSpeed = 0.1,
    className = "",
    initialX = 0,
    initialY = 0
}: FloatingElementProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * rotationSpeed]);

    return (
        <motion.div
            ref={ref}
            className={`absolute ${className}`}
            style={{
                x: initialX,
                y: useTransform(y, (value) => value + initialY),
                rotate
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

// Text reveal with parallax
interface ParallaxTextProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
    stagger?: number;
}

export function ParallaxText({
    children,
    className = "",
    stagger = 0.1
}: ParallaxTextProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "start 0.2"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={className}>
            <motion.div
                style={{ y, opacity }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: stagger
                }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    );
}
