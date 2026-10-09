export type ServiceStatus = "ACTIVE" | "INACTIVE";

export interface Service {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateServiceData {
  name: string;
  description: string;
  status?: ServiceStatus;
}

export interface UpdateServiceData {
  name?: string;
  description?: string;
  status?: ServiceStatus;
}

export interface ServiceParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: ServiceStatus;
  sortOrder?: "asc" | "desc";
}