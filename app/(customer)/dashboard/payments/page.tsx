
"use client";

import {
  ArrowDownToLine,
  ArrowRight,
  CreditCard,
  ReceiptText,
  Wallet,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          My Payments
        </h1>
        <p className="text-muted-foreground">
          View your payment history and manage your service payments.
        </p>
      </div>

      {/* Payment Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Wallet className="size-6 text-primary" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total Payments
              </p>
              <h3 className="text-2xl font-bold">৳0.00</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <CreditCard className="size-6 text-emerald-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Successful Payments
              </p>
              <h3 className="text-2xl font-bold">0</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10">
              <ReceiptText className="size-6 text-amber-600" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Pending Payments
              </p>
              <h3 className="text-2xl font-bold">৳0.00</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>
                A record of payments for your service requests.
              </CardDescription>
            </div>

            <Button variant="outline" disabled>
              <ArrowDownToLine className="mr-2 size-4" />
              Export History
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
              <ReceiptText className="size-8 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-semibold">
              No payments yet
            </h3>

            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Your payment history will appear here after you pay
              for a service request.
            </p>

            <Button
              className="mt-5"
              onClick={() =>
                (window.location.href = "/dashboard/requests")
              }
            >
              View My Requests
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Payment Information
          </CardTitle>
          <CardDescription>
            Important information about service payments.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <Badge variant="outline">1</Badge>
            <p>
              Your payment records will be available after a
              payment has been processed.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Badge variant="outline">2</Badge>
            <p>
              Always check your invoice and payment status before
              contacting support.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Badge variant="outline">3</Badge>
            <p>
              Keep your payment confirmation for future reference.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}