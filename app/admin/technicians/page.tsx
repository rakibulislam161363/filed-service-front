"use client";

import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  MapPin,
  Search,
  Star,
  UserCheck,
  UserX,
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
import { Input } from "@/components/ui/input";

type TechnicianStatus = "Available" | "Busy" | "Offline";

type Technician = {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  location: string;
  experience: number;
  jobs: number;
  rating: number;
  status: TechnicianStatus;
  verified: boolean;
};

const technicians: Technician[] = [
  {
    id: "TECH-001",
    name: "Abdul Karim",
    email: "abdul.karim@example.com",
    phone: "+880 17******45",
    skills: ["AC Repair", "Electrical Repair"],
    location: "Phultala, Khulna",
    experience: 5,
    jobs: 124,
    rating: 4.9,
    status: "Available",
    verified: true,
  },
  {
    id: "TECH-002",
    name: "Sakib Hasan",
    email: "sakib.hasan@example.com",
    phone: "+880 18******32",
    skills: ["Plumbing", "Water Line Repair"],
    location: "Sonadanga, Khulna",
    experience: 4,
    jobs: 112,
    rating: 4.8,
    status: "Busy",
    verified: true,
  },
  {
    id: "TECH-003",
    name: "Tanvir Ahmed",
    email: "tanvir.ahmed@example.com",
    phone: "+880 19******87",
    skills: ["Electrical Repair", "Wiring"],
    location: "Boyra, Khulna",
    experience: 6,
    jobs: 108,
    rating: 4.8,
    status: "Available",
    verified: true,
  },
  {
    id: "TECH-004",
    name: "Mim Akter",
    email: "mim.akter@example.com",
    phone: "+880 16******54",
    skills: ["Home Cleaning", "Deep Cleaning"],
    location: "Khalishpur, Khulna",
    experience: 3,
    jobs: 96,
    rating: 4.7,
    status: "Available",
    verified: true,
  },
  {
    id: "TECH-005",
    name: "Rashedul Islam",
    email: "rashedul.islam@example.com",
    phone: "+880 17******21",
    skills: ["Refrigerator Repair", "AC Repair"],
    location: "Daulatpur, Khulna",
    experience: 5,
    jobs: 89,
    rating: 4.6,
    status: "Busy",
    verified: true,
  },
  {
    id: "TECH-006",
    name: "Mehedi Hasan",
    email: "mehedi.hasan@example.com",
    phone: "+880 18******76",
    skills: ["Washing Machine Repair", "Home Appliance"],
    location: "Nirala, Khulna",
    experience: 2,
    jobs: 54,
    rating: 4.5,
    status: "Offline",
    verified: false,
  },
];

const filters: ("All" | TechnicianStatus)[] = [
  "All",
  "Available",
  "Busy",
  "Offline",
];

function getStatusClass(status: TechnicianStatus) {
  switch (status) {
    case "Available":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

    case "Busy":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

    case "Offline":
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
  }
}

function StatusIcon({ status }: { status: TechnicianStatus }) {
  if (status === "Available") {
    return <CheckCircle2 className="size-3.5" />;
  }

  if (status === "Busy") {
    return <Wrench className="size-3.5" />;
  }

  return <UserX className="size-3.5" />;
}

export default function AdminTechniciansPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "All" | TechnicianStatus
  >("All");

  const filteredTechnicians = useMemo(() => {
    return technicians.filter((technician) => {
      const matchesStatus =
        activeFilter === "All" ||
        technician.status === activeFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        technician.id.toLowerCase().includes(searchText) ||
        technician.name.toLowerCase().includes(searchText) ||
        technician.email.toLowerCase().includes(searchText) ||
        technician.location.toLowerCase().includes(searchText) ||
        technician.skills.some((skill) =>
          skill.toLowerCase().includes(searchText),
        );

      return matchesStatus && matchesSearch;
    });
  }, [search, activeFilter]);

  const availableCount = technicians.filter(
    (technician) => technician.status === "Available",
  ).length;

  const busyCount = technicians.filter(
    (technician) => technician.status === "Busy",
  ).length;

  const offlineCount = technicians.filter(
    (technician) => technician.status === "Offline",
  ).length;

  const verifiedCount = technicians.filter(
    (technician) => technician.verified,
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Technicians
          </h1>

          <p className="text-muted-foreground">
            Manage technicians, skills, availability and verification.
          </p>
        </div>

        <Button>
          <UserCheck className="mr-2 size-4" />
          Add Technician
        </Button>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
              <UserCheck className="size-5 text-green-600 dark:text-green-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Available
              </p>
              <p className="text-2xl font-bold">{availableCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-yellow-100 p-3 dark:bg-yellow-900/30">
              <Wrench className="size-5 text-yellow-600 dark:text-yellow-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Busy</p>
              <p className="text-2xl font-bold">{busyCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
              <UserX className="size-5 text-gray-600 dark:text-gray-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Offline
              </p>
              <p className="text-2xl font-bold">{offlineCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
              <CheckCircle2 className="size-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Verified
              </p>
              <p className="text-2xl font-bold">{verifiedCount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technician List */}
      <Card>
        <CardHeader className="space-y-4">
          <div>
            <CardTitle>All Technicians</CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Search and manage registered technicians.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search technician, skill, location..."
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
                variant={
                  activeFilter === filter ? "default" : "outline"
                }
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
                  <th className="px-3 py-3 font-medium">
                    Technician
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Skills
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Location
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Experience
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Jobs
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Rating
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Status
                  </th>

                  <th className="px-3 py-3 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredTechnicians.map((technician) => (
                  <tr
                    key={technician.id}
                    className="border-b last:border-0 hover:bg-muted/40"
                  >
                    {/* Technician */}
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                          {technician.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">
                              {technician.name}
                            </p>

                            {technician.verified && (
                              <CheckCircle2 className="size-4 text-blue-500" />
                            )}
                          </div>

                          <p className="text-xs text-muted-foreground">
                            {technician.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Skills */}
                    <td className="px-3 py-4">
                      <div className="flex max-w-55 flex-wrap gap-1">
                        {technician.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-muted-foreground" />
                        {technician.location}
                      </div>
                    </td>

                    {/* Experience */}
                    <td className="px-3 py-4">
                      {technician.experience} years
                    </td>

                    {/* Jobs */}
                    <td className="px-3 py-4 font-medium">
                      {technician.jobs}
                    </td>

                    {/* Rating */}
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">
                          {technician.rating}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-3 py-4">
                      <Badge
                        variant="secondary"
                        className={`gap-1 ${getStatusClass(
                          technician.status,
                        )}`}
                      >
                        <StatusIcon status={technician.status} />
                        {technician.status}
                      </Badge>
                    </td>

                    {/* Action */}
                    <td className="px-3 py-4 text-right">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 size-4" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 md:hidden">
            {filteredTechnicians.map((technician) => (
              <div
                key={technician.id}
                className="rounded-xl border p-4"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {technician.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-semibold">
                          {technician.name}
                        </p>

                        {technician.verified && (
                          <CheckCircle2 className="size-4 text-blue-500" />
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground">
                        {technician.id}
                      </p>
                    </div>
                  </div>

                  <Badge
                    variant="secondary"
                    className={`gap-1 ${getStatusClass(
                      technician.status,
                    )}`}
                  >
                    <StatusIcon status={technician.status} />
                    {technician.status}
                  </Badge>
                </div>

                {/* Details */}
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">
                      Skills
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {technician.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="size-3.5" />
                      Location
                    </span>

                    <span className="text-right">
                      {technician.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Experience
                    </span>

                    <span>{technician.experience} years</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <BriefcaseBusiness className="size-3.5" />
                      Completed Jobs
                    </span>

                    <span className="font-medium">
                      {technician.jobs}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Rating
                    </span>

                    <span className="flex items-center gap-1 font-medium">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      {technician.rating}
                    </span>
                  </div>
                </div>

                <Button className="mt-4 w-full" variant="outline">
                  <Eye className="mr-2 size-4" />
                  View Technician
                </Button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTechnicians.length === 0 && (
            <div className="py-12 text-center">
              <Search className="mx-auto size-8 text-muted-foreground" />

              <h3 className="mt-3 font-semibold">
                No technicians found
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Try changing your search or status filter.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}