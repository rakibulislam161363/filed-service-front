"use client";

import {
  Award,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
  Wrench,
} from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const initialSkills = [
  "AC Repair",
  "Refrigerator Repair",
  "Electrical Repair",
  "Home Appliance Repair",
];

export default function TechnicianProfilePage() {
  const [name, setName] = useState("Abdul Karim");
  const [email, setEmail] = useState("abdulkarim@example.com");
  const [phone, setPhone] = useState("+880 17******45");
  const [city, setCity] = useState("Khulna");
  const [address, setAddress] = useState("Phultala, Khulna, Bangladesh");
  const [experience, setExperience] = useState("5");
  const [bio, setBio] = useState(
    "Professional AC and electrical technician with experience in home appliance repair and maintenance."
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      city,
      address,
      experience,
      bio,
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-muted-foreground">
            Technician
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Manage your personal information, skills and account settings.
          </p>
        </section>

        {/* Profile Overview */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <div className="relative">
                  <Avatar className="size-24 border">
                    <AvatarImage
                      src="/rakib.png"
                      alt="Abdul Karim"
                    />
                    <AvatarFallback className="text-2xl">
                      AK
                    </AvatarFallback>
                  </Avatar>

                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-1 -right-1 size-9 rounded-full border shadow-sm"
                  >
                    <Camera className="size-4" />
                  </Button>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-bold">Abdul Karim</h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Professional Technician
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                    <Badge variant="secondary">
                      <CheckCircle2 className="mr-1 size-3.5" />
                      Verified
                    </Badge>

                    <Badge variant="outline">
                      <Wrench className="mr-1 size-3.5" />
                      AC Technician
                    </Badge>

                    <Badge variant="outline">Available</Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:min-w-65">
                <div className="rounded-xl border p-4 text-center">
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-xs text-muted-foreground">
                    Rating
                  </p>
                </div>

                <div className="rounded-xl border p-4 text-center">
                  <p className="text-2xl font-bold">124</p>
                  <p className="text-xs text-muted-foreground">
                    Jobs Done
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-6 lg:col-span-2">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="size-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={handleProfileSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>

                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-9"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>

                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-9"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>

                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />

                      <Textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="min-h-24 pl-9"
                        placeholder="Enter your full address"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">About Me</Label>

                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="min-h-28"
                      placeholder="Write something about yourself and your experience..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">
                      <Save className="mr-2 size-4" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseBusiness className="size-5" />
                  Professional Information
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="experience">
                      Years of Experience
                    </Label>

                    <Input
                      id="experience"
                      type="number"
                      min="0"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Verification Status</Label>

                    <div className="flex h-10 items-center gap-2 rounded-md border px-3">
                      <CheckCircle2 className="size-4" />

                      <span className="text-sm font-medium">
                        Verified Technician
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center gap-2">
                    <Award className="size-5" />

                    <h3 className="font-semibold">Skills</h3>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Your primary service skills.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {initialSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="size-5" />
                  Change Password
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={handlePasswordSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">
                      Current Password
                    </Label>

                    <Input
                      id="currentPassword"
                      type="password"
                      value={currentPassword}
                      onChange={(e) =>
                        setCurrentPassword(e.target.value)
                      }
                      placeholder="Enter current password"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">
                        New Password
                      </Label>

                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) =>
                          setNewPassword(e.target.value)
                        }
                        placeholder="Enter new password"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirm New Password
                      </Label>

                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" variant="outline">
                      <Lock className="mr-2 size-4" />
                      Update Password
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="rounded-xl border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Current Status</p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        You are currently available for jobs.
                      </p>
                    </div>

                    <Badge>
                      <span className="mr-1.5 size-2 rounded-full bg-green-400" />
                      Available
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 w-full"
                  >
                    Change Availability
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-muted-foreground" />

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-medium break-all">
                      {email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-muted-foreground" />

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-muted-foreground" />

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {city}, Bangladesh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Completion Rate
                  </span>

                  <span className="font-semibold">96%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[96%] rounded-full bg-primary" />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl border p-3 text-center">
                    <p className="text-xl font-bold">4.8</p>
                    <p className="text-xs text-muted-foreground">
                      Rating
                    </p>
                  </div>

                  <div className="rounded-xl border p-3 text-center">
                    <p className="text-xl font-bold">124</p>
                    <p className="text-xs text-muted-foreground">
                      Jobs
                    </p>
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