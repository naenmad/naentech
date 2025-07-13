"use client";

import React from "react";
import { CodeBlock } from "./code-block";

// Enhanced CodeBlock with amazing effects
export function CodeBlockDemo() {
    const code = `{
  "name": "Ahmad Zulkarnaen",
  "title": "Computer Science Student",
  "university": "Singaperbangsa Karawang University",
  "semester": "5th Semester",
  "gpa": "3.79",
  "email": "azulkarnaen@outlook.com",
  "phone": "+62 851-8305-8315",
  "location": "Karawang, West Java, Indonesia",
  "github": "https://github.com/naenmad",
  "linkedin": "https://linkedin.com/in/naen",
  "website": "https://naen.tech",
  "skills": [
    "Frontend Development (HTML, CSS, JavaScript, React, TypeScript)",
    "Backend Development (Node.js, PHP, Python, Java)",
    "Mobile Development (Flutter)",
    "Database Management (MySQL, PostgreSQL)",
    "IT Support & Network Administration",
    "Linux System Administration"
  ],
  "languages": ["Indonesian (Native)", "English (Intermediate)"],
  "status": "Available for Opportunities",
  "lastUpdated": "2025-01-13"
}`;

    return (
        <div className="max-w-4xl mx-auto w-full">
            {/* Terminal Header */}
            <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                    <span className="text-gray-400 text-sm font-mono">~/portfolio/business_card.json</span>
                </div>
            </div>

            {/* Enhanced CodeBlock */}
            <div className="relative">
                <CodeBlock
                    language="json"
                    filename=""
                    highlightLines={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
                    code={code}
                />

                {/* Animated Cursor */}
                <div className="absolute bottom-4 right-4 w-2 h-5 bg-green-400 animate-pulse"></div>

                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 backdrop-blur-sm text-green-400 px-3 py-1 rounded text-xs font-mono">
                    ✨ Live Data
                </div>
            </div>
        </div>
    );
}
