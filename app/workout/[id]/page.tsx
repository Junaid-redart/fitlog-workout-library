
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Plus, Bookmark } from "lucide-react";
import { getWorkoutById } from "@/lib/api";

interface DetailsPageProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({
  params,
}: DetailsPageProps) => {
  const { id } = await params;
  const workoutId = Number(id);

  if (!Number.isInteger(workoutId) || workoutId < 1) {
    notFound();
  }

  const workout = await getWorkoutById(workoutId);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">

      {/* Back Link */}
      <Link
        href="/#library"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ccff00]"
      >
        <ArrowLeft size={16} />
        Back to workouts
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left: Workout Image */}
        <div className="relative h-[450px] overflow-hidden rounded-xl bg-[#15181e] lg:h-[650px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Workout Information */}
        <div>
          <h1 className="font-display text-4xl font-bold uppercase md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {workout.description}
          </p>

          {/* Category Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-8 rounded-lg border border-white/10 bg-[#15181e] p-5">
            <h2 className="font-display mb-4 text-xl font-bold uppercase">
              Key Specs
            </h2>

            <div className="divide-y divide-white/10">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="text-xs font-semibold text-gray-400">
                    {spec.label}
                  </span>

                  <span className="text-right text-sm font-medium text-white">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="font-display text-2xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-gray-400">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Plus size={18} />
              Add to today&apos;s plan
            </button>

            <button
              type="button"
              disabled
              className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Bookmark size={18} />
              Save for later
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
