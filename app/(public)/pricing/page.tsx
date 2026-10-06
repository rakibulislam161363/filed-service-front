import Link from "next/link";
import {
  Check,
  ArrowRight,
  Wrench,
  Zap,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Basic Service",
    description: "For simple home maintenance and small repair needs.",
    icon: Wrench,
    price: "From ৳500",
    popular: false,
    features: [
      "Professional technician",
      "Basic service request",
      "Service status tracking",
      "Customer support",
    ],
  },
  {
    name: "Standard Service",
    description: "For regular repair and maintenance services.",
    icon: Zap,
    price: "From ৳1,000",
    popular: true,
    features: [
      "Verified technician",
      "Priority service assignment",
      "Service status tracking",
      "Secure payment",
      "Customer support",
    ],
  },
  {
    name: "Premium Service",
    description: "For advanced services and larger home projects.",
    icon: Sparkles,
    price: "Custom Quote",
    popular: false,
    features: [
      "Experienced technician",
      "Priority scheduling",
      "Detailed service management",
      "Secure payment",
      "Dedicated support",
    ],
  },
];

const notes = [
  "Final pricing may vary depending on the service.",
  "Technician fees and material costs may apply.",
  "You can review the service details before confirming.",
];

export default function PricingPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple & Transparent Pricing
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Choose the service you need. Pricing depends on the type of work,
            required materials, and service complexity.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border bg-background p-6 shadow-sm ${
                    plan.popular
                      ? "border-primary shadow-md"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    {plan.name}
                  </h2>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-3xl font-bold">
                      {plan.price}
                    </span>
                  </div>

                  <div className="my-6 h-px bg-border" />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/login?callbackUrl=/dashboard/requests/create"
                    className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-md px-5 text-sm font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border bg-background hover:bg-muted"
                    }`}
                  >
                    Book a Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center">
              Good to Know
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {notes.map((note) => (
                <div
                  key={note}
                  className="rounded-xl border bg-background p-5"
                >
                  <Check className="h-5 w-5 text-primary" />

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Explore our services and find the right option for your home.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

