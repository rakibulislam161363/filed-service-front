
import apiClient from "../lib/apiClient";
import { Assignment } from "../types";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export function getAllAssignments(params?: {
  limit?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) {
  return apiClient<ApiResponse<Assignment[]>>(
    "/api/assignments/",
    {
      method: "GET",
      params,
    },
  ).then((response) => response.data);
}

export function getSingleAssignment(assignmentId: string) {
  return apiClient<ApiResponse<Assignment>>(
    `/api/assignments/${assignmentId}`,
    {
      method: "GET",
    },
  ).then((response) => response.data);
}