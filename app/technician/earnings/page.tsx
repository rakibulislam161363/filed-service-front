"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const payments = [
  {
    id: "PAY-0024",
    jobId: "JOB-0024",
    service: "Plumbing Service",
    date: "Oct 06, 2026",
    amount: "৳800",
    method: "bKash",
    status: "Paid",
  },
  {
    id: "PAY-0023",
    jobId: "JOB-0023",
    service: "AC Repair",
    date: "Oct 05, 2026",
    amount: "৳1,200",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "PAY-0022",
    jobId: "JOB-0022",
    service: "Washing Machine Repair",
    date: "Oct 04, 2026",
    amount: "৳1,000",
    method: "bKash",
    status: "Paid",
  },
  {
    id: "PAY-0021",
    jobId: "JOB-0021",
    service: "Electrical Repair",
    date: "Oct 03, 2026",
    amount: "৳1,500",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "PAY-0020",
    jobId: "JOB-0020",
    service: "AC Service",
    date: "Oct 01, 2026",
    amount: "৳900",
    method: "bKash",
    status: "Pending",
  },
];

const monthlyEarnings = [
  {
    month: "October 2026",
    jobs: 18,
    amount: "৳18,400",
  },
  {
    month: "September 2026",
    jobs: 22,
    amount: "৳21,600",
  },
  {
    month: "August 2026",
    jobs: 19,
    amount: "৳17,900",
  },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Paid":
      return "default";
    case "Pending":
      return "secondary";
    default:
      return "outline";
  }
}

export default function TechnicianEarningsPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Technician
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                My Earnings
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Track your earnings, completed jobs and payment history.
              </p>
            </div>

            <Button variant="outline">
              <Link href="/technician">
                <ArrowLeft className="mr-2 size-4" />
                Dashboard
              </Link>
            </Button>
          </div>
        </section>

        {/* Summary */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Earnings
                </p>

                <p className="mt-2 text-3xl font-bold">৳57,900</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  All time earnings
                </p>
              </div>

              <div className="rounded-xl bg-muted p-3">
                <Wallet className="size-6" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  This Month
                </p>

                <p className="mt-2 text-3xl font-bold">৳18,400</p>

                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="size-3.5" />
                  12.5% from last month
                </p>
              </div>

              <div className="rounded-xl bg-muted p-3">
                <TrendingUp className="size-6" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold">৳900</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Awaiting payment
                </p>
              </div>

              <div className="rounded-xl bg-muted p-3">
                <Clock3 className="size-6" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  Completed Jobs
                </p>

                <p className="mt-2 text-3xl font-bold">59</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Successfully completed
                </p>
              </div>

              <div className="rounded-xl bg-muted p-3">
                <CheckCircle2 className="size-6" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Month */}
        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>October 2026</CardTitle>

                <p className="mt-1 text-sm text-muted-foreground">
                  Earnings overview for this month
                </p>
              </div>

              <CalendarDays className="size-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border p-5">
                  <p className="text-sm text-muted-foreground">
                    Total Earnings
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    ৳18,400
                  </p>
                </div>

                <div className="rounded-xl border p-5">
                  <p className="text-sm text-muted-foreground">
                    Completed Jobs
                  </p>

                  <p className="mt-2 text-2xl font-bold">18</p>
                </div>

                <div className="rounded-xl border p-5">
                  <p className="text-sm text-muted-foreground">
                    Average / Job
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    ৳1,022
                  </p>
                </div>
              </div>

              {/* Simple Progress */}
              <div className="mt-6 rounded-xl bg-muted/50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Monthly Earnings Goal
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      ৳18,400 of ৳25,000
                    </p>
                  </div>

                  <p className="font-semibold">74%</p>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[74%] rounded-full bg-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Account */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Account</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <CreditCard className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      bKash
                    </p>

                    <p className="text-xs text-muted-foreground">
                      +880 17******45
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-xs text-muted-foreground">
                  Available Balance
                </p>

                <p className="mt-1 text-2xl font-bold">
                  ৳18,400
                </p>
              </div>

              <Button className="w-full">
                Withdraw Earnings
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Withdrawal processing may take 1–2 business days.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Monthly History */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings</CardTitle>

            <p className="text-sm text-muted-foreground">
              Your earnings performance over recent months.
            </p>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {monthlyEarnings.map((item) => (
                <div
                  key={item.month}
                  className="rounded-xl border p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{item.month}</p>

                    <DollarSign className="size-5 text-muted-foreground" />
                  </div>

                  <p className="mt-4 text-2xl font-bold">
                    {item.amount}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.jobs} completed jobs
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Payment History</CardTitle>

              <p className="mt-1 text-sm text-muted-foreground">
                Recent earnings and payment transactions.
              </p>
            </div>

            <Button variant="outline">
              <Download className="mr-2 size-4" />
              Export
            </Button>
          </CardHeader>

          <CardContent>
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium text-muted-foreground">
                      Payment ID
                    </th>

                    <th className="pb-3 font-medium text-muted-foreground">
                      Job
                    </th>

                    <th className="pb-3 font-medium text-muted-foreground">
                      Date
                    </th>

                    <th className="pb-3 font-medium text-muted-foreground">
                      Method
                    </th>

                    <th className="pb-3 font-medium text-muted-foreground">
                      Amount
                    </th>

                    <th className="pb-3 font-medium text-muted-foreground">
                      Status
                    </th>

                    <th className="pb-3 text-right font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b last:border-0"
                    >
                      <td className="py-4 font-medium">
                        {payment.id}
                      </td>

                      <td className="py-4">
                        <div>
                          <p className="font-medium">
                            {payment.service}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {payment.jobId}
                          </p>
                        </div>
                      </td>

                      <td className="py-4 text-muted-foreground">
                        {payment.date}
                      </td>

                      <td className="py-4 text-muted-foreground">
                        {payment.method}
                      </td>

                      <td className="py-4 font-semibold">
                        {payment.amount}
                      </td>

                      <td className="py-4">
                        <Badge
                          variant={getStatusVariant(payment.status)}
                        >
                          {payment.status}
                        </Badge>
                      </td>

                      <td className="py-4 text-right">
                        <Button size="sm" variant="ghost">
                          <FileText className="mr-1 size-4" />
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-3 md:hidden">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="rounded-xl border p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {payment.id}
                      </p>

                      <h3 className="mt-1 font-semibold">
                        {payment.service}
                      </h3>

                      <p className="text-xs text-muted-foreground">
                        {payment.jobId}
                      </p>
                    </div>

                    <Badge
                      variant={getStatusVariant(payment.status)}
                    >
                      {payment.status}
                    </Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Date
                      </p>

                      <p className="mt-1 text-sm">
                        {payment.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Method
                      </p>

                      <p className="mt-1 text-sm">
                        {payment.method}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Amount
                      </p>

                      <p className="mt-1 font-semibold">
                        {payment.amount}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full"
                  >
                    <FileText className="mr-2 size-4" />
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <Card>
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold">
                Want to see your completed jobs?
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                View your job history and service details.
              </p>
            </div>

            <Button variant="outline">
              <Link href="/technician/jobs">
                View My Jobs
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}