
"use client";

import { useEffect, useState } from "react";
import { ChevronDown, LoaderCircle } from "lucide-react";
import { getWorkouts } from "@/lib/api";
import type { IWorkout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

type SortBy = "duration" | "calories" | "rating";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("duration");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  return (
    <section id="library" className="scroll-mt-8 py-16">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase">
            THE LIBRARY
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sortBy" className="text-xs text-gray-400">
            Sort By
          </label>

          <div className="relative">
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortBy)
              }
              className="appearance-none rounded-md border border-white/10 bg-[#15181e] py-2 pl-4 pr-9 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-3"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex min-h-64 items-center justify-center">
          <LoaderCircle
            size={40}
            className="animate-spin text-[#ccff00]"
          />
        </div>
      ) : error ? (
        <p role="alert" className="py-16 text-center text-red-400">
          {error}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkoutLibrary;
