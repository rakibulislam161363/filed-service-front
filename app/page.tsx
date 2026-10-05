import Link from "next/link";
export default function HomePage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center rounded-full border bg-muted px-4 py-2 text-sm font-medium">
                🛠️ Professional Home Services
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Reliable Home Services,
                <span className="block text-primary">
                  Right at Your Doorstep
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Find trusted technicians for plumbing, electrical, cleaning,
                appliance repair, AC service, and more. Book a service and get
                professional help at your doorstep.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book a Service
                </Link>

                <Link
                  href="/services"
                  className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Explore Services
                </Link>
              </div>

              {/* Small Stats */}
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t pt-6">
                <div>
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-sm text-muted-foreground">
                    Services
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">100+</h3>
                  <p className="text-sm text-muted-foreground">
                    Technicians
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">4.8</h3>
                  <p className="text-sm text-muted-foreground">
                    Rating
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative aspect-square overflow-hidden rounded-3xl border bg-muted shadow-xl">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 text-8xl">🧑‍🔧</div>

                  <h2 className="text-2xl font-bold">
                    Skilled Technicians
                  </h2>

                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Get reliable and professional technicians for your home
                    service needs.
                  </p>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-5 rounded-xl border bg-background p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Trusted Service
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Professional technicians
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


