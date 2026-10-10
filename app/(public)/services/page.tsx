
"use client";

import Link from "next/link";
import {
  Wrench,
  Zap,
  Snowflake,
  Sparkles,
  Refrigerator,
  Paintbrush,
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  LoaderCircle,
  SearchX,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useGetAllServices } from "@/src/hooks/service.hook";

const benefits = [
  {
    title: "Verified Technicians",
    description:
      "Connect with skilled and reliable professionals for your service needs.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Service",
    description:
      "Get your service request handled quickly and efficiently.",
    icon: Clock3,
  },
  {
    title: "Quality Work",
    description:
      "We focus on reliable service and customer satisfaction.",
    icon: BadgeCheck,
  },
];

const serviceIcons = [
  Wrench,
  Zap,
  Snowflake,
  Sparkles,
  Refrigerator,
  Paintbrush,
];

function getServiceIcon(name: string) {
  const value = name.toLowerCase();

  if (value.includes("electric")) return Zap;
  if (value.includes("ac") || value.includes("air condition"))
    return Snowflake;
  if (value.includes("clean")) return Sparkles;
  if (value.includes("refrigerator") || value.includes("fridge"))
    return Refrigerator;
  if (value.includes("paint")) return Paintbrush;

  return Wrench;
}

export default function ServicesPage() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllServices({});

  // Supports both a direct array and a common { data: [...] } response.
  const response = data as
    | { id: string; name: string; description?: string | null; status?: string }[]
    | {
        data?: {
          id: string;
          name: string;
          description?: string | null;
          status?: string;
        }[];
      }
    | undefined;

  const services = Array.isArray(response)
    ? response
    : response?.data ?? [];

  const activeServices = services.filter(
    (service) =>
      !service.status ||
      ["ACTIVE", "Active"].includes(service.status),
  );

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative border-b bg-muted/30">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5" />

        <div className="container relative mx-auto px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <span className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Wrench className="mr-2 size-4" />
            Reliable Home Services
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Professional Services
            <span className="block text-primary">
              for Your Home
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            From electrical repairs to home cleaning, find the right
            service and connect with trusted professionals.
          </p>

          {/* <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button  size="lg">
              <Link className="flex" href="/dashboard/requests/create">
                Book a Service
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              <a href="#services">Explore Services</a>
            </Button>
          </div> */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              Trusted professionals
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4 text-primary" />
              Convenient booking
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-primary" />
              Quality-focused service
            </span>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section id="services" className="scroll-mt-20 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                What We Offer
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Explore Our Services
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Choose a service that fits your needs and book a
                professional technician.
              </p>
            </div>

            {!isLoading && !isError && (
              <p className="text-sm text-muted-foreground">
                {activeServices.length} services available
              </p>
            )}
          </div>

          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceIcons.slice(0, 6).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-2xl border p-6"
                >
                  <div className="size-14 rounded-xl bg-muted" />
                  <div className="mt-5 h-5 w-2/3 rounded bg-muted" />
                  <div className="mt-3 h-4 w-full rounded bg-muted" />
                  <div className="mt-2 h-4 w-4/5 rounded bg-muted" />
                  <div className="mt-6 h-9 w-36 rounded bg-muted" />
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="rounded-2xl border border-destructive/20 px-5 py-12 text-center">
              <SearchX className="mx-auto size-10 text-destructive" />
              <h3 className="mt-4 text-lg font-semibold">
                Could not load services
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {error instanceof Error
                  ? error.message
                  : "Something went wrong. Please try again."}
              </p>
              <Button
                className="mt-5"
                variant="outline"
                onClick={() => refetch()}
              >
                <RefreshCw className="mr-2 size-4" />
                Try Again
              </Button>
            </div>
          ) : activeServices.length === 0 ? (
            <div className="rounded-2xl border px-5 py-12 text-center">
              <SearchX className="mx-auto size-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">
                No services available yet
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Please check back later for available services.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeServices.map((service, index) => {
                const Icon = getServiceIcon(service.name);

                return (
                  <article
                    key={service.id}
                    className="group flex h-full flex-col rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-7" />
                      </div>

                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {service.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                      {service.description ||
                        `Professional ${service.name.toLowerCase()} services to help keep your home running smoothly.`}
                    </p>

                    <div className="mt-6 border-t pt-4">
                      <Link
                        href="/dashboard/requests/create"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                      >
                        Book This Service
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Service You Can Trust
            </h2>
            <p className="mt-4 text-muted-foreground">
              We make it easier to find professional technicians and
              get your home services completed with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border bg-background p-7 text-center transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border border-primary-foreground/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-10 size-72 rounded-full border border-primary-foreground/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm">
                <Sparkles className="size-4" />
                Simple, reliable, convenient
              </span>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                Need a Service Today?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-primary-foreground/80">
                Book a trusted technician and get your home service
                done professionally and conveniently.
              </p>

              <Button
             
                size="lg"
                className="mt-8 bg-background text-foreground hover:bg-background/90"
              >
                <Link className="flex" href="/login?callbackUrl=/dashboard/requests/create">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}