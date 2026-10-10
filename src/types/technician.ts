export interface AddTechnicianSkillPayload {
  skillId: string;
}

export interface Technician {
  id: string;
  userId: string;
  skills?: {
    id: string;
    name: string;
  }[];
}