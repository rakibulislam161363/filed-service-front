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
    title: "Total Jobs",
    value: "24",
    description: "All assigned jobs",
    icon: Wrench,
  },
  {
    title: "Pending",
    value: "5",
    description: "Waiting to start",
    icon: Clock3,
  },
  {
    title: "In Progress",
    value: "3",
    description: "Currently working",
    icon: Settings,
  },
  {
    title: "Completed",
    value: "16",
    description: "Successfully completed",
    icon: CheckCircle2,
  },
];

const todaySchedule = [
  {
    id: "JOB-0025",
    service: "AC Repair",
    customer: "Rahim Ahmed",
    time: "10:00 AM - 12:00 PM",
    location: "Phultala, Khulna",
    status: "Scheduled",
  },
  {
    id: "JOB-0026",
    service: "Electrical Repair",
    customer: "Karim Hasan",
    time: "02:00 PM - 04:00 PM",
    location: "Sonadanga, Khulna",
    status: "Scheduled",
  },
];

const recentJobs = [
  {
    id: "JOB-0024",
    service: "Plumbing Service",
    customer: "Nusrat Jahan",
    date: "Oct 06, 2026",
    amount: "৳800",
    status: "Completed",
  },
  {
    id: "JOB-0023",
    service: "AC Repair",
    customer: "Sakib Khan",
    date: "Oct 05, 2026",
    amount: "৳1,200",
    status: "In Progress",
  },
  {
    id: "JOB-0022",
    service: "Washing Machine Repair",
    customer: "Mim Akter",
    date: "Oct 04, 2026",
    amount: "৳1,000",
    status: "Completed",
  },
  {
    id: "JOB-0021",
    service: "Electrical Repair",
    customer: "Tanvir Ahmed",
    date: "Oct 03, 2026",
    amount: "৳1,500",
    status: "Completed",
  },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Completed":
      return "default";
    case "In Progress":
      return "secondary";
    case "Scheduled":
      return "outline";
    default:
      return "outline";
  }
}

export default function TechnicianDashboardPage() {
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
              Welcome back, Abdul Karim 👋
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Manage your jobs, schedule and earnings from here.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="outline"
              className="gap-2 px-3 py-2 text-sm"
            >
              <span className="size-2 rounded-full bg-green-500" />
              Available
            </Badge>

            <Button >
              <Link href="/technician/jobs">
                View Jobs
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </section>

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
              {todaySchedule.map((job) => (
                <div
                  key={job.id}
                  className="rounded-xl border p-4 transition-colors hover:bg-muted/40"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          {job.id}
                        </span>

                        <Badge variant={getStatusVariant(job.status)}>
                          {job.status}
                        </Badge>
                      </div>

                      <h3 className="font-semibold">{job.service}</h3>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <UserRound className="size-4" />
                          {job.customer}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-4" />
                          {job.location}
                        </span>
                      </div>

                      <p className="flex items-center gap-1.5 text-sm font-medium">
                        <Clock3 className="size-4" />
                        {job.time}
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
              ))}

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
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <Wrench className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">My Jobs</p>
                    <p className="text-xs text-muted-foreground">
                      View assigned jobs
                    </p>
                  </div>
                </Link>
              </Button>

              <Button
                
                variant="outline"
                className="h-auto w-full justify-start p-4"
              >
                <Link href="/technician/profile">
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <UserRound className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">My Profile</p>
                    <p className="text-xs text-muted-foreground">
                      Update your information
                    </p>
                  </div>
                </Link>
              </Button>

              <Button
                
                variant="outline"
                className="h-auto w-full justify-start p-4"
              >
                <Link href="/technician/earnings">
                  <div className="mr-3 rounded-lg bg-muted p-2">
                    <CheckCircle2 className="size-5" />
                  </div>

                  <div className="text-left">
                    <p className="font-medium">My Earnings</p>
                    <p className="text-xs text-muted-foreground">
                      Check your earnings
                    </p>
                  </div>
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
            {/* Desktop */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium text-muted-foreground">
                      Job ID
                    </th>
                    <th className="pb-3 font-medium text-muted-foreground">
                      Service
                    </th>
                    <th className="pb-3 font-medium text-muted-foreground">
                      Customer
                    </th>
                    <th className="pb-3 font-medium text-muted-foreground">
                      Date
                    </th>
                    <th className="pb-3 font-medium text-muted-foreground">
                      Amount
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
                      <td className="py-4 font-medium">{job.id}</td>

                      <td className="py-4">{job.service}</td>

                      <td className="py-4 text-muted-foreground">
                        {job.customer}
                      </td>

                      <td className="py-4 text-muted-foreground">
                        {job.date}
                      </td>

                      <td className="py-4 font-medium">{job.amount}</td>

                      <td className="py-4">
                        <Badge variant={getStatusVariant(job.status)}>
                          {job.status}
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
                        {job.service}
                      </h3>
                    </div>

                    <Badge variant={getStatusVariant(job.status)}>
                      {job.status}
                    </Badge>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Customer
                      </p>
                      <p>{job.customer}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Amount
                      </p>
                      <p className="font-medium">{job.amount}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Date
                      </p>
                      <p>{job.date}</p>
                    </div>
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}