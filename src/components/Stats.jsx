"use client";
import { clsx } from "clsx";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Stats() {
  const items = [
    {
      description:
        "Cohort Size",
      value: 20,
      subtext: "startups",
    },
    {
      description: "Program Length",
      value: 8,
      subtext: "weeks",
    },
    {
      description:
        "Experts and Mentors",
      value: 20,
      subtext: "+",
    },
  ];
  return (
    (<section
      className="group/container relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl p-10 py-20">
      <div className="relative z-20">
        <h2
          className="text-center text-xl font-bold text-neutral-700 md:text-3xl">
          Reefside Incubator Spring 2025
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-800 md:text-base">
          Join us for 2 months for a program focused exclusively on building the traction and GTM strategy for
          for your company.
        </p>
        <div
          className="mx-auto mt-10 grid justify-items-center max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              key={"card" + index}
              className={clsx("group/card relative overflow-hidden rounded-lg")}>
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold text-neutral-700">
                  <AnimatedNumber value={item.value} />
                </p>
                <p
                  className="text-neutral-600 text-base">
                  {item.subtext}
                </p>
              </div>
              <p
                className="text-balance text-balance mt-4 text-base text-neutral-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>)
  );
}

function AnimatedNumber({
  value,
  initial = 0
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
