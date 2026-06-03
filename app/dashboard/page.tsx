"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [muscleGroups, setMuscleGroups] = useState<any[]>([]);

  console.log("musclegroups: ", muscleGroups)

  useEffect(() => {
    const getMuscleGroups = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/muscle-group`,
        );
        setMuscleGroups(res.data);
      } catch (error) {
        console.error("Error cargando grupos musculares:", error);
      }
    };

    getMuscleGroups();
  }, []);

  return (
    <div>
      <h1>DashboardPage</h1>
    </div>
  );
}
