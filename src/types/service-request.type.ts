export type ServiceRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED"
  | string;

export interface ServiceRequestCategory {
  id: string;
  name: string;
  description?: string | null;
}

export interface ServiceRequest {
  id: string;
  title: string;
  description: string;
  address: string;
  status: ServiceRequestStatus;
  preferredDate: string | null;
  createdAt: string;
  categoryId: string;
  category: ServiceRequestCategory;
}

export interface ServiceRequestApiResponse {
  success: boolean;
  message: string;
  data: ServiceRequest[];
}