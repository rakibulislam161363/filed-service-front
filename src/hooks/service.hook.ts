import {
  createService,
  deleteService,
  getAllServices,
  getSingleService,
  updateService,
} from "../api";

import {
  CreateServiceData,
  ServiceParams,
  UpdateServiceData,
} from "../types";

import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";


export function useGetAllServices(params?: ServiceParams) {
  return useQuery({
    queryKey: ["services", params],
    queryFn: () => getAllServices(params),
  });
}

export function useSuspenseGetAllServices(params?: ServiceParams) {
  return useSuspenseQuery({
    queryKey: ["services", params],
    queryFn: () => getAllServices(params),
  });
}

export function useGetSingleService(categoryId: string) {
  return useQuery({
    queryKey: ["service", categoryId],
    queryFn: () => getSingleService(categoryId),
    enabled: !!categoryId,
  });
}

export function useCreateService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateServiceData) =>
      createService(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });
}

export function useUpdateService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      categoryId,
      payload,
    }: {
      categoryId: string;
      payload: UpdateServiceData;
    }) => updateService(categoryId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });

      queryClient.invalidateQueries({
        queryKey: ["service", variables.categoryId],
      });
    },
  });
}

export function useDeleteService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (categoryId: string) =>
      deleteService(categoryId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
  });
}