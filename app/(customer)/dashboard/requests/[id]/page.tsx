"use client";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  MapPin,
  MessageSquare,
  User,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const request = {
  id: "REQ-0012",
  service: "AC Repair",
  status: "In Progress",
  description:
    "The AC is not cooling properly. It starts normally but after some time the cooling becomes very weak.",
  createdAt: "October 05, 2026",
  scheduledDate: "October 07, 2026",
  scheduledTime: "10:00 AM - 12:00 PM",
  address: "Phultala, Khulna, Bangladesh",
  amount: "৳1,200",
};

const technician = {
  name: "Abdul Karim",
  role: "AC Technician",
  rating: "4.8",
  phone: "+880 1XXX-XXXXXX",
};

const timeline = [
  {
    title: "Request Created",
    description: "Your service request has been created successfully.",
    date: "Oct 05, 2026 • 09:30 AM",
    completed: true,
  },
  {
    title: "Request Approved",
    description: "Your request has been reviewed and approved.",
    date: "Oct 05, 2026 • 11:15 AM",
    completed: true,
  },
  {
    title: "Technician Assigned",
    description: "A technician has been assigned to your request.",
    date: "Oct 05, 2026 • 02:20 PM",
    completed: true,
  },
  {
    title: "Visit Scheduled",
    description: "Technician visit has been scheduled.",
    date: "Oct 06, 2026 • 10:00 AM",
    completed: true,
  },
  {
    title: "Work In Progress",
    description: "Technician is currently working on your service.",
    date: "Current Status",
    completed: false,
  },
  {
    title: "Completed",
    description: "Service will be marked completed after the work is finished.",
    date: "Waiting",
    completed: false,
  },
];

export default function RequestDetailsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Button variant="ghost"className="-ml-3 mb-5">
          <Link href="/dashboard/requests">
            <ArrowLeft className="mr-2 size-4" />
            Back to Requests
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="text-sm text-muted-foreground">
                Request ID: {request.id}
              </p>

              <Badge variant="secondary">{request.status}</Badge>
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {request.service}
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Created on {request.createdAt}
            </p>
          </div>

          <Button variant="outline">
            <Link href="/dashboard/requests">
              View All Requests
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Request Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="size-5" />
                  Request Information
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div>
                  <p className="text-sm font-medium">Problem Description</p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {request.description}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <MapPin className="size-4 text-muted-foreground" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Service Address</p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {request.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <CalendarDays className="size-4 text-muted-foreground" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Scheduled Visit</p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {request.scheduledDate}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {request.scheduledTime}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock3 className="size-5" />
                  Service Progress
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="relative">
                  {timeline.map((item, index) => (
                    <div
                      key={item.title}
                      className="relative flex gap-4 pb-8 last:pb-0"
                    >
                      {/* Line */}
                      {index !== timeline.length - 1 && (
                        <div
                          className={`absolute left-2.75 top-7 h-[calc(100%-12px)] w-px ${
                            item.completed
                              ? "bg-primary"
                              : "bg-border"
                          }`}
                        />
                      )}

                      {/* Icon */}
                      <div
                        className={`relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full ${
                          item.completed
                            ? "bg-primary text-primary-foreground"
                            : "border bg-background text-muted-foreground"
                        }`}
                      >
                        {item.completed ? (
                          <CheckCircle2 className="size-4" />
                        ) : (
                          <Clock3 className="size-3.5" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="-mt-0.5">
                        <h3
                          className={`text-sm font-semibold ${
                            !item.completed
                              ? "text-muted-foreground"
                              : ""
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technician */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="size-5" />
                  Assigned Technician
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                      <User className="size-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{technician.name}</h3>

                      <p className="text-sm text-muted-foreground">
                        {technician.role}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        ⭐ {technician.rating} rating
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 size-4" />
                    Contact Technician
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="size-5" />
                  Payment
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Service Amount
                  </span>

                  <span className="font-semibold">
                    {request.amount}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Payment Status
                  </span>

                  <Badge variant="outline">Pending</Badge>
                </div>

                <Button className="mt-5 w-full">
                  <Link href="/dashboard/payments">
                    View Payment
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <CalendarDays className="mt-0.5 size-4 text-muted-foreground" />

                  <div>
                    <p className="text-sm font-medium">
                      {request.scheduledDate}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {request.scheduledTime}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 text-muted-foreground" />

                  <p className="text-sm text-muted-foreground">
                    {request.address}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  Contact Support
                </Button>

                <Button className="w-full" variant="destructive">
                  Cancel Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}