
import LoginForm from "@/components/form/login-form";
import Link from "next/link";
import { Wrench, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-muted/30 px-4 py-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <Wrench className="size-6" />
            </span>

            <span className="text-2xl font-bold tracking-tight">
              FixIt<span className="text-primary">Now</span>
            </span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
          {/* Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="size-7" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight">
              Welcome back!
            </h1>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Sign in to your FixItNow account to manage
              your services.
            </p>
          </div>

          {/* Existing Login Form */}
          <LoginForm />

          {/* Footer */}
          <div className="mt-6 border-t pt-5 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-primary underline-offset-4 transition-colors hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Secure login · FixItNow
        </p>
      </div>
    </main>
  );
}

