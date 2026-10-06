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

const requests = [
  {
    id: "REQ-0012",
    service: "AC Repair",
    description: "AC is not cooling properly.",
    date: "Oct 05, 2026",
    status: "Pending",
    amount: "৳1,200",
  },
  {
    id: "REQ-0011",
    service: "Plumbing Service",
    description: "Kitchen sink water leakage.",
    date: "Oct 03, 2026",
    status: "In Progress",
    amount: "৳800",
  },
  {
    id: "REQ-0010",
    service: "Electrical Repair",
    description: "Bedroom fan is not working.",
    date: "Sep 29, 2026",
    status: "Completed",
    amount: "৳1,500",
  },
  {
    id: "REQ-0009",
    service: "Home Cleaning",
    description: "Need complete home cleaning.",
    date: "Sep 25, 2026",
    status: "Cancelled",
    amount: "৳600",
  },
  {
    id: "REQ-0008",
    service: "Washing Machine Repair",
    description: "Washing machine making unusual noise.",
    date: "Sep 20, 2026",
    status: "Completed",
    amount: "৳1,000",
  },
];

const filters = [
  "All",
  "Pending",
  "In Progress",
  "Completed",
  "Cancelled",
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed":
      return "default";
    case "In Progress":
      return "secondary";
    case "Cancelled":
      return "destructive";
    default:
      return "outline";
  }
}

export default function MyRequestsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredRequests = requests.filter((request) => {
    const matchesFilter =
      activeFilter === "All" || request.status === activeFilter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      request.service.toLowerCase().includes(searchText) ||
      request.id.toLowerCase().includes(searchText) ||
      request.description.toLowerCase().includes(searchText);

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-medium text-muted-foreground">
              Customer Dashboard
            </p>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              My Requests
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              View and track all your service requests.
            </p>
          </div>

          <Button>
            <Link href="/dashboard/requests/create">
              <Plus className="mr-2 size-4" />
              Create Request
            </Link>
          </Button>
        </div>

        {/* Search + Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-sm">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search requests..."
                  className="pl-9"
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
              {filteredRequests.length} request
              {filteredRequests.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Requests */}
        {filteredRequests.length > 0 ? (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="transition-shadow hover:shadow-md">
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
                            {request.service}
                          </h3>

                          <Badge variant={getStatusVariant(request.status)}>
                            {request.status}
                          </Badge>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {request.id}
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {request.description}
                        </p>

                        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <CalendarDays className="size-3.5" />
                          {request.date}
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-between gap-4 border-t pt-4 lg:border-t-0 lg:pt-0">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Amount
                        </p>

                        <p className="mt-1 font-semibold">
                          {request.amount}
                        </p>
                      </div>

                      <Button variant="outline" size="sm">
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
        ) : (
          /* Empty State */
          <Card>
            <CardContent className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <div className="mb-4 rounded-full bg-muted p-4">
                <FileText className="size-7 text-muted-foreground" />
              </div>

              <h3 className="text-lg font-semibold">
                No requests found
              </h3>

              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                We couldn't find any service requests matching your search
                or selected filter.
              </p>

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
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}