"use client";

import {
ArrowRight,
CalendarDays,
FileText,
Plus,
Search,
Wrench,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetAllServiceRequests } from "@/src/hooks/service-request.hook";

const filters = [
"All",
"Pending",
"Approved",
"Assigned",
"In Progress",
"Completed",
"Rejected",
"Cancelled",
];

function formatStatus(status: string) {
return status.replaceAll("_", " ").toLowerCase().replace(/\b\w/g, (char) =>
char.toUpperCase(),
);
}

function getStatusVariant(status: string) {
switch (status) {
case "COMPLETED":
return "default";
case "APPROVED":
case "IN_PROGRESS":
case "ASSIGNED":
return "secondary";
case "REJECTED":
case "CANCELLED":
return "destructive";
default:
return "outline";
}
}

function formatDate(date: string | null | undefined) {
if (!date) return "Not scheduled";

const parsedDate = new Date(date);

if (Number.isNaN(parsedDate.getTime())) {
return "Not available";
}

return parsedDate.toLocaleDateString("en-BD", {
day: "2-digit",
month: "short",
year: "numeric",
});
}

export default function MyRequestsPage() {
const [activeFilter, setActiveFilter] = useState("All");
const [search, setSearch] = useState("");

const {
data: requests,
isLoading,
isError,
error,
refetch,
isFetching,
} = useGetAllServiceRequests();

const serviceRequests = requests ?? [];

const filteredRequests = serviceRequests.filter((request) => {
const status = request.status.toUpperCase();
const normalizedFilter = activeFilter.toUpperCase().replaceAll(" ", "_");


const matchesFilter =
  activeFilter === "All" || status === normalizedFilter;

const searchText = search.toLowerCase();

const matchesSearch =
  (request.category?.name ?? "").toLowerCase().includes(searchText) ||
  request.title.toLowerCase().includes(searchText) ||
  request.id.toLowerCase().includes(searchText) ||
  request.description.toLowerCase().includes(searchText);

return matchesFilter && matchesSearch;


});

return ( <main className="min-h-screen bg-muted/30"> <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
{/* Header */} <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"> <div> <p className="mb-1 text-sm font-medium text-muted-foreground">
Customer Dashboard </p>

```
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          My Requests
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View and track all your service requests.
        </p>
      </div>

      <Button>
        <Link className="flex" href="/dashboard/requests/create">
          <Plus className="mr-2 size-4" />
          Create Request
        </Link>
      </Button>
    </div>

    {/* Loading */}
    {isLoading && (
      <Card className="mb-6">
        <CardContent className="p-6 text-sm text-muted-foreground">
          Loading your service requests...
        </CardContent>
      </Card>
    )}

    {/* Error */}
    {isError && (
      <Card className="mb-6">
        <CardContent className="flex flex-col items-start gap-3 p-6">
          <p className="text-sm text-destructive">
            {error instanceof Error
              ? error.message
              : "Failed to load service requests."}
          </p>

          <Button
            variant="outline"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            {isFetching ? "Retrying..." : "Try Again"}
          </Button>
        </CardContent>
      </Card>
    )}

    {/* Search + Filters */}
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search requests..."
              className="pl-9"
              disabled={isLoading || isError}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                disabled={isLoading || isError}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Request Count */}
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h2 className="font-semibold">Service Requests</h2>

        <p className="text-sm text-muted-foreground">
          {isLoading
            ? "Loading requests..."
            : `${filteredRequests.length} request${
                filteredRequests.length !== 1 ? "s" : ""
              } found`}
        </p>
      </div>

      {!isLoading && !isError && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </Button>
      )}
    </div>

    {/* Requests */}
    {!isLoading && !isError && filteredRequests.length > 0 ? (
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <Card
            key={request.id}
            className="transition-shadow hover:shadow-md"
          >
            <CardContent className="p-5">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Request Info */}
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="size-5 text-primary" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">
                        {request.category?.name ?? "Service"}
                      </h3>

                      <Badge variant={getStatusVariant(request.status)}>
                        {formatStatus(request.status)}
                      </Badge>
                    </div>

                    <p className="mt-1 break-all text-sm text-muted-foreground">
                      {request.id}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {request.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="size-3.5" />
                        Requested: {formatDate(request.createdAt)}
                      </span>

                      <span>
                        Preferred: {formatDate(request.preferredDate)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-end border-t pt-4 lg:shrink-0 lg:border-t-0 lg:pt-0">
                  <Button variant="outline" size="sm" >
                    <Link href={`/dashboard/requests/${request.id}`}>
                      Details
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    ) : null}

    {/* Empty State */}
    {!isLoading && !isError && filteredRequests.length === 0 && (
      <Card>
        <CardContent className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-4 rounded-full bg-muted p-4">
            <FileText className="size-7 text-muted-foreground" />
          </div>

          <h3 className="text-lg font-semibold">
            {serviceRequests.length === 0
              ? "No requests yet"
              : "No requests found"}
          </h3>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {serviceRequests.length === 0
              ? "You have not created any service requests yet. Create your first request to see it here."
              : "No service requests match your search or selected filter."}
          </p>

          {serviceRequests.length === 0 ? (
            <Button className="mt-5">
              <Link className="flex" href="/dashboard/requests/create">
                <Plus className="mr-2 size-4" />
                Create Request
              </Link>
            </Button>
          ) : (
            <Button
              className="mt-5"
              variant="outline"
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
            >
              Clear Filters
            </Button>
          )}
        </CardContent>
      </Card>
    )}
  </div>
</main>


);
}
