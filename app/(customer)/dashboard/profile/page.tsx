
"use client";

import {
  Camera,
  Lock,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useGetMe } from "@/src/hooks/auth.hook";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default function CustomerProfilePage() {
  const { data: user, isLoading, isError } = useGetMe();
  console.log("Current user:", user);
console.log("Loading:", isLoading);
console.log("Error:", isError);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
  if (user?.data) {
    setName(user.data.name ?? "");
    setEmail(user.data.email ?? "");
    setPhone(user.data.phone ?? "");
    setAddress(
      user.data.customerProfile?.address ?? ""
    );
  }
}, [user]);

  const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Profile update API এখনো তৈরি করা হয়নি।
    console.log("Profile information:", {
      name,
      email,
      phone,
      address,
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    if (newPassword.length < 8) {
      alert("New password must be at least 8 characters long.");
      return;
    }

    // Password change API এখনো তৈরি করা হয়নি।
    console.log("Password change requested.");
    alert("Password change API is not available yet.");
  };

  if (isLoading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Loading profile...
        </p>
      </main>
    );
  }

  if (isError || !user) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl font-semibold">
            Failed to load profile
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Please log in again and try again.
          </p>
        </div>
      </main>
    );
  }

  const initials =
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "CU";

  const memberSince = user.createdAt
    ? new Date(user.createdAt).getFullYear()
    : null;

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            Customer Dashboard
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative w-fit">
                  <Avatar className="size-24">
                    <AvatarImage src="/rakib.png" alt={name} />

                    <AvatarFallback className="text-xl">
                      {initials}
                    </AvatarFallback>
                  </Avatar>

                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-1 -right-1 size-8 rounded-full"
                    aria-label="Change profile picture"
                    title="Profile picture upload is not available yet"
                  >
                    <Camera className="size-4" />
                  </Button>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">{name}</h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Customer
                  </p>

                  {memberSince && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Member since {memberSince}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-5" />
                Personal Information
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-9"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
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
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>

                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-9"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        id="city"
                        value={address.split(",")[1]?.trim() ?? ""}
                        onChange={(e) => {
                          const parts = address
                            .split(",")
                            .map((part) => part.trim());

                          if (parts.length > 1) {
                            parts[1] = e.target.value;
                            setAddress(parts.join(", "));
                          } else {
                            setAddress(e.target.value);
                          }
                        }}
                        className="pl-9"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />

                    <Textarea
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="min-h-24 resize-none pl-9"
                      placeholder="Enter your complete address"
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end">
                  <Button type="submit">
                    <Save className="mr-2 size-4" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

