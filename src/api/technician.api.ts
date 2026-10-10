import apiClient from "../lib/apiClient";

import {
  AddTechnicianSkillPayload,
  Technician,
} from "../types";

export function addTechnicianSkill(
  technicianId: string,
  payload: AddTechnicianSkillPayload,
) {
  return apiClient<Technician>(
    `/api/technicians/${technicianId}/skills`,
    {
      method: "POST",
      body: payload,
    },
  );
}

export function removeTechnicianSkill(
  technicianId: string,
  skillId: string,
) {
  return apiClient<Technician>(
    `/api/technicians/${technicianId}/skills/${skillId}`,
    {
      method: "DELETE",
    },
  );
}