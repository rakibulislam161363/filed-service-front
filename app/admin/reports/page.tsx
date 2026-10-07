"use client";

import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  TrendingUp,
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

const monthlyData = [
  { month: "May", requests: 98, completed: 72, revenue: 48200 },
  { month: "Jun", requests: 121, completed: 89, revenue: 56100 },
  { month: "Jul", requests: 135, completed: 101, revenue: 62300 },
  { month: "Aug", requests: 148, completed: 112, revenue: 69400 },
  { month: "Sep", requests: 164, completed: 119, revenue: 74800 },
  { month: "Oct", requests: 186, completed: 124, revenue: 68400 },
];

const serviceData = [
  {
    name: "AC Repair",
    requests: 48,
    revenue: 57600,
    percentage: 82,
  },
  {
    name: "Electrical Repair",
    requests: 36,
    revenue: 54000,
    percentage: 70,
  },
  {
    name: "Plumbing Service",
    requests: 29,
    revenue: 23200,
    percentage: 58,
  },
  {
    name: "Home Cleaning",
    requests: 25,
    revenue: 15000,
    percentage: 50,
  },
  {
    name: "Refrigerator Repair",
    requests: 18,
    revenue: 19800,
    percentage: 36,
  },
];

const topTechnicians = [
  {
    name: "Abdul Karim",
    jobs: 38,
    rating: 4.9,
    earnings: 18400,
  },
  {
    name: "Sakib Hasan",
    jobs: 34,
    rating: 4.8,
    earnings: 16200,
  },
  {
    name: "Tanvir Ahmed",
    jobs: 31,
    rating: 4.8,
    earnings: 14900,
  },
  {
    name: "Mim Akter",
    jobs: 28,
    rating: 4.7,
    earnings: 13200,
  },
];

export default function AdminReportsPage() {
  const currentMonth = monthlyData[monthlyData.length - 1];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Reports & Analytics
          </h1>

          <p className="text-muted-foreground">
            Monitor service requests, revenue and technician performance.
          </p>
        </div>

        <Button variant="outline">
          <Download className="mr-2 size-4" />
          Export Report
        </Button>
      </div>

      {/* Current Month */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>October 2026 Overview</CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Current month performance summary
            </p>
          </div>

          <Badge variant="secondary">
            <CalendarDays className="mr-1.5 size-3.5" />
            October 2026
          </Badge>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2.5 dark:bg-blue-900/30">
                  <BarChart3 className="size-5 text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Requests
                  </p>

                  <p className="text-2xl font-bold">
                    {currentMonth.requests}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-100 p-2.5 dark:bg-green-900/30">
                  <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Completed
                  </p>

                  <p className="text-2xl font-bold">
                    {currentMonth.completed}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-100 p-2.5 dark:bg-purple-900/30">
                  <TrendingUp className="size-5 text-purple-600 dark:text-purple-400" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Revenue
                  </p>

                  <p className="text-2xl font-bold">
                    ৳{currentMonth.revenue.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-orange-100 p-2.5 dark:bg-orange-900/30">
                  <Users className="size-5 text-orange-600 dark:text-orange-400" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Active Technicians
                  </p>

                  <p className="text-2xl font-bold">28</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Request Statistics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Request Statistics</CardTitle>

            <p className="text-sm text-muted-foreground">
              Current request status overview
            </p>
          </CardHeader>

          <CardContent>
            <div className="space-y-5">
              {/* Pending */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock3 className="size-4 text-yellow-500" />

                    <span className="text-sm font-medium">
                      Pending
                    </span>
                  </div>

                  <span className="text-sm font-semibold">18</span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[10%] rounded-full bg-yellow-500" />
                </div>
              </div>

              {/* In Progress */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wrench className="size-4 text-blue-500" />

                    <span className="text-sm font-medium">
                      In Progress
                    </span>
                  </div>

                  <span className="text-sm font-semibold">32</span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[17%] rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Completed */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-green-500" />

                    <span className="text-sm font-medium">
                      Completed
                    </span>
                  </div>

                  <span className="text-sm font-semibold">124</span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[67%] rounded-full bg-green-500" />
                </div>
              </div>

              {/* Cancelled */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XCircle className="size-4 text-red-500" />

                    <span className="text-sm font-medium">
                      Cancelled
                    </span>
                  </div>

                  <span className="text-sm font-semibold">12</span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[7%] rounded-full bg-red-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>

            <p className="text-sm text-muted-foreground">
              Revenue performance over the last 6 months
            </p>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((item) => {
                const maxRevenue = 80000;
                const width = Math.round(
                  (item.revenue / maxRevenue) * 100,
                );

                return (
                  <div key={item.month}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium">
                        {item.month}
                      </span>

                      <span className="font-semibold">
                        ৳{item.revenue.toLocaleString()}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>

          <p className="text-sm text-muted-foreground">
            Requests and completed jobs by month
          </p>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-150 text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-3 py-3 font-medium">
                    Month
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Requests
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Completed
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Completion Rate
                  </th>

                  <th className="px-3 py-3 text-right font-medium">
                    Revenue
                  </th>
                </tr>
              </thead>

              <tbody>
                {monthlyData.map((item) => {
                  const completionRate = Math.round(
                    (item.completed / item.requests) * 100,
                  );

                  return (
                    <tr
                      key={item.month}
                      className="border-b last:border-0"
                    >
                      <td className="px-3 py-4 font-medium">
                        {item.month} 2026
                      </td>

                      <td className="px-3 py-4">
                        {item.requests}
                      </td>

                      <td className="px-3 py-4">
                        {item.completed}
                      </td>

                      <td className="px-3 py-4">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        >
                          {completionRate}%
                        </Badge>
                      </td>

                      <td className="px-3 py-4 text-right font-semibold">
                        ৳{item.revenue.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Service Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Service Performance</CardTitle>

          <p className="text-sm text-muted-foreground">
            Most requested services this month
          </p>
        </CardHeader>

        <CardContent>
          <div className="space-y-5">
            {serviceData.map((service) => (
              <div key={service.name}>
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium">{service.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {service.requests} requests
                    </p>
                  </div>

                  <p className="font-semibold">
                    ৳{service.revenue.toLocaleString()}
                  </p>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{
                      width: `${service.percentage}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Technicians */}
      <Card>
        <CardHeader>
          <CardTitle>Top Technicians</CardTitle>

          <p className="text-sm text-muted-foreground">
            Best performing technicians this month
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topTechnicians.map((technician, index) => (
              <div
                key={technician.name}
                className="rounded-xl border p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {technician.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <Badge variant="secondary">
                    #{index + 1}
                  </Badge>
                </div>

                <h3 className="mt-4 font-semibold">
                  {technician.name}
                </h3>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Jobs
                    </span>

                    <span className="font-medium">
                      {technician.jobs}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Rating
                    </span>

                    <span className="font-medium">
                      ⭐ {technician.rating}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Earnings
                    </span>

                    <span className="font-semibold">
                      ৳{technician.earnings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}