"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@homeservice.com",
    description: "We'll respond as soon as possible.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1XXX-XXXXXX",
    description: "Available during business hours.",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Khulna, Bangladesh",
    description: "Serving customers in your area.",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "9:00 AM – 8:00 PM",
    description: "Saturday – Thursday",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Header */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            We&apos;d Love to Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Have a question about our services or need help with your
            request? Send us a message and our team will get back to you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold">
                Get in Touch
              </h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                Whether you have a question, need support, or want to learn
                more about our services, we&apos;re here to help.
              </p>

              <div className="mt-8 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium">
                          {item.value}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8 lg:col-span-2">
              <h2 className="text-2xl font-bold">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
                  <h3 className="text-lg font-semibold">
                    Message Sent Successfully!
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for contacting us. We&apos;ll get back to you
                    soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-sm font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="h-11 w-full rounded-md border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="h-11 w-full rounded-md border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What can we help you with?"
                      required
                      className="h-11 w-full rounded-md border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message..."
                      required
                      className="w-full resize-none rounded-md border bg-background px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

