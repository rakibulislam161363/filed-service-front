"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  DollarSign,
  FileText,
  Settings,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Users",
    value: "248",
    description: "Registered users",
    icon: Users,
    href: "/admin/requests",
  },
  {
    title: "Technicians",
    value: "42",
    description: "Active technicians",
    icon: Wrench,
    href: "/admin/technicians",
  },
  {
    title: "Service Requests",
    value: "186",
    description: "All service requests",
    icon: FileText,
    href: "/admin/requests",
  },
  {
    title: "Total Revenue",
    value: "৳2,48,500",
    description: "Overall revenue",
    icon: DollarSign,
    href: "/admin/reports",
  },
];

const requestStats = [
  {
    title: "Pending",
    value: "18",
    icon: Clock3,
  },
  {
    title: "In Progress",
    value: "32",
    icon: Activity,
  },
  {
    title: "Completed",
    value: "124",
    icon: CheckCircle2,
  },
  {
    title: "Cancelled",
    value: "12",
    icon: XCircle,
  },
];

const recentRequests = [
  {
    id: "REQ-0012",
    customer: "Rakibul Islam",
    service: "AC Repair",
    technician: "Abdul Karim",
    date: "Oct 07, 2026",
    amount: "৳1,200",
    status: "In Progress",
  },
  {
    id: "REQ-0011",
    customer: "Rahim Ahmed",
    service: "Plumbing Service",
    technician: "Sakib Hasan",
    date: "Oct 06, 2026",
    amount: "৳800",
    status: "Completed",
  },
  {
    id: "REQ-0010",
    customer: "Nusrat Jahan",
    service: "Electrical Repair",
    technician: "Tanvir Ahmed",
    date: "Oct 06, 2026",
    amount: "৳1,500",
    status: "Pending",
  },
  {
    id: "REQ-0009",
    customer: "Karim Hasan",
    service: "Home Cleaning",
    technician: "Mim Akter",
    date: "Oct 05, 2026",
    amount: "৳600",
    status: "Completed",
  },
  {
    id: "REQ-0008",
    customer: "Sakib Khan",
    service: "Washing Machine Repair",
    technician: "Abdul Karim",
    date: "Oct 05, 2026",
    amount: "৳1,000",
    status: "In Progress",
  },
];

const topTechnicians = [
  {
    name: "Abdul Karim",
    specialty: "AC & Electrical",
    jobs: 38,
    rating: "4.9",
  },
  {
    name: "Sakib Hasan",
    specialty: "Plumbing",
    jobs: 34,
    rating: "4.8",
  },
  {
    name: "Tanvir Ahmed",
    specialty: "Electrical",
    jobs: 31,
    rating: "4.8",
  },
  {
    name: "Mim Akter",
    specialty: "Home Cleaning",
    jobs: 28,
    rating: "4.7",
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

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Admin Dashboard
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Welcome back, Admin 👋
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Manage your service platform, users, technicians and
                requests from one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button  variant="outline">
                <Link href="/admin/technicians">
                  <UserCheck className="mr-2 size-4" />
                  Technicians
                </Link>
              </Button>

              <Button >
                <Link href="/admin/requests">
                  <FileText className="mr-2 size-4" />
                  Requests
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.title}
                className="transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.title}
                      </p>

                      <p className="mt-2 text-2xl font-bold sm:text-3xl">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>

                    <div className="rounded-xl bg-muted p-3">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <Button
                    
                    variant="ghost"
                    size="sm"
                    className="mt-4 px-0"
                  >
                    <Link href={stat.href}>
                      View Details
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Request Overview */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Request Overview</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Current service request status across the platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requestStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Card key={stat.title}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-xl bg-muted p-3">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.title}
                      </p>

                      <p className="text-2xl font-bold">
                        {stat.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Recent Requests + Quick Actions */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Recent Requests */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Requests</CardTitle>

                <p className="mt-1 text-sm text-muted-foreground">
                  Latest service requests from customers.
                </p>
              </div>

              <Button  variant="ghost">
                <Link href="/admin/requests">
                  View All
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </CardHeader>

            <CardContent>
              {/* Desktop */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium text-muted-foreground">
                        Request
                      </th>

                      <th className="pb-3 font-medium text-muted-foreground">
                        Customer
                      </th>

                      <th className="pb-3 font-medium text-muted-foreground">
                        Technician
                      </th>

                      <th className="pb-3 font-medium text-muted-foreground">
                        Amount
                      </th>

                      <th className="pb-3 font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentRequests.map((request) => (
                      <tr
                        key={request.id}
                        className="border-b last:border-0"
                      >
                        <td className="py-4">
                          <div>
                            <p className="font-medium">
                              {request.service}
                            </p>

                            <p className="text-xs text-muted-foreground">
                              {request.id}
                            </p>
                          </div>
                        </td>

                        <td className="py-4">
                          <div>
                            <p className="font-medium">
                              {request.customer}
                            </p>

                            <p className="text-xs text-muted-foreground">
                              {request.date}
                            </p>
                          </div>
                        </td>

                        <td className="py-4 text-muted-foreground">
                          {request.technician}
                        </td>

                        <td className="py-4 font-medium">
                          {request.amount}
                        </td>

                        <td className="py-4">
                          <Badge
                            variant={getStatusVariant(request.status)}
                          >
                            {request.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <div className="space-y-3 md:hidden">
                {recentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-xl border p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {request.id}
                        </p>

                        <h3 className="mt-1 font-semibold">
                          {request.service}
                        </h3>
                      </div>

                      <Badge
                        variant={getStatusVariant(request.status)}
                      >
                        {request.status}
                      </Badge>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Customer
                        </p>

                        <p className="mt-1 font-medium">
                          {request.customer}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Technician
                        </p>

                        <p className="mt-1">
                          {request.technician}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Date
                        </p>

                        <p className="mt-1">{request.date}</p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          Amount
                        </p>

                        <p className="mt-1 font-semibold">
                          {request.amount}
                        </p>
                      </div>
                    </div>

                    <Button
                      
                      size="sm"
                      variant="outline"
                      className="mt-4 w-full"
                    >
                      <Link href={`/admin/requests/${request.id}`}>
                        View Request
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>

              <p className="text-sm text-muted-foreground">
                Frequently used admin actions.
              </p>
            </CardHeader>

            <CardContent className="space-y-3">
              <Button
                
                variant="outline"
                className="h-auto w-full justify-start p-4"
              >
                <Link href="/admin/requests">
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <FileText className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">
                      Manage Requests
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Review service requests
                    </p>
                  </div>
                </Link>
              </Button>

              <Button
                
                variant="outline"
                className="h-auto w-full justify-start p-4"
              >
                <Link href="/admin/technicians">
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <Wrench className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">
                      Manage Technicians
                    </p>

                    <p className="text-xs text-muted-foreground">
                      View and assign technicians
                    </p>
                  </div>
                </Link>
              </Button>

              <Button
                
                variant="outline"
                className="h-auto w-full justify-start p-4"
              >
                <Link href="/admin/categories">
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <Settings className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">
                      Service Categories
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Manage service categories
                    </p>
                  </div>
                </Link>
              </Button>

              <Button
                
                variant="outline"
                className="h-auto w-full justify-start p-4"
              >
                <Link href="/admin/reports">
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <TrendingUp className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">
                      View Reports
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Revenue and performance reports
                    </p>
                  </div>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Top Technicians */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Technicians</CardTitle>

              <p className="mt-1 text-sm text-muted-foreground">
                Best performing technicians this month.
              </p>
            </div>

            <Button  variant="ghost">
              <Link href="/admin/technicians">
                View All
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {topTechnicians.map((technician, index) => (
                <div
                  key={technician.name}
                  className="rounded-xl border p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-full bg-muted font-bold">
                      {index + 1}
                    </div>

                    <Badge variant="outline">
                      ⭐ {technician.rating}
                    </Badge>
                  </div>

                  <h3 className="mt-4 font-semibold">
                    {technician.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {technician.specialty}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t pt-3">
                    <span className="text-xs text-muted-foreground">
                      Completed Jobs
                    </span>

                    <span className="font-semibold">
                      {technician.jobs}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Summary */}
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-xl bg-muted p-3">
                <CalendarDays className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Today&apos;s Requests
                </p>

                <p className="text-xl font-bold">14</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-xl bg-muted p-3">
                <UserCheck className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Available Technicians
                </p>

                <p className="text-xl font-bold">28</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-xl bg-muted p-3">
                <TrendingUp className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Monthly Revenue
                </p>

                <p className="text-xl font-bold">৳68,400</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}