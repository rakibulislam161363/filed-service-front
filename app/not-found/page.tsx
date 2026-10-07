import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-muted">
          <SearchX className="size-10 text-muted-foreground" />
        </div>

        <p className="mb-2 text-sm font-semibold text-primary">404 ERROR</p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved to another location.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Home className="size-4" />
            Back to Home
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-4" />
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}