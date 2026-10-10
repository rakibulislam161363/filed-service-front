import apiClient from "../lib/apiClient";
import type { ServiceRequest } from "../types/service-request.type";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export async function getAllServiceRequests(): Promise<ServiceRequest[]> {
  const response = await apiClient<ApiResponse<ServiceRequest[]>>(
    "/api/service-requests",
    {
      method: "GET",
    },
  );

  return response.data;
}

export async function getSingleServiceRequest(
  requestId: string,
): Promise<ServiceRequest> {
  const response = await apiClient<ApiResponse<ServiceRequest>>(
    `/api/service-requests/${requestId}`,
    {
      method: "GET",
    },
  );

  return response.data;
}

