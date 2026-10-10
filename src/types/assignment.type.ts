
export interface Assignment {
  id: string;
  serviceRequestId: string;
  technicianId: string;
  scheduledAt: string;
  notes?: string | null;
  status?: string;

  serviceRequest?: {
    id?: string;
    title?: string;
    description?: string;
    address?: string;
  };
}