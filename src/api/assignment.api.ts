
import apiClient from "../lib/apiClient";
import { Assignment } from "../types";

export function getAllAssignments(params?: {
  limit?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) {
  return apiClient<Assignment[]>("/api/assignments/", {
    method: "GET",
    params,
  });
}

export function getSingleAssignment(assignmentId: string) {
  return apiClient<Assignment>(
    `/api/assignments/${assignmentId}`,
    {
      method: "GET",
    },
  );
}

export function updateAssignment(
  assignmentId: string,
  payload: Partial<Assignment>,
) {
  return apiClient<Assignment>(
    `/api/assignments/${assignmentId}`,
    {
      method: "PATCH",
      body: payload,
    },
  );
}

export function deleteAssignment(assignmentId: string) {
  return apiClient(`/api/assignments/${assignmentId}`, {
    method: "DELETE",
  });
}