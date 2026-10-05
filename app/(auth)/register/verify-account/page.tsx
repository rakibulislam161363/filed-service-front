"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Wrench, ShieldCheck } from "lucide-react";
import VerifyAccountForm from "@/components/form/verify-account-form";

export default function VerifyAccountPage() {
return ( <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-muted/30 px-4 py-10">
{/* Background decoration */} <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" /> <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" />


  <div className="relative w-full max-w-md">
    {/* Brand */}
    <div className="mb-6 flex justify-center">
      <Link href="/" className="group flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
          <Wrench className="size-6" />
        </span>

        <span className="text-2xl font-bold tracking-tight">
          FixIt<span className="text-primary">Now</span>
        </span>
      </Link>
    </div>

    {/* Verification Card */}
    <div className="rounded-2xl border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
      <div className="mb-7 text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="size-7" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight">
          Verify Your Account
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Complete your account verification to get started with FixItNow.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="py-8 text-center text-sm text-muted-foreground">
            Loading verification form...
          </div>
        }
      >
        <VerifyAccountForm mode="patient" />
      </Suspense>

      <div className="mt-6 border-t pt-5 text-center">
        <p className="text-sm text-muted-foreground">
          Already verified?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary underline-offset-4 transition-colors hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>

    <p className="mt-6 text-center text-xs text-muted-foreground">
      Secure account verification · FixItNow
    </p>
  </div>
</main>


);
}
