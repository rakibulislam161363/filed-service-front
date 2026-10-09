"use client";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Plus,
  Wrench,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Requests",
    value: "22",
    description: "All service requests",
    icon: FileText,
  },
  {
    title: "Pending",
    value: "3",
    description: "Waiting for review",
    icon: Clock3,
  },
  {
    title: "In Progress",
    value: "4",
    description: "Currently working",
    icon: Wrench,
  },
  {
    title: "Completed",
    value: "5",
    description: "Successfully completed",
    icon: CheckCircle2,
  },
];

const recentRequests = [
  {
    id: "REQ-0012",
    service: "AC Repair",
    date: "Oct 05, 2026",
    status: "Pending",
    amount: "৳1,200",
  },
  {
    id: "REQ-0011",
    service: "Plumbing Service",
    date: "Oct 03, 2026",
    status: "In Progress",
    amount: "৳800",
  },
  {
    id: "REQ-0010",
    service: "Electrical Repair",
    date: "Sep 29, 2026",
    status: "Completed",
    amount: "৳1,500",
  },
  {
    id: "REQ-0009",
    service: "Home Cleaning",
    date: "Sep 25, 2026",
    status: "Cancelled",
    amount: "৳600",
  },
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

export default function CustomerDashboardPage() {
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
              Welcome back, Rakib 👋
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage your service requests and track your services.
            </p>
          </div>

          <Button>
            <Link className="flex" href="/dashboard/requests/create">
              <Plus className="mr-2 size-4" />
              Create Request
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card key={stat.title}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>

                      <h2 className="mt-2 text-3xl font-bold">
                        {stat.value}
                      </h2>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>

                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <Icon className="size-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Recent Requests */}
          <Card className="lg:col-span-2">
            <CardContent className="p-0">
              <div className="flex items-center justify-between border-b p-5">
                <div>
                  <h2 className="font-semibold">Recent Requests</h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Your latest service requests
                  </p>
                </div>

                <Button variant="ghost" size="sm" >
                  <Link className="flex" href="/dashboard/requests">
                    View All
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>

              <div className="divide-y">
                {recentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-muted p-2.5">
                        <Wrench className="size-5 text-muted-foreground" />
                      </div>

                      <div>
                        <h3 className="font-medium">{request.service}</h3>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {request.id}
                        </p>

                        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                          <CalendarDays className="size-3.5" />
                          {request.date}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="text-sm font-semibold">
                        {request.amount}
                      </div>

                      <Badge variant={getStatusVariant(request.status)}>
                        {request.status}
                      </Badge>

                      <Button variant="outline" size="sm">
                        <Link href={`/dashboard/requests/${request.id}`}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent className="p-5">
              <h2 className="font-semibold">Quick Actions</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Manage your account quickly
              </p>

              <div className="mt-5 space-y-3">
                <Button
                  className="w-full justify-start"
                  variant="outline"
                
                >
                  <Link className="flex" href="/dashboard/requests/create">
                    <Plus className="mr-2 size-4" />
                    Create Service Request
                  </Link>
                </Button>

                <Button
                  className="w-full justify-start"
                  variant="outline"
                 
                >
                  <Link className="flex" href="/dashboard/requests">
                    <FileText className="mr-2 size-4" />
                    View My Requests
                  </Link>
                </Button>

                <Button
                  className="w-full justify-start"
                  variant="outline"
                
                >
                  <Link className="flex" href="/dashboard/payments">
                    <CheckCircle2 className="mr-2 size-4" />
                    Payment History
                  </Link>
                </Button>

                <Button
                  className="w-full justify-start"
                  variant="outline"
               
                >
                  <Link className="flex" href="/dashboard/profile">
                    <Wrench className="mr-2 size-4" />
                    Manage Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Info */}
        <Card className="mt-6">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold">Need a service?</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Create a new service request and get help from our technicians.
              </p>
            </div>

            <Button>
              <Link className="flex" href="/dashboard/requests/create">
                Request a Service
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}