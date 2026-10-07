"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Eye,
  Search,
  UserCheck,
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
import { Input } from "@/components/ui/input";

type RequestStatus =
  | "Pending"
  | "In Progress"
  | "Completed"
  | "Cancelled";

type Request = {
  id: string;
  customer: string;
  service: string;
  technician: string;
  location: string;
  date: string;
  amount: number;
  status: RequestStatus;
};

const requests: Request[] = [
  {
    id: "REQ-0012",
    customer: "Rakibul Islam",
    service: "AC Repair",
    technician: "Abdul Karim",
    location: "Phultala, Khulna",
    date: "Oct 07, 2026",
    amount: 1200,
    status: "In Progress",
  },
  {
    id: "REQ-0011",
    customer: "Rahim Ahmed",
    service: "Plumbing Service",
    technician: "Sakib Hasan",
    location: "Sonadanga, Khulna",
    date: "Oct 06, 2026",
    amount: 800,
    status: "Completed",
  },
  {
    id: "REQ-0010",
    customer: "Nusrat Jahan",
    service: "Electrical Repair",
    technician: "Not Assigned",
    location: "Boyra, Khulna",
    date: "Oct 06, 2026",
    amount: 1500,
    status: "Pending",
  },
  {
    id: "REQ-0009",
    customer: "Karim Hasan",
    service: "Home Cleaning",
    technician: "Mim Akter",
    location: "Khalishpur, Khulna",
    date: "Oct 05, 2026",
    amount: 600,
    status: "Completed",
  },
  {
    id: "REQ-0008",
    customer: "Sakib Khan",
    service: "Washing Machine Repair",
    technician: "Abdul Karim",
    location: "Daulatpur, Khulna",
    date: "Oct 05, 2026",
    amount: 1000,
    status: "In Progress",
  },
  {
    id: "REQ-0007",
    customer: "Sumaiya Akter",
    service: "Refrigerator Repair",
    technician: "Tanvir Ahmed",
    location: "Nirala, Khulna",
    date: "Oct 04, 2026",
    amount: 1100,
    status: "Completed",
  },
  {
    id: "REQ-0006",
    customer: "Imran Hossain",
    service: "AC Service",
    technician: "Not Assigned",
    location: "Gollamari, Khulna",
    date: "Oct 04, 2026",
    amount: 900,
    status: "Pending",
  },
  {
    id: "REQ-0005",
    customer: "Mim Akter",
    service: "Home Cleaning",
    technician: "Not Assigned",
    location: "Shibbari, Khulna",
    date: "Oct 03, 2026",
    amount: 700,
    status: "Cancelled",
  },
];

const filters: ("All" | RequestStatus)[] = [
  "All",
  "Pending",
  "In Progress",
  "Completed",
  "Cancelled",
];

function getStatusClass(status: RequestStatus) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

    case "In Progress":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

    case "Completed":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

    case "Cancelled":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  }
}

function StatusIcon({ status }: { status: RequestStatus }) {
  if (status === "Pending") {
    return <Clock3 className="size-3.5" />;
  }

  if (status === "In Progress") {
    return <Wrench className="size-3.5" />;
  }

  if (status === "Completed") {
    return <CheckCircle2 className="size-3.5" />;
  }

  return <XCircle className="size-3.5" />;
}

export default function AdminRequestsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "All" | RequestStatus
  >("All");

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesStatus =
        activeFilter === "All" || request.status === activeFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        request.id.toLowerCase().includes(searchText) ||
        request.customer.toLowerCase().includes(searchText) ||
        request.service.toLowerCase().includes(searchText) ||
        request.technician.toLowerCase().includes(searchText) ||
        request.location.toLowerCase().includes(searchText);

      return matchesStatus && matchesSearch;
    });
  }, [search, activeFilter]);

  const pendingCount = requests.filter(
    (request) => request.status === "Pending",
  ).length;

  const progressCount = requests.filter(
    (request) => request.status === "In Progress",
  ).length;

  const completedCount = requests.filter(
    (request) => request.status === "Completed",
  ).length;

  const cancelledCount = requests.filter(
    (request) => request.status === "Cancelled",
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Service Requests
          </h1>
          <p className="text-muted-foreground">
            Manage and monitor all customer service requests.
          </p>
        </div>

        <Button>
          <Link href="/admin/technicians">
            <UserCheck className="mr-2 size-4" />
            Manage Technicians
          </Link>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-yellow-100 p-3 dark:bg-yellow-900/30">
              <Clock3 className="size-5 text-yellow-600 dark:text-yellow-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold">{pendingCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
              <Wrench className="size-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-bold">{progressCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
              <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl font-bold">{completedCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
              <XCircle className="size-5 text-red-600 dark:text-red-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Cancelled</p>
              <p className="text-2xl font-bold">{cancelledCount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Card */}
      <Card>
        <CardHeader className="space-y-4">
          <div>
            <CardTitle>All Requests</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Search, filter and manage customer requests.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search request, customer, service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
        </CardHeader>

        <CardContent>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-3 py-3 font-medium">Request</th>
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Service</th>
                  <th className="px-3 py-3 font-medium">Technician</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b last:border-0 hover:bg-muted/40"
                  >
                    <td className="px-3 py-4 font-medium">{request.id}</td>

                    <td className="px-3 py-4">
                      <div>
                        <p className="font-medium">{request.customer}</p>
                        <p className="text-xs text-muted-foreground">
                          {request.location}
                        </p>
                      </div>
                    </td>

                    <td className="px-3 py-4">{request.service}</td>

                    <td className="px-3 py-4">
                      {request.technician === "Not Assigned" ? (
                        <span className="text-muted-foreground">
                          Not Assigned
                        </span>
                      ) : (
                        request.technician
                      )}
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <CalendarDays className="size-3.5 text-muted-foreground" />
                        {request.date}
                      </div>
                    </td>

                    <td className="px-3 py-4 font-medium">
                      ৳{request.amount.toLocaleString()}
                    </td>

                    <td className="px-3 py-4">
                      <Badge
                        variant="secondary"
                        className={`gap-1 ${getStatusClass(request.status)}`}
                      >
                        <StatusIcon status={request.status} />
                        {request.status}
                      </Badge>
                    </td>

                    <td className="px-3 py-4 text-right">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 size-4" />
                        Manage
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 md:hidden">
            {filteredRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-xl border p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{request.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {request.customer}
                    </p>
                  </div>

                  <Badge
                    variant="secondary"
                    className={`gap-1 ${getStatusClass(request.status)}`}
                  >
                    <StatusIcon status={request.status} />
                    {request.status}
                  </Badge>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                      Service
                    </span>
                    <span className="text-right font-medium">
                      {request.service}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                      Technician
                    </span>
                    <span className="text-right">
                      {request.technician}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                      Location
                    </span>
                    <span className="text-right">
                      {request.location}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                      Date
                    </span>
                    <span>{request.date}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                      Amount
                    </span>
                    <span className="font-semibold">
                      ৳{request.amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button className="mt-4 w-full" variant="outline">
                  <Eye className="mr-2 size-4" />
                  Manage Request
                </Button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRequests.length === 0 && (
            <div className="py-12 text-center">
              <Search className="mx-auto size-8 text-muted-foreground" />

              <h3 className="mt-3 font-semibold">
                No requests found
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}