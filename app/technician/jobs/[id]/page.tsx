"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
  Wrench,
  PlayCircle,
  CircleCheck,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const job = {
  id: "JOB-0025",
  service: "AC Repair",
  description:
    "The AC is not cooling properly. Customer mentioned that the AC takes a long time to cool the room and sometimes makes unusual noise.",
  customer: {
    name: "Rahim Ahmed",
    phone: "+880 17******45",
    email: "rahim@example.com",
  },
  schedule: {
    date: "October 07, 2026",
    time: "10:00 AM - 12:00 PM",
  },
  location: {
    address: "Phultala, Khulna, Bangladesh",
  },
  amount: "৳1,200",
  assignedAt: "October 05, 2026",
};

const timeline = [
  {
    title: "Job Assigned",
    description: "This job was assigned to you.",
    date: "Oct 05, 2026",
    completed: true,
  },
  {
    title: "Visit Scheduled",
    description: "Customer visit has been scheduled.",
    date: "Oct 05, 2026",
    completed: true,
  },
  {
    title: "Arrived at Location",
    description: "Confirm when you arrive at the customer's location.",
    date: "",
    completed: false,
  },
  {
    title: "Work Started",
    description: "Start the service work.",
    date: "",
    completed: false,
  },
  {
    title: "Work Completed",
    description: "Mark the job as completed after finishing the work.",
    date: "",
    completed: false,
  },
];

export default function TechnicianJobDetailsPage() {
  const [jobStatus, setJobStatus] = useState("Scheduled");
  const [note, setNote] = useState("");

  const handleStartJob = () => {
    setJobStatus("In Progress");
  };

  const handleCompleteJob = () => {
    setJobStatus("Completed");
  };

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Button variant="ghost" className="px-0">
          <Link href="/technician/jobs">
            <ArrowLeft className="mr-2 size-4" />
            Back to Jobs
          </Link>
        </Button>

        {/* Header */}
        <section className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {job.id}
                </span>

                <Badge
                  variant={
                    jobStatus === "Completed"
                      ? "default"
                      : jobStatus === "In Progress"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {jobStatus}
                </Badge>
              </div>

              <h1 className="mt-2 flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
                <Wrench className="size-7" />
                {job.service}
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Assigned on {job.assignedAt}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {jobStatus === "Scheduled" && (
                <Button onClick={handleStartJob}>
                  <PlayCircle className="mr-2 size-4" />
                  Start Job
                </Button>
              )}

              {jobStatus === "In Progress" && (
                <Button onClick={handleCompleteJob}>
                  <CircleCheck className="mr-2 size-4" />
                  Complete Job
                </Button>
              )}

              {jobStatus === "Completed" && (
                <Button disabled>
                  <CheckCircle2 className="mr-2 size-4" />
                  Job Completed
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            {/* Service Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="size-5" />
                  Service Details
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Service
                  </p>

                  <p className="mt-1 font-semibold">{job.service}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Customer&apos;s Problem
                  </p>

                  <p className="mt-1 text-sm leading-6">
                    {job.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border p-4">
                    <p className="text-xs text-muted-foreground">
                      Service Amount
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {job.amount}
                    </p>
                  </div>

                  <div className="rounded-xl border p-4">
                    <p className="text-xs text-muted-foreground">
                      Job ID
                    </p>

                    <p className="mt-1 font-semibold">{job.id}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="size-5" />
                  Schedule
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border p-4">
                    <div className="rounded-lg bg-muted p-2">
                      <CalendarDays className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Visit Date
                      </p>

                      <p className="mt-1 font-medium">
                        {job.schedule.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border p-4">
                    <div className="rounded-lg bg-muted p-2">
                      <Clock3 className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Visit Time
                      </p>

                      <p className="mt-1 font-medium">
                        {job.schedule.time}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  Service Location
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <MapPin className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Customer Address
                      </p>

                      <p className="mt-1 font-medium">
                        {job.location.address}
                      </p>
                    </div>
                  </div>

                  <Button variant="outline">
                    <MapPin className="mr-2 size-4" />
                    Open Map
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Technician Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Work Notes</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Write notes about the service, issue found, parts used, etc..."
                  rows={5}
                />

                <Button
                  onClick={() => console.log("Work note:", note)}
                >
                  Save Note
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Customer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserRound className="size-5" />
                  Customer
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-muted">
                    <UserRound className="size-5" />
                  </div>

                  <div>
                    <p className="font-semibold">
                      {job.customer.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Customer
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 text-muted-foreground" />

                    <span className="text-sm">
                      {job.customer.phone}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="size-4 text-muted-foreground" />

                    <span className="text-sm">
                      {job.customer.email}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Phone className="mr-2 size-4" />
                    Call
                  </Button>

                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="mr-2 size-4" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Job Progress</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-0">
                  {timeline.map((item, index) => {
                    const isCurrent =
                      (item.title === "Arrived at Location" &&
                        jobStatus === "Scheduled") ||
                      (item.title === "Work Started" &&
                        jobStatus === "In Progress") ||
                      (item.title === "Work Completed" &&
                        jobStatus === "Completed");

                    const completed =
                      item.completed ||
                      (item.title === "Work Started" &&
                        jobStatus === "Completed");

                    return (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full border ${
                              completed
                                ? "bg-primary text-primary-foreground"
                                : isCurrent
                                  ? "border-primary text-primary"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {completed ? (
                              <CheckCircle2 className="size-4" />
                            ) : (
                              <span className="size-2 rounded-full bg-current" />
                            )}
                          </div>

                          {index !== timeline.length - 1 && (
                            <div
                              className={`h-12 w-px ${
                                completed
                                  ? "bg-primary"
                                  : "bg-border"
                              }`}
                            />
                          )}
                        </div>

                        <div className="pb-6">
                          <p
                            className={`text-sm font-semibold ${
                              isCurrent ? "text-primary" : ""
                            }`}
                          >
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            {item.description}
                          </p>

                          {item.date && (
                            <p className="mt-1 text-xs text-muted-foreground">
                              {item.date}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <MessageCircle className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Need Help?
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Contact support if you have any issue with this job.
                    </p>

                    <Button
                      variant="link"
                      className="mt-2 h-auto p-0"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}