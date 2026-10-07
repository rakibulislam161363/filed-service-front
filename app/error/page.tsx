"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="size-10 text-destructive" />
        </div>

        <p className="mb-2 text-sm font-semibold text-destructive">
          SOMETHING WENT WRONG
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Unexpected Error
        </h1>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Something went wrong while loading this page. Please try again or
          return to the homepage.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <RefreshCw className="size-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Home className="size-4" />
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}