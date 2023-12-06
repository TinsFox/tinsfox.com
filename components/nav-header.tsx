"use client";

import Link from "next/link";
import {
  BookmarkMinus,
  Briefcase,
  FlaskConical,
  FolderDot,
  Home,
  Moon,
  Newspaper,
} from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

const nav = [
  {
    label: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    label: "Project",
    icon: <FolderDot />,
    href: "/projects",
  },
  {
    label: "Articles",
    icon: <Newspaper />,
    href: "/articles",
  },
  {
    label: "Lab",
    icon: <FlaskConical />,
    href: "/lab",
  },
  {
    label: "What's in my bag?",
    icon: <Briefcase />,
    href: "/whats-in-my-bag",
  },
  {
    label: "Bookmark",
    icon: <BookmarkMinus />,
    href: "/bookmarks",
  },
];
export function NavHeader() {
  const pathname = usePathname();
  return (
    <div>
      <div className="transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0s; transform: translateY(0px) fixed top-0 w-full z-50">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <ul className="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5">
            {nav.map((item) => {
              return (
                <div className="relative" key={item.label}>
                  <li>
                    <Link
                      href={item.href}
                      className="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400 text-primary-600 dark:text-primary-400"
                    >
                      {React.cloneElement(item.icon, {
                        color: pathname === item.href ? "#0C9488" : "#262626",
                        strokeWidth: 1.3,
                        className: "icon w-5 h-5 z-10 hover:text-[#0C9488]",
                      })}
                      {pathname === item.href ? (
                        <span className="absolute inset-x-1 -bottom-px h-px bg-[#0C9488]"></span>
                      ) : null}

                      <span className="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="sr-only">{item.label}</span>
                    </Link>
                  </li>
                </div>
              );
            })}
            <li className="flex-1"></li>
            <li>
              <div className="relative inline-flex">
                <button className="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400">
                  <Moon color="#262626" />
                  <span className="sr-only">Toggle theme</span>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-32"></div>
    </div>
  );
}
