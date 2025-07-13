"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Separate useEffect for mobile detection
    useEffect(() => {
        const checkIfMobile = () => {
            const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                window.innerWidth < 768 ||
                'ontouchstart' in window;
            setIsMobile(isMobileDevice);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Separate useEffect for cursor logic
    useEffect(() => {
        // Don't initialize cursor follower on mobile
        if (isMobile) {
            return;
        }
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners for interactive elements
        const interactiveElements = document.querySelectorAll('button, a, [role="button"]');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            if (!isMobile) {
                window.removeEventListener("mousemove", updateMousePosition);
                interactiveElements.forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            }
        };
    }, [isMobile]);

    // Don't render on mobile devices
    if (isMobile) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5,
                }}
            >
                <div className="w-full h-full bg-white rounded-full" />
            </motion.div>

            {/* Trailing cursor */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] border-2 border-purple-500 rounded-full mix-blend-difference"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 0.8 : 1,
                    opacity: isHovering ? 0.5 : 0.3,
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    mass: 1,
                }}
            />
        </>
    );
}
