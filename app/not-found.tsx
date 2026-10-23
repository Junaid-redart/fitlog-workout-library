import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <Dumbbell size={45} className="text-[#ccff00]" />

      <h1 className="font-display mt-5 text-8xl font-bold text-[#ccff00]">
        404
      </h1>

      <h2 className="font-display mt-4 text-3xl font-bold uppercase">
        PAGE NOT FOUND
      </h2>

      <p className="mt-3 max-w-md text-sm text-gray-400">
        Looks like this page skipped leg day!
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 text-sm font-bold text-black hover:bg-lime-300"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}