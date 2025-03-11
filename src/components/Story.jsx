// app/StoryLayout.js
"use client"

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export default function StoryLayout({ children }) {
  // This is a client component that will receive server component as children
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  
  const links = [
    { title: "Introduction", href: "#introduction" },
    { title: "Built in Miami", href: "#built-in-miami" },
    { title: "Future as Reefside", href: "#future" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 md:flex-row md:px-8">
      {/* Table of Contents - Similar to Toc in your example */}
      <div className="sticky left-0 top-20 hidden max-w-xs flex-col self-start pr-10 md:flex">
        {links.map((link, index) => (
          <Link
            className="group/toc-link relative rounded-lg px-2 py-1 text-sm text-neutral-100 dark:text-neutral-200"
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}>
            {hovered === index && (
              <motion.span
                layoutId="toc-indicator"
                className="absolute left-0 top-0 h-full w-1 rounded-br-full rounded-tr-full bg-neutral-200 dark:bg-neutral-700" />
            )}
            <span
              className="inline-block transition duration-200 group-hover/toc-link:translate-x-1">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
      
      {/* Mobile menu button */}
      <div className="sticky right-2 top-20 flex w-full flex-col items-end justify-end self-start md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm dark:bg-neutral-900">
          <IconMenu className="h-6 w-6 text-black dark:text-white" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="mt-2 flex flex-col items-end rounded-3xl border border-neutral-100 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
              {links.map((link, index) => (
                <Link
                  className="group/toc-link relative rounded-lg px-2 py-1 text-right text-sm text-neutral-700 dark:text-neutral-200"
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}>
                  {hovered === index && (
                    <motion.span
                      layoutId="toc-indicator"
                      className="absolute left-0 top-0 h-full w-1 rounded-br-full rounded-tr-full bg-neutral-200 dark:bg-neutral-700" />
                  )}
                  <span
                    className="inline-block transition duration-200 group-hover/toc-link:translate-x-1">
                    {link.title}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Content area - This is where the server component (children) is rendered */}
      <div className="flex max-w-2xl flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}