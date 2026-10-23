
import Link from "next/link";
import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-8">

        <Link href="/" className="flex items-center gap-2">
          <Dumbbell size={18} className="text-[#ccff00]" />
          <span className="text-sm font-black">FITLOG</span>
        </Link>

        <p className="text-center text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
