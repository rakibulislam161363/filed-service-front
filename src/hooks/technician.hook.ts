
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addTechnicianSkill,
  removeTechnicianSkill,
} from "../api/technician.api";

export function useAddTechnicianSkill() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      technicianId,
      skillId,
    }: {
      technicianId: string;
      skillId: string;
    }) => addTechnicianSkill(technicianId, { skillId }),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["technicians"],
      });

      queryClient.invalidateQueries({
        queryKey: ["technician", variables.technicianId],
      });
    },
  });
}

export function useRemoveTechnicianSkill() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      technicianId,
      skillId,
    }: {
      technicianId: string;
      skillId: string;
    }) => removeTechnicianSkill(technicianId, skillId),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["technicians"],
      });

      queryClient.invalidateQueries({
        queryKey: ["technician", variables.technicianId],
      });
    },
  });
}

