"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  CreditCard,
  Home,
  RefreshCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PaymentCancelPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg shadow-sm">
        <CardHeader className="pb-4 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <AlertCircle className="size-9 text-red-600 dark:text-red-400" />
          </div>

          <CardTitle className="mt-5 text-2xl">
            Payment Cancelled
          </CardTitle>

          <p className="text-muted-foreground">
            Your payment was cancelled or could not be completed.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Payment Info */}
          <div className="rounded-xl border bg-muted/30 p-4">
            <div className="space-y-3 text-sm">
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
                  Amount
                </span>

                <span className="font-medium">
                  ৳1,200
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">
                  Payment Status
                </span>

                <span className="font-medium text-red-600 dark:text-red-400">
                  Cancelled
                </span>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800 dark:border-yellow-900/50 dark:bg-yellow-900/20 dark:text-yellow-300">
            <p className="font-medium">
              No payment was charged.
            </p>

            <p className="mt-1">
              Your service request is still available. You can try
              the payment again from your request details.
            </p>
          </div>

          {/* Actions */}
          <div className="grid gap-3 sm:grid-cols-2">
            <Button >
              <Link href="/dashboard/requests/REQ-0012">
                <RefreshCcw className="mr-2 size-4" />
                Try Again
              </Link>
            </Button>

            <Button  variant="outline">
              <Link href="/dashboard/requests">
                <CreditCard className="mr-2 size-4" />
                My Requests
              </Link>
            </Button>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <Button
              
              variant="ghost"
            >
              <Link href="/dashboard">
                <Home className="mr-2 size-4" />
                Dashboard
              </Link>
            </Button>

            <Button
              
              variant="ghost"
            >
              <Link href="/services">
                <ArrowLeft className="mr-2 size-4" />
                Back to Services
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}