"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Wrench,
  Sun,
  Moon,
  LayoutDashboard,
  LogOut,
  UserRound,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { useGetMe, useLogout } from "@/src/hooks";
import { toast } from "@/components/ui/toast";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useGetMe();

  const { mutate: logout, isPending } = useLogout();

  const queryClient = useQueryClient();

  const { resolvedTheme, setTheme } = useTheme();

  const user = data?.data;
  const role = user?.role;
  console.log(role)

  // ------------------------------------
  // Dashboard route based on user role
  // ------------------------------------

  const dashboardRoute: Record<string, string> = {
    CUSTOMER: "/dashboard",
    TECHNICIAN: "/technician",
    ADMIN: "/admin",
    MANAGER: "/admin",
    FINANCE: "/admin",
  };

  const dashboardHref = role
    ? dashboardRoute[role] ?? "/dashboard"
    : "/dashboard";

  // ------------------------------------
  // User name
  // ------------------------------------

  const userName =
    user?.name || user?.email?.split("@")[0] || "User";

  // ------------------------------------
  // User initials
  // ------------------------------------

  const initials = userName
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // ------------------------------------
  // Logout
  // ------------------------------------

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.removeQueries({
          queryKey: ["user"],
        });

        toast.add({
          title: "Logout successful",
          description: "You have been logged out.",
          type: "success",
        });

        window.location.href = "/login";
      },

      onError: () => {
        toast.add({
          title: "Logout failed",
          description: "Please try again.",
          type: "error",
        });
      },
    });
  };

  // ------------------------------------
  // Close mobile menu
  // ------------------------------------

  const closeMenu = () => {
    setOpen(false);
  };

  // ------------------------------------
  // Theme toggle
  // ------------------------------------

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // ------------------------------------
  // Theme button
  // ------------------------------------

  const ThemeButton = (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  );

  

// ------------------------------------
// User dropdown
// ------------------------------------

const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="h-auto gap-2 rounded-full px-2 py-1.5"
          />
        }
      >
        <Avatar className="size-9">
          <AvatarFallback className="bg-primary text-sm font-semibold text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="hidden text-left lg:block">
          <p className="max-w-32 truncate text-sm font-medium">
            {userName}
          </p>

          <p className="text-xs capitalize text-muted-foreground">
            {role?.toLowerCase() || "User"}
          </p>
        </div>

        <ChevronDown className="hidden size-4 text-muted-foreground lg:block" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-60"
      >
        {/* User Information */}
        <div className="px-2 py-2">
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {userName}
              </p>

              <p className="truncate text-xs text-muted-foreground">
                {user?.email}
              </p>

              <p className="mt-0.5 text-xs capitalize text-primary">
                {role?.toLowerCase() || "User"}
              </p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Dashboard */}
        <DropdownMenuItem>
          <Link className="flex" href={dashboardHref}>
            <LayoutDashboard className="mr-2 size-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>

        {/* Profile */}
        <DropdownMenuItem>
          <Link className="flex" href="/profile">
            <UserRound className="mr-2 size-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isPending}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 size-4" />

          {isPending ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};





  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 text-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* =====================================
            Brand
        ====================================== */}

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Wrench className="size-5" />
          </span>

          <span className="text-xl font-bold tracking-tight">
            FixIt<span className="text-primary">Now</span>
          </span>
        </Link>

        {/* =====================================
            Desktop Navigation
        ====================================== */}

        <nav className="hidden items-center gap-7 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* =====================================
            Desktop Actions
        ====================================== */}

        <div className="hidden items-center gap-2 md:flex">
          {/* Theme */}

          {ThemeButton}

          {/* Logged in */}

          {!isLoading && user ? (
            <UserMenu />
          ) : (
            /* Not logged in */
            !isLoading && (
              <div className="flex items-center gap-2">
                <Button variant="ghost">
                  <Link href="/login">
                    Login
                  </Link>
                </Button>

                <Button>
                  <Link href="/register">
                    Get Started
                  </Link>
                </Button>
              </div>
            )
          )}
        </div>

        {/* =====================================
            Mobile Actions
        ====================================== */}

        <div className="flex items-center gap-1 md:hidden">
          {/* Theme */}

          {ThemeButton}

          {/* Mobile menu */}

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80"
            >
              {/* Mobile header */}

              <SheetTitle className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Wrench className="size-5" />
                </span>

                <span className="text-lg font-bold">
                  FixIt
                  <span className="text-primary">
                    Now
                  </span>
                </span>
              </SheetTitle>

              {/* =====================================
                  Mobile Navigation
              ====================================== */}

              <nav className="mt-8 flex flex-col gap-1">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>

              <div className="my-5 h-px bg-border" />

              {/* =====================================
                  Logged in Mobile User
              ====================================== */}

              {!isLoading && user ? (
                <div className="space-y-4">
                  {/* User information */}

                  <div className="flex items-center gap-3 rounded-xl border bg-muted/40 p-3">
                    <Avatar className="size-11">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {userName}
                      </p>

                      <p className="truncate text-xs text-muted-foreground">
                        {user?.email}
                      </p>

                      <p className="mt-0.5 text-xs capitalize text-primary">
                        {role?.toLowerCase() || "User"}
                      </p>
                    </div>
                  </div>

                  {/* Dashboard */}

                  <Button
                    className="w-full justify-start"
                    
                  >
                    <Link
                      href={dashboardHref}
                      onClick={closeMenu}
                    >
                      <LayoutDashboard className="mr-2 size-4" />
                      Dashboard
                    </Link>
                  </Button>

                  {/* Profile */}

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                   
                  >
                    <Link
                      href="/profile"
                      onClick={closeMenu}
                    >
                      <UserRound className="mr-2 size-4" />
                      Profile
                    </Link>
                  </Button>

                  {/* Logout */}

                  <Button
                    variant="outline"
                    className="w-full justify-start text-destructive hover:text-destructive"
                    onClick={() => {
                      closeMenu();
                      handleLogout();
                    }}
                    disabled={isPending}
                  >
                    <LogOut className="mr-2 size-4" />

                    {isPending
                      ? "Logging out..."
                      : "Logout"}
                  </Button>
                </div>
              ) : (
                /* =====================================
                    Not logged in Mobile
                ====================================== */

                !isLoading && (
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="outline"
                      className="w-full"
                     
                    >
                      <Link
                        href="/login"
                        onClick={closeMenu}
                      >
                        <UserRound className="mr-2 size-4" />
                        Login
                      </Link>
                    </Button>

                    <Button
                      className="w-full"
                     
                    >
                      <Link
                        href="/register"
                        onClick={closeMenu}
                      >
                        Get Started
                      </Link>
                    </Button>
                  </div>
                )
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

