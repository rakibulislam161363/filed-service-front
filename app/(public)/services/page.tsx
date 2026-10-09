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
} from "lucide-react";

const services = [
  {
    title: "Plumbing",
    description:
      "Professional plumbing services for leaks, pipes, faucets, and other issues.",
    icon: Wrench,
  },
  {
    title: "Electrical",
    description:
      "Reliable electrical services for wiring, switches, lights, and repairs.",
    icon: Zap,
  },
  {
    title: "AC Repair",
    description:
      "Keep your home comfortable with professional AC repair and maintenance.",
    icon: Snowflake,
  },
  {
    title: "Cleaning",
    description:
      "Professional home cleaning services to keep your space fresh and healthy.",
    icon: Sparkles,
  },
  {
    title: "Appliance Repair",
    description:
      "Get expert help repairing refrigerators, washing machines, and other appliances.",
    icon: Refrigerator,
  },
  {
    title: "Painting",
    description:
      "Transform your home with professional interior and exterior painting services.",
    icon: Paintbrush,
  },
];

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

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Professional Services for Your Home
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            From plumbing and electrical work to cleaning and appliance repair,
            find trusted professionals for all your home service needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Explore Our Services
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Choose the service you need and get connected with a suitable
              technician.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <Link
                    href="/dashboard/requests/create"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3"
                  >
                    Book This Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold tracking-tight">
              Service You Can Trust
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              We make it easier to find professional technicians and get your
              home services completed with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border bg-background p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Need a Service Today?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Book a trusted technician and get your home service done
              professionally and conveniently.
            </p>

            <Link
              href="/login?callbackUrl=/dashboard/requests/create"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
            >
              Book a Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

