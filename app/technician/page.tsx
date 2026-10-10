
"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Settings,
  UserRound,
  Wrench,
} from "lucide-react";

import { useGetAssignments } from "@/src/hooks/assignment.hook";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Assignment } from "@/src/types";

function normalizeStatus(status?: string) {
  return (status ?? "PENDING")
    .toUpperCase()
    .replaceAll(" ", "_");
}

function formatDate(date?: string) {
  if (!date) return "Not scheduled";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Not scheduled";
  }

  return parsedDate.toLocaleDateString("en-BD", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTime(date?: string) {
  if (!date) return "Time not set";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Time not set";
  }

  return parsedDate.toLocaleTimeString("en-BD", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getStatusLabel(status?: string) {
  const normalized = normalizeStatus(status);

  const labels: Record<string, string> = {
    PENDING: "Pending",
    ASSIGNED: "Assigned",
    SCHEDULED: "Scheduled",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    FAILED: "Failed",
  };

  return labels[normalized] ?? normalized.replaceAll("_", " ");
}

function getStatusVariant(
  status?: string,
): "default" | "secondary" | "outline" {
  const normalized = normalizeStatus(status);

  if (normalized === "COMPLETED") {
    return "default";
  }

  if (normalized === "IN_PROGRESS") {
    return "secondary";
  }

  return "outline";
}

export default function TechnicianDashboardPage() {
  const {
    data: assignments = [],
    isLoading,
    isError,
    refetch,
  } = useGetAssignments();

  const totalJobs = assignments.length;

  const pendingJobs = assignments.filter((job) =>
    ["PENDING", "ASSIGNED", "SCHEDULED"].includes(
      normalizeStatus(job.status),
    ),
  ).length;

  const inProgressJobs = assignments.filter(
    (job) =>
      normalizeStatus(job.status) === "IN_PROGRESS",
  ).length;

  const completedJobs = assignments.filter(
    (job) =>
      normalizeStatus(job.status) === "COMPLETED",
  ).length;

  const today = new Date().toDateString();

  const todaySchedule = assignments.filter((job) => {
    if (!job.scheduledAt) return false;

    const date = new Date(job.scheduledAt);

    return (
      !Number.isNaN(date.getTime()) &&
      date.toDateString() === today
    );
  });

  const recentJobs = [...assignments]
    .sort(
      (a, b) =>
        new Date(b.scheduledAt).getTime() -
        new Date(a.scheduledAt).getTime(),
    )
    .slice(0, 4);

  const stats = [
    {
      title: "Total Jobs",
      value: totalJobs,
      description: "All assigned jobs",
      icon: Wrench,
    },
    {
      title: "Pending",
      value: pendingJobs,
      description: "Waiting to start",
      icon: Clock3,
    },
    {
      title: "In Progress",
      value: inProgressJobs,
      description: "Currently working",
      icon: Settings,
    },
    {
      title: "Completed",
      value: completedJobs,
      description: "Successfully completed",
      icon: CheckCircle2,
    },
  ];

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Technician Dashboard
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome to your dashboard 👋
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage your assigned jobs and schedule.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className="gap-2 px-3 py-2 text-sm"
            >
              <span className="size-2 rounded-full bg-green-500" />
              Technician
            </Badge>

            <Button>
              <Link href="/technician/jobs">
                View Jobs
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Loading */}
        {isLoading && (
          <Card>
            <CardContent className="flex items-center justify-center gap-3 p-10">
              <Clock3 className="size-5 animate-spin" />
              <p className="text-sm text-muted-foreground">
                Loading your assignments...
              </p>
            </CardContent>
          </Card>
        )}

        {/* Error */}
        {isError && (
          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
              <p className="font-medium">
                Failed to load assignments.
              </p>

              <p className="text-sm text-muted-foreground">
                Please check your connection and try again.
              </p>

              <Button variant="outline" onClick={() => refetch()}>
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        {!isLoading && !isError && (
          <>
            {/* Stats */}
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <Card key={stat.title}>
                    <CardContent className="flex items-center justify-between p-6">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {stat.title}
                        </p>

                        <p className="mt-2 text-3xl font-bold">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>

                      <div className="rounded-xl bg-muted p-3">
                        <Icon className="size-6" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </section>

            {/* Main Grid */}
            <section className="grid gap-6 lg:grid-cols-3">
              {/* Today's Schedule */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Today&apos;s Schedule</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Your scheduled visits for today
                    </p>
                  </div>

                  <CalendarDays className="size-5 text-muted-foreground" />
                </CardHeader>

                <CardContent className="space-y-4">
                  {todaySchedule.length === 0 ? (
                    <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center">
                      <CalendarDays className="mb-3 size-9 text-muted-foreground" />

                      <h3 className="font-semibold">
                        No visits scheduled today
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Your scheduled assignments will appear here.
                      </p>
                    </div>
                  ) : (
                    todaySchedule.map((job) => (
                      <div
                        key={job.id}
                        className="rounded-xl border p-4 transition-colors hover:bg-muted/40"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs text-muted-foreground">
                                {job.id}
                              </span>

                              <Badge variant={getStatusVariant(job.status)}>
                                {getStatusLabel(job.status)}
                              </Badge>
                            </div>

                            <h3 className="font-semibold">
                              {job.serviceRequest?.title ??
                                "Service Assignment"}
                            </h3>

                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5">
                                <MapPin className="size-4" />
                                {job.serviceRequest?.address ??
                                  "Address not available"}
                              </span>
                            </div>

                            <p className="flex items-center gap-1.5 text-sm font-medium">
                              <Clock3 className="size-4" />
                              {formatTime(job.scheduledAt)}
                            </p>
                          </div>

                          <Button  variant="outline">
                            <Link href={`/technician/jobs/${job.id}`}>
                              View Job
                              <ArrowRight className="ml-2 size-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))
                  )}

                  <Button  variant="ghost" className="w-full">
                    <Link href="/technician/jobs">
                      View All Jobs
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <Button
                    
                    variant="outline"
                    className="h-auto w-full justify-start p-4"
                  >
                    <Link href="/technician/jobs">
                      <Wrench className="mr-3 size-5" />

                      <span className="text-left">
                        <span className="block font-medium">
                          My Jobs
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          View assigned jobs
                        </span>
                      </span>
                    </Link>
                  </Button>

                  <Button
                    
                    variant="outline"
                    className="h-auto w-full justify-start p-4"
                  >
                    <Link href="/technician/profile">
                      <UserRound className="mr-3 size-5" />

                      <span className="text-left">
                        <span className="block font-medium">
                          My Profile
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          View your information
                        </span>
                      </span>
                    </Link>
                  </Button>

                  <Button
                    
                    variant="outline"
                    className="h-auto w-full justify-start p-4"
                  >
                    <Link href="/technician/earnings">
                      <CheckCircle2 className="mr-3 size-5" />

                      <span className="text-left">
                        <span className="block font-medium">
                          My Earnings
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          Check your earnings
                        </span>
                      </span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Recent Jobs */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Jobs</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your latest assigned service jobs
                  </p>
                </div>

                <Button  variant="ghost">
                  <Link href="/technician/jobs">
                    View All
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardHeader>

              <CardContent>
                {recentJobs.length === 0 ? (
                  <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center">
                    <Wrench className="mb-3 size-9 text-muted-foreground" />

                    <h3 className="font-semibold">
                      No assignments yet
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      When a job is assigned to you, it will appear here.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Desktop */}
                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b text-left">
                            <th className="pb-3 font-medium text-muted-foreground">
                              Assignment ID
                            </th>
                            <th className="pb-3 font-medium text-muted-foreground">
                              Service
                            </th>
                            <th className="pb-3 font-medium text-muted-foreground">
                              Scheduled Date
                            </th>
                            <th className="pb-3 font-medium text-muted-foreground">
                              Status
                            </th>
                            <th className="pb-3 text-right font-medium text-muted-foreground">
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {recentJobs.map((job) => (
                            <tr
                              key={job.id}
                              className="border-b last:border-0"
                            >
                              <td className="py-4 font-medium">
                                {job.id}
                              </td>

                              <td className="py-4">
                                {job.serviceRequest?.title ??
                                  "Service Assignment"}
                              </td>

                              <td className="py-4 text-muted-foreground">
                                {formatDate(job.scheduledAt)}
                              </td>

                              <td className="py-4">
                                <Badge variant={getStatusVariant(job.status)}>
                                  {getStatusLabel(job.status)}
                                </Badge>
                              </td>

                              <td className="py-4 text-right">
                                <Button  size="sm" variant="ghost">
                                  <Link href={`/technician/jobs/${job.id}`}>
                                    View
                                  </Link>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile */}
                    <div className="space-y-3 md:hidden">
                      {recentJobs.map((job) => (
                        <div
                          key={job.id}
                          className="rounded-xl border p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xs text-muted-foreground">
                                {job.id}
                              </p>

                              <h3 className="mt-1 font-semibold">
                                {job.serviceRequest?.title ??
                                  "Service Assignment"}
                              </h3>
                            </div>

                            <Badge variant={getStatusVariant(job.status)}>
                              {getStatusLabel(job.status)}
                            </Badge>
                          </div>

                          <div className="mt-3">
                            <p className="text-xs text-muted-foreground">
                              Scheduled Date
                            </p>
                            <p>{formatDate(job.scheduledAt)}</p>
                          </div>

                          <Button
                            
                            size="sm"
                            variant="outline"
                            className="mt-4 w-full"
                          >
                            <Link href={`/technician/jobs/${job.id}`}>
                              View Job
                              <ArrowRight className="ml-2 size-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </main>
  );
}