
import { useQuery } from "@tanstack/react-query";

import { getAllAssignments } from "../api/assignment.api";

export function useGetAssignments() {
  return useQuery({
    queryKey: ["assignments"],
    queryFn: () =>
      getAllAssignments({
        limit: 100,
        page: 1,
        sortBy: "createdAt",
        sortOrder: "desc",
      }),
    retry: false,
  });
}