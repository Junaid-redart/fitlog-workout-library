
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { IWorkout } from "@/types/workout";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="group h-full overflow-hidden rounded-lg border border-white/5 bg-[#15181e] transition hover:border-[#ccff00]/50">
        
        <div className="relative h-52 overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="font-display text-xl font-bold uppercase">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {workout.equipment}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-white/10 pt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock3 size={14} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={14} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <Star size={14} className="text-[#ccff00]" />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
