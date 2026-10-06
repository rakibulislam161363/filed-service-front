"use client";

import {
  ArrowDownToLine,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileText,
  Receipt,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const payments = [
  {
    id: "PAY-0012",
    requestId: "REQ-0010",
    service: "Electrical Repair",
    date: "Sep 29, 2026",
    amount: "৳1,500",
    method: "Card",
    status: "Paid",
  },
  {
    id: "PAY-0011",
    requestId: "REQ-0008",
    service: "Washing Machine Repair",
    date: "Sep 20, 2026",
    amount: "৳1,000",
    method: "bKash",
    status: "Paid",
  },
  {
    id: "PAY-0010",
    requestId: "REQ-0007",
    service: "AC Service",
    date: "Sep 15, 2026",
    amount: "৳900",
    method: "Cash",
    status: "Paid",
  },
  {
    id: "PAY-0009",
    requestId: "REQ-0006",
    service: "Plumbing Service",
    date: "Sep 10, 2026",
    amount: "৳800",
    method: "Card",
    status: "Failed",
  },
];

const summary = [
  {
    title: "Total Paid",
    value: "৳3,400",
    description: "Successfully paid",
    icon: CheckCircle2,
  },
  {
    title: "Pending",
    value: "৳1,200",
    description: "Awaiting payment",
    icon: CreditCard,
  },
  {
    title: "Transactions",
    value: "4",
    description: "Total transactions",
    icon: Receipt,
  },
];

export default function CustomerPaymentsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            Customer Dashboard
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Payments
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            View your payment history and manage your service payments.
          </p>
        </div>

        {/* Summary */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summary.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.title}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        {item.value}
                      </h2>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="rounded-lg bg-primary/10 p-2.5">
                      <Icon className="size-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Payment History */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Payment History</CardTitle>

                <p className="mt-1 text-sm text-muted-foreground">
                  Your recent service payment transactions.
                </p>
              </div>

              <Button variant="outline" size="sm">
                <ArrowDownToLine className="mr-2 size-4" />
                Export
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead className="border-y bg-muted/40">
                  <tr className="text-left text-sm">
                    <th className="px-6 py-3 font-medium text-muted-foreground">
                      Payment
                    </th>

                    <th className="px-6 py-3 font-medium text-muted-foreground">
                      Service
                    </th>

                    <th className="px-6 py-3 font-medium text-muted-foreground">
                      Date
                    </th>

                    <th className="px-6 py-3 font-medium text-muted-foreground">
                      Method
                    </th>

                    <th className="px-6 py-3 font-medium text-muted-foreground">
                      Amount
                    </th>

                    <th className="px-6 py-3 font-medium text-muted-foreground">
                      Status
                    </th>

                    <th className="px-6 py-3 text-right font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="text-sm">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium">{payment.id}</p>

                          <p className="text-xs text-muted-foreground">
                            {payment.requestId}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {payment.service}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CalendarDays className="size-4" />
                          {payment.date}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {payment.method}
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        {payment.amount}
                      </td>

                      <td className="px-6 py-4">
                        {payment.status === "Paid" ? (
                          <Badge>
                            <CheckCircle2 className="mr-1 size-3" />
                            Paid
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="mr-1 size-3" />
                            Failed
                          </Badge>
                        )}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm">
                          <Link
                            href={`/dashboard/requests/${payment.requestId}`}
                          >
                            View
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="divide-y md:hidden">
              {payments.map((payment) => (
                <div key={payment.id} className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold">{payment.service}</p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {payment.id} • {payment.requestId}
                      </p>
                    </div>

                    {payment.status === "Paid" ? (
                      <Badge>
                        <CheckCircle2 className="mr-1 size-3" />
                        Paid
                      </Badge>
                    ) : (
                      <Badge variant="destructive">
                        <XCircle className="mr-1 size-3" />
                        Failed
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Amount
                      </p>

                      <p className="mt-1 font-semibold">
                        {payment.amount}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Method
                      </p>

                      <p className="mt-1">{payment.method}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Date
                      </p>

                      <p className="mt-1">{payment.date}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    
                  >
                    <Link
                      href={`/dashboard/requests/${payment.requestId}`}
                    >
                      <FileText className="mr-2 size-4" />
                      View Request
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Payment */}
        <Card className="mt-6">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="size-5 text-primary" />

                <h2 className="font-semibold">Pending Payment</h2>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                You have a pending payment of{" "}
                <span className="font-semibold text-foreground">
                  ৳1,200
                </span>
                .
              </p>
            </div>

            <Button>
              <Link href="/dashboard/requests/REQ-0012">
                Pay Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}