import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <LoaderCircle
        size={40}
        className="animate-spin text-[#ccff00]"
      />
      <p className="text-sm text-gray-400">
        Loading workouts…
      </p>
    </div>
  );
}
