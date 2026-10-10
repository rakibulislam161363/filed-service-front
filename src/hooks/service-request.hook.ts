import { useQuery } from "@tanstack/react-query";
import {
  getAllServiceRequests,
  getSingleServiceRequest,
} from "../api/service-request.api";

export function useGetAllServiceRequests() {
  return useQuery({
    queryKey: ["service-requests"],
    queryFn: getAllServiceRequests,
  });
}

export function useGetSingleServiceRequest(requestId: string) {
  return useQuery({
    queryKey: ["service-request", requestId],
    queryFn: () => getSingleServiceRequest(requestId),
    enabled: Boolean(requestId),
  });
}
