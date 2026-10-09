import apiClient from "../lib/apiClient";
import {
  CreateServiceData,
  Service,
  ServiceParams,
  UpdateServiceData,
} from "../types";

export function getAllServices(params?: ServiceParams) {
  return apiClient<Service[]>("/api/service-categories", {
    method: "GET",
    params,
  });
}

export function getSingleService(categoryId: string) {
  return apiClient<Service>(
    `/api/service-categories/${categoryId}`,
    {
      method: "GET",
    },
  );
}

export function createService(payload: CreateServiceData) {
  return apiClient<Service>("/api/service-categories", {
    method: "POST",
    body: payload,
  });
}

export function updateService(
  categoryId: string,
  payload: UpdateServiceData,
) {
  return apiClient<Service>(
    `/api/service-categories/${categoryId}`,
    {
      method: "PATCH",
      body: payload,
    },
  );
}

export function deleteService(categoryId: string) {
  return apiClient(
    `/api/service-categories/${categoryId}`,
    {
      method: "DELETE",
    },
  );
}