import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Wrench,
  Target,
  HeartHandshake,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Trusted Technicians",
    description:
      "Connect with skilled technicians who can handle your home service needs professionally.",
    icon: Users,
  },
  {
    title: "Reliable Service",
    description:
      "From booking to completion, our platform keeps the entire service process organized.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Booking",
    description:
      "Submit your service request quickly and get connected with the right technician.",
    icon: Zap,
  },
  {
    title: "Quality Work",
    description:
      "We focus on professional service, clear communication, and customer satisfaction.",
    icon: HeartHandshake,
  },
];

const steps = [
  {
    number: "01",
    title: "Create a Request",
    description:
      "Tell us what service you need and provide the necessary details.",
  },
  {
    number: "02",
    title: "Get a Technician",
    description:
      "A suitable technician can be assigned to handle your service request.",
  },
  {
    number: "03",
    title: "Get the Work Done",
    description:
      "The technician visits your location and completes the requested work.",
  },
  {
    number: "04",
    title: "Complete & Pay",
    description:
      "Review the completed service and make your payment securely.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            About Our Platform
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Making Home Services
            <span className="block text-primary">
              Simple & Reliable
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Our platform makes it easier for customers to find professional
            technicians, request home services, track their jobs, and complete
            payments from one convenient place.
          </p>
        </div>
      </section>

      {/* About Platform */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Visual */}
            <div className="relative">
              <div className="flex aspect-square max-w-lg items-center justify-center rounded-3xl border bg-muted/40 p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Wrench className="h-12 w-12" />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    One Platform
                  </h2>

                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Connecting customers with professional technicians for
                    everyday home service needs.
                  </p>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -right-3 rounded-xl border bg-background p-4 shadow-lg sm:-right-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Simple & Convenient
                    </p>
                    <p className="text-xs text-muted-foreground">
                      From request to completion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A better way to manage home services
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Finding the right person for a home service should not be
                complicated. Our platform brings customers and technicians
                together through a simple and organized service management
                system.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                Customers can create service requests, follow the progress of
                their jobs, communicate through the service workflow, and
                manage payments. Technicians can manage assigned jobs,
                schedules, and earnings from their own dashboard.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Easy service request management",
                  "Technician assignment and job tracking",
                  "Secure payment workflow",
                  "Dedicated dashboards for different roles",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-7 w-7" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Making professional home services easier to access
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Our goal is to create a simple service experience where
              customers can request help with confidence and technicians can
              manage their work efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built Around Your Service Needs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything is designed to make the service journey easier for
              both customers and technicians.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From Request to Completion
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border bg-background p-6"
              >
                <span className="text-4xl font-bold text-primary/20">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Get Started?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Find the service you need and connect with a professional
              technician today.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-md bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/login?callbackUrl=/dashboard/requests/create"
                className="inline-flex h-11 items-center justify-center rounded-md border border-primary-foreground/30 px-6 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
