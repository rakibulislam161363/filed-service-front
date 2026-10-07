"use client";

import { useState } from "react";
import {
  Edit,
  FolderTree,
  Plus,
  Search,
  Trash2,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Category = {
  id: string;
  name: string;
  description: string;
  technicians: number;
  requests: number;
  status: "Active" | "Inactive";
};

const initialCategories: Category[] = [
  {
    id: "CAT-001",
    name: "AC Repair",
    description: "AC servicing, repair and maintenance",
    technicians: 12,
    requests: 48,
    status: "Active",
  },
  {
    id: "CAT-002",
    name: "Electrical Repair",
    description: "Electrical wiring, switches and appliance repair",
    technicians: 9,
    requests: 36,
    status: "Active",
  },
  {
    id: "CAT-003",
    name: "Plumbing Service",
    description: "Water line, pipe and bathroom plumbing services",
    technicians: 8,
    requests: 29,
    status: "Active",
  },
  {
    id: "CAT-004",
    name: "Home Cleaning",
    description: "Regular and deep home cleaning services",
    technicians: 7,
    requests: 25,
    status: "Active",
  },
  {
    id: "CAT-005",
    name: "Refrigerator Repair",
    description: "Refrigerator diagnosis, repair and maintenance",
    technicians: 5,
    requests: 18,
    status: "Active",
  },
  {
    id: "CAT-006",
    name: "Washing Machine Repair",
    description: "Washing machine repair and maintenance",
    technicians: 4,
    requests: 14,
    status: "Active",
  },
  {
    id: "CAT-007",
    name: "Home Appliance",
    description: "General household appliance repair",
    technicians: 3,
    requests: 9,
    status: "Inactive",
  },
];

export default function AdminCategoriesPage() {
  const [categories, setCategories] =
    useState<Category[]>(initialCategories);

  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) => {
    const text = search.toLowerCase();

    return (
      category.name.toLowerCase().includes(text) ||
      category.description.toLowerCase().includes(text)
    );
  });

  const activeCount = categories.filter(
    (category) => category.status === "Active",
  ).length;

  const totalRequests = categories.reduce(
    (total, category) => total + category.requests,
    0,
  );

  const totalTechnicians = categories.reduce(
    (total, category) => total + category.technicians,
    0,
  );

  const handleDelete = (id: string) => {
    setCategories((current) =>
      current.filter((category) => category.id !== id),
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Service Categories
          </h1>

          <p className="text-muted-foreground">
            Manage service categories offered by your platform.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 size-4" />
          Add Category
        </Button>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-primary/10 p-3">
              <FolderTree className="size-5 text-primary" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total Categories
              </p>

              <p className="text-2xl font-bold">
                {categories.length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
              <FolderTree className="size-5 text-green-600 dark:text-green-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Active
              </p>

              <p className="text-2xl font-bold">{activeCount}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
              <Wrench className="size-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Technicians
              </p>

              <p className="text-2xl font-bold">
                {totalTechnicians}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
              <FolderTree className="size-5 text-purple-600 dark:text-purple-400" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total Requests
              </p>

              <p className="text-2xl font-bold">
                {totalRequests}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <Card>
        <CardHeader className="space-y-4">
          <div>
            <CardTitle>All Categories</CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Create, update or remove service categories.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>

        <CardContent>
          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="px-3 py-3 font-medium">
                    Category
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Description
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Technicians
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Requests
                  </th>

                  <th className="px-3 py-3 font-medium">
                    Status
                  </th>

                  <th className="px-3 py-3 text-right font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCategories.map((category) => (
                  <tr
                    key={category.id}
                    className="border-b last:border-0 hover:bg-muted/40"
                  >
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                          <Wrench className="size-5 text-primary" />
                        </div>

                        <div>
                          <p className="font-medium">
                            {category.name}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {category.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="max-w-xs px-3 py-4 text-muted-foreground">
                      {category.description}
                    </td>

                    <td className="px-3 py-4">
                      {category.technicians}
                    </td>

                    <td className="px-3 py-4 font-medium">
                      {category.requests}
                    </td>

                    <td className="px-3 py-4">
                      <Badge
                        variant="secondary"
                        className={
                          category.status === "Active"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        }
                      >
                        {category.status}
                      </Badge>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                        >
                          <Edit className="mr-2 size-4" />
                          Edit
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-600"
                          onClick={() =>
                            handleDelete(category.id)
                          }
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="space-y-4 md:hidden">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-xl border p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Wrench className="size-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {category.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {category.id}
                      </p>
                    </div>
                  </div>

                  <Badge
                    variant="secondary"
                    className={
                      category.status === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    }
                  >
                    {category.status}
                  </Badge>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  {category.description}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground">
                      Technicians
                    </p>

                    <p className="mt-1 font-semibold">
                      {category.technicians}
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground">
                      Requests
                    </p>

                    <p className="mt-1 font-semibold">
                      {category.requests}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                  >
                    <Edit className="mr-2 size-4" />
                    Edit
                  </Button>

                  <Button
                    variant="outline"
                    className="text-red-600 hover:text-red-600"
                    onClick={() =>
                      handleDelete(category.id)
                    }
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCategories.length === 0 && (
            <div className="py-12 text-center">
              <Search className="mx-auto size-8 text-muted-foreground" />

              <h3 className="mt-3 font-semibold">
                No categories found
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Try searching with a different keyword.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}