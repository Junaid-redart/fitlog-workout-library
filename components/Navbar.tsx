
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Workout", path: "/" },
    { name: "My Plan", path: "/my-plan" },
  ];

  return (
    <nav className="border-b border-white/10 bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="text-[#ccff00]" size={24} />
          <span className="text-xl font-black tracking-tight">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`rounded-full px-5 py-2 text-sm transition ${
                pathname === link.path
                  ? "bg-[#ccff00]/10 text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Counters */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs"
          >
            Plan
            <span className="rounded-full bg-[#ccff00] px-2 py-1 font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-xs"
          >
            Saved
            <span className="rounded-full border border-gray-500 px-2 py-1 text-white">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="dropdown dropdown-end md:hidden">
          <button
            type="button"
            tabIndex={0}
            aria-label="Open navigation"
            className="btn btn-ghost btn-square"
          >
            <Menu size={22} />
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-white/10 bg-[#171a20] p-2 shadow-xl"
          >
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/my-plan">Plan: 0 | Saved: 0</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
