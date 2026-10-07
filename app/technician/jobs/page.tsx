"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  UserRound,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const jobs = [
  {
    id: "JOB-0026",
    service: "Electrical Repair",
    description: "Bedroom fan is not working properly.",
    customer: "Karim Hasan",
    date: "Oct 07, 2026",
    time: "02:00 PM - 04:00 PM",
    location: "Sonadanga, Khulna",
    amount: "৳1,500",
    status: "Pending",
  },
  {
    id: "JOB-0025",
    service: "AC Repair",
    description: "AC is not cooling properly.",
    customer: "Rahim Ahmed",
    date: "Oct 07, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Phultala, Khulna",
    amount: "৳1,200",
    status: "In Progress",
  },
  {
    id: "JOB-0024",
    service: "Plumbing Service",
    description: "Kitchen sink water leakage.",
    customer: "Nusrat Jahan",
    date: "Oct 06, 2026",
    time: "11:00 AM - 01:00 PM",
    location: "Khalishpur, Khulna",
    amount: "৳800",
    status: "Completed",
  },
  {
    id: "JOB-0023",
    service: "AC Repair",
    description: "Outdoor unit making unusual noise.",
    customer: "Sakib Khan",
    date: "Oct 05, 2026",
    time: "03:00 PM - 05:00 PM",
    location: "Boyra, Khulna",
    amount: "৳1,200",
    status: "Completed",
  },
  {
    id: "JOB-0022",
    service: "Washing Machine Repair",
    description: "Washing machine making unusual noise.",
    customer: "Mim Akter",
    date: "Oct 04, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Daulatpur, Khulna",
    amount: "৳1,000",
    status: "Completed",
  },
  {
    id: "JOB-0021",
    service: "Electrical Repair",
    description: "Main switch has a power issue.",
    customer: "Tanvir Ahmed",
    date: "Oct 03, 2026",
    time: "02:00 PM - 04:00 PM",
    location: "Nirala, Khulna",
    amount: "৳1,500",
    status: "Cancelled",
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
    case "Pending":
      return "outline";
    case "Cancelled":
      return "destructive";
    default:
      return "outline";
  }
}

export default function TechnicianJobsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.id.toLowerCase().includes(search.toLowerCase()) ||
        job.service.toLowerCase().includes(search.toLowerCase()) ||
        job.customer.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" || job.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Technician
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                My Jobs
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                View and manage all jobs assigned to you.
              </p>
            </div>

            <Button variant="outline">
              <Link href="/technician">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </section>

        {/* Search + Filters */}
        <Card>
          <CardContent className="space-y-4 p-4 sm:p-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by job ID, service, customer or location..."
                className="pl-9"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  type="button"
                  size="sm"
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Result Count */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "Job" : "Jobs"}
            </h2>

            <p className="text-sm text-muted-foreground">
              {activeFilter === "All"
                ? "All assigned jobs"
                : `${activeFilter} jobs`}
            </p>
          </div>
        </div>

        {/* Jobs */}
        {filteredJobs.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {job.id}
                      </p>

                      <CardTitle className="mt-1 flex items-center gap-2 text-lg">
                        <Wrench className="size-5" />
                        {job.service}
                      </CardTitle>
                    </div>

                    <Badge variant={getStatusVariant(job.status)}>
                      {job.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {job.description}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-muted p-2">
                        <UserRound className="size-4" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Customer
                        </p>
                        <p className="text-sm font-medium">
                          {job.customer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-muted p-2">
                        <CalendarDays className="size-4" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Date
                        </p>
                        <p className="text-sm font-medium">
                          {job.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-muted p-2">
                        <Clock3 className="size-4" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Schedule
                        </p>
                        <p className="text-sm font-medium">
                          {job.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-muted p-2">
                        <MapPin className="size-4" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Location
                        </p>
                        <p className="text-sm font-medium">
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Service Amount
                      </p>

                      <p className="text-lg font-bold">
                        {job.amount}
                      </p>
                    </div>

                    <Button>
                      <Link href={`/technician/jobs/${job.id}`}>
                        View Details
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="rounded-full bg-muted p-4">
                <Wrench className="size-8 text-muted-foreground" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                No jobs found
              </h3>

              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                No jobs match your current search or status filter.
                Try changing your search or filter.
              </p>

              <Button
                variant="outline"
                className="mt-5"
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