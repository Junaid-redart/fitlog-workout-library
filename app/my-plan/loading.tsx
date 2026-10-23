import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center gap-3">
      <LoaderCircle className="animate-spin text-[#ccff00]" />
      <p className="text-gray-400">Loading workouts…</p>
    </div>
  );
}
