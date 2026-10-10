
export interface Assignment {
  id: string;
  serviceRequestId: string;
  technicianId: string;
  scheduledAt: string;
  notes?: string | null;
  status?: string;
}