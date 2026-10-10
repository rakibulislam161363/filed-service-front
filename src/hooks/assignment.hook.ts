
import { useQuery } from "@tanstack/react-query";

import { getAllAssignments } from "../api/assignment.api";

export function useGetAssignments() {
  return useQuery({
    queryKey: ["assignments"],
    queryFn: () => getAllAssignments(),
    retry: false,
  });
}