
"use client";

import { Plus, Bookmark } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import type { IWorkout } from "@/types/workout";

const WorkoutActions = ({ workout }: { workout: IWorkout }) => {
  const { addToPlan, saveWorkout } = useWorkout();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black hover:bg-lime-300"
      >
        <Plus size={18} />
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveWorkout(workout)}
        className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/10"
      >
        <Bookmark size={18} />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
