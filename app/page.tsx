"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [muscleGroups, setMuscleGroups] = useState<any[]>([]);

  console.log("TESTEO PA LOS PIBES Y PA LAS PIBAS")

  useEffect(() => {
    const getMuscleGroups = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/muscle-group`
        );
        console.log("res in dashboard: ", res)
        setMuscleGroups(res.data);
      } catch (error) {
        console.error("Error cargando grupos musculares:", error);
      }
    };

    getMuscleGroups();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start text-black">
        <h1 className="text-2xl font-bold mb-4">Grupos musculares</h1>
        <ul className="space-y-4 w-full">
          {muscleGroups.map((group) => (
            <li key={group.id} className="p-4 border rounded w-full">
              <h2 className="text-xl font-semibold">{group.name}</h2>
              <p className="text-sm text-gray-600">{group.description}</p>
              <ul className="mt-2 space-y-1">
                {group.exercises.map((ex: any) => (
                  <li key={ex.id} className="text-sm">
                    • {ex.name} ({ex.equipment})
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
