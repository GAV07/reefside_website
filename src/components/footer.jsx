import clsx from "clsx";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export const Footer = () => {
  const pages = [
    // {
    //   title: "Products",
    //   href: "#",
    // },
    // {
    //   title: "Incubator",
    //   href: "#",
    // },
    // {
    //   title: "Clients",
    //   href: "#",
    // },
    // {
    //   title: "Pricing",
    //   href: "#",
    // },
    // {
    //   title: "Blog",
    //   href: "#",
    // },
    // {
    //   title: "Privacy",
    //   href: "#",
    // },
    // {
    //   title: "Terms",
    //   href: "#",
    // },
  ];

  return (
    (<div
      className="border-t border-neutral-100 px-8 py-20 bg-white w-full relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <ul
            className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800 "
                  href="/products">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div
          className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-500 mb-8 sm:mb-0">
            &copy; Reefside Ventures LLC
          </p>
          <div className="flex gap-4">
            {/* <Link href="#">
              <IconBrandTwitter className="h-6 w-6 text-neutral-500" />
            </Link> */}
            <Link href="https://www.linkedin.com/company/reefside-ventures/?viewAsMember=true">
              <IconBrandLinkedin className="h-6 w-6 text-neutral-500" />
            </Link>
            {/* <Link href="#">
              <IconBrandGithub className="h-6 w-6 text-neutral-500" />
            </Link> */}
            {/* <Link href="#">
              <IconBrandInstagram className="h-6 w-6 text-neutral-500" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>)
  );
}

const GridLineHorizontal = ({
  className,
  offset
}) => {
  return (
    (<div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "200px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={clsx(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>)
  );
};

