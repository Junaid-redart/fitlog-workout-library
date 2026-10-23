"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Dumbbell,
    Clock3,
    Flame,
    Star,
    Check,
    X,
    ArrowUpRight,
    Bookmark,
} from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");

    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useWorkout();

    const workouts = activeTab === "plan" ? plan : saved;
    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    const totalMinutes = workouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">

            {/* Heading */}
            <h1 className="font-display text-5xl font-bold uppercase">
                MY PLAN
            </h1>

            <p className="mt-2 text-sm text-gray-400">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            {/* Summary Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <div className="rounded-lg border border-white/10 bg-[#15181e] p-6">
                    <Dumbbell className="text-[#ccff00]" size={22} />
                    <h2 className="mt-4 font-display text-4xl font-bold">
                        {workouts.length}
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                        Exercises
                    </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#15181e] p-6">
                    <Clock3 className="text-[#ccff00]" size={22} />
                    <h2 className="mt-4 font-display text-4xl font-bold">
                        {totalMinutes}
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                        Minutes
                    </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#15181e] p-6">
                    <Flame className="text-[#ccff00]" size={22} />
                    <h2 className="mt-4 font-display text-4xl font-bold">
                        {totalCalories}
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                        Calories
                    </p>
                </div>
            </div>


            {/* Tabs and Sorting */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">

                <div className="flex gap-6">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`border-b-2 pb-4 text-sm font-semibold ${activeTab === "plan"
                                ? "border-[#ccff00] text-[#ccff00]"
                                : "border-transparent text-gray-400"
                            }`}
                    >
                        Today&apos;s Plan ({plan.length})
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`border-b-2 pb-4 text-sm font-semibold ${activeTab === "saved"
                                ? "border-[#ccff00] text-[#ccff00]"
                                : "border-transparent text-gray-400"
                            }`}
                    >
                        Saved ({saved.length})
                    </button>
                </div>

                <div className="mb-3 flex items-center gap-3">
                    <label htmlFor="planSort" className="text-xs text-gray-400">
                        Sort By
                    </label>

                    <select
                        id="planSort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="rounded-md border border-white/10 bg-[#15181e] px-3 py-2 text-xs text-white"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>


            {/* Workout List */}
            <div className="mt-6 space-y-4">
                {workouts.length === 0 ? (
                    <div className="rounded-lg border border-white/10 bg-[#15181e] px-4 py-16 text-center">
                        <Dumbbell
                            size={38}
                            className="mx-auto text-[#ccff00]"
                        />

                        <h2 className="font-display mt-5 text-3xl font-bold uppercase">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/#library"
                            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
                        >
                            Go to workouts
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                ) : (
                  sortedWorkouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="flex flex-col gap-5 rounded-lg border border-white/10 bg-[#15181e] p-4 md:flex-row md:items-center"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-md md:h-28 md:w-36">
                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 144px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Workout Information */}
                            <div className="flex-1">
                                <h3 className="font-display text-2xl font-bold uppercase">
                                    {workout.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-400">
                                    {workout.equipment}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
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

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2">
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="rounded-md border border-white/20 px-4 py-2 text-xs font-semibold hover:bg-white/10"
                                >
                                    View Details
                                </Link>

                                {activeTab === "plan" ? (
                                    <button
                                        onClick={() => markAsDone(workout.id)}
                                        className="flex items-center gap-1 rounded-md bg-[#ccff00] px-4 py-2 text-xs font-bold text-black"
                                    >
                                        <Check size={14} />
                                        Mark as Done
                                    </button>
                                ) : (
                                    <Bookmark size={18} className="text-[#ccff00]" />
                                )}

                                <button
                                    onClick={() =>
                                        activeTab === "plan"
                                            ? removeFromPlan(workout.id)
                                            : removeFromSaved(workout.id)
                                    }
                                    aria-label={`Remove ${workout.name}`}
                                    className="rounded-md border border-white/20 p-2 text-gray-400 hover:text-red-400"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default MyPlan;
