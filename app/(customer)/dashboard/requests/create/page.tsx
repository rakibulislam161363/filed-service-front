"use client";

import { ArrowLeft, CalendarDays, MapPin, Upload, Wrench } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const serviceCategories = [
  "AC Repair",
  "Plumbing",
  "Electrical Repair",
  "Home Cleaning",
  "Washing Machine Repair",
  "Other",
];

export default function CreateRequestPage() {
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      service,
      description,
      address,
      date,
      time,
      file,
    });

    // Backend API পরে এখানে connect করা হবে.
  };

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <Button variant="ghost"className="mb-5 -ml-3">
          <Link href="/dashboard/requests">
            <ArrowLeft className="mr-2 size-4" />
            Back to Requests
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <Wrench className="size-6 text-primary" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Create Service Request
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Tell us what service you need and we'll connect you with a
            suitable technician.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Information */}
          <Card>
            <CardHeader>
              <CardTitle>Service Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="service">
                  Service Category <span className="text-destructive">*</span>
                </Label>

                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>

                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">
                  Problem Description{" "}
                  <span className="text-destructive">*</span>
                </Label>

                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the problem or service you need..."
                  className="min-h-32 resize-none"
                  required
                />

                <p className="text-xs text-muted-foreground">
                  Please provide enough details so the technician can
                  understand the problem.
                </p>
              </div>

              {/* Attachment */}
              <div className="space-y-2">
                <Label htmlFor="attachment">
                  Attachment{" "}
                  <span className="text-muted-foreground">(Optional)</span>
                </Label>

                <div className="rounded-lg border border-dashed p-5">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-3 rounded-full bg-muted p-3">
                      <Upload className="size-5 text-muted-foreground" />
                    </div>

                    <p className="text-sm font-medium">
                      Upload an image of the problem
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      PNG, JPG or JPEG
                    </p>

                    <Input
                      id="attachment"
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      onChange={(e) =>
                        setFile(e.target.files?.[0] ?? null)
                      }
                      className="mt-4 max-w-sm cursor-pointer"
                    />

                    {file && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Selected: {file.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle>Service Location</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="address">
                  Address <span className="text-destructive">*</span>
                </Label>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />

                  <Textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your complete service address..."
                    className="min-h-24 pl-9 resize-none"
                    required
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  Please provide a complete address where the technician
                  should visit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Preferred Schedule</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date">
                    Preferred Date{" "}
                    <span className="text-destructive">*</span>
                  </Label>

                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time">
                    Preferred Time{" "}
                    <span className="text-destructive">*</span>
                  </Label>

                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline" type="button">
              <Link href="/dashboard/requests">Cancel</Link>
            </Button>

            <Button type="submit">
              <Wrench className="mr-2 size-4" />
              Submit Service Request
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}