
import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <Hero />
      <WorkoutLibrary />
    </div>
  );
}
