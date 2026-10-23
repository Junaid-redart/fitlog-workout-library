"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { IWorkout } from "@/types/workout";
import { toast } from "react-toastify";

interface WorkoutContextType {
  plan: IWorkout[];
  saved: IWorkout[];
  addToPlan: (workout: IWorkout) => void;
  saveWorkout: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | null>(null);


const getStoredWorkouts = (key: string): IWorkout[] => {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem(key);
    const workouts = data ? JSON.parse(data) : [];

    return Array.isArray(workouts) ? workouts : [];
  } catch {
    return [];
  }
};

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>(() =>
    getStoredWorkouts("fitlogPlan")
  );

  const [saved, setSaved] = useState<IWorkout[]>(() =>
    getStoredWorkouts("fitlogSaved")
  );

  
  useEffect(() => {
    localStorage.setItem("fitlogPlan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlogSaved", JSON.stringify(saved));
  }, [saved]);

 
  const addToPlan = (workout: IWorkout) => {
    const exists = plan.find((item) => item.id === workout.id);

    if (exists) {
      toast.error("Workout already added!");
      return;
    }

    if (plan.length >= 5) {
      toast.error("You can add only 5 workouts!");
      return;
    }

    setPlan([...plan, workout]);
    toast.success("Added to today's plan!");
  };

 
  const saveWorkout = (workout: IWorkout) => {
    const exists = saved.find((item) => item.id === workout.id);

    if (exists) {
      toast.info("Workout already saved!");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Workout saved!");
  };

  
  const removeFromPlan = (id: number) => {
    const updatedPlan = plan.filter((item) => item.id !== id);

    setPlan(updatedPlan);
    toast.success("Workout removed from plan!");
  };

  
  const removeFromSaved = (id: number) => {
    const updatedSaved = saved.filter((item) => item.id !== id);

    setSaved(updatedSaved);
    toast.success("Workout removed from saved!");
  };


  const markAsDone = (id: number) => {
    const updatedPlan = plan.filter((item) => item.id !== id);

    setPlan(updatedPlan);
    toast.success("Workout completed! Great job!");
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};


export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkout must be used inside WorkoutProvider");
  }

  return context;
};
