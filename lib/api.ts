import type { IWorkout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";


export const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return Array.isArray(data) ? data : data.value;
};


export const getWorkoutById = async (
  id: number
): Promise<IWorkout | null> => {
  const res = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const data = await res.json();
  const workout = data.value ?? data;

  if (Array.isArray(workout)) {
    return workout.find((item: IWorkout) => item.id === id) ?? null;
  }

  if (!workout || workout.id !== id) {
    return null;
  }

  return workout as IWorkout;
};
