"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  ReceiptText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg shadow-sm">
        <CardHeader className="pb-4 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle2 className="size-9 text-green-600 dark:text-green-400" />
          </div>

          <CardTitle className="mt-5 text-2xl">
            Payment Successful!
          </CardTitle>

          <p className="text-muted-foreground">
            Your payment has been successfully processed.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Payment Info */}
          <div className="rounded-xl border bg-muted/30 p-4">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">
                  Payment ID
                </span>

                <span className="font-medium">
                  PAY-0025
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">
                  Request ID
                </span>

                <span className="font-medium">
                  REQ-0012
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">
                  Service
                </span>

                <span className="font-medium">
                  AC Repair
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">
                  Payment Method
                </span>

                <span className="font-medium">
                  bKash
                </span>
              </div>

              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Total Paid
                  </span>

                  <span className="text-lg font-bold">
                    ৳1,200
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-300">
            <p className="font-medium">
              Thank you for your payment.
            </p>

            <p className="mt-1">
              Your service request is now being processed. You can
              track the request from your dashboard.
            </p>
          </div>

          {/* Actions */}
          <div className="grid gap-3 sm:grid-cols-2">
            <Button>
              <Link href="/dashboard/requests">
                <ReceiptText className="mr-2 size-4" />
                View My Requests
              </Link>
            </Button>

            <Button variant="outline">
              <Link href="/dashboard">
                <Home className="mr-2 size-4" />
                Dashboard
              </Link>
            </Button>
          </div>

          <Button
          
            variant="ghost"
            className="w-full"
          >
            <Link href="/services">
              Explore Services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}