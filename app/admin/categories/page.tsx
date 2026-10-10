
"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  Edit,
  FolderTree,
  LoaderCircle,
  Plus,
  RefreshCw,
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

import {
  useGetAllServices,
  useCreateService,
  useUpdateService,
  useDeleteService,
} from "@/src/hooks/service.hook";

type Category = {
  id: string;
  name: string;
  description?: string | null;
};

type CategoryForm = {
  name: string;
  description: string;
};

const emptyForm: CategoryForm = {
  name: "",
  description: "",
};

// API response array অথবা nested data থেকে category list বের করে।
function getCategories(response: unknown): Category[] {
  if (Array.isArray(response)) {
    return response as Category[];
  }

  if (!response || typeof response !== "object") {
    return [];
  }

  const result = response as Record<string, unknown>;

  if (Array.isArray(result.data)) {
    return result.data as Category[];
  }

  if (
    result.data &&
    typeof result.data === "object" &&
    Array.isArray(
      (result.data as Record<string, unknown>).data,
    )
  ) {
    return (
      result.data as { data: Category[] }
    ).data;
  }

  if (Array.isArray(result.categories)) {
    return result.categories as Category[];
  }

  return [];
}

function getErrorMessage(error: unknown): string {
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}

export default function AdminCategoriesPage() {
  const [search, setSearch] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] =
    useState<Category | null>(null);
  const [form, setForm] = useState<CategoryForm>(emptyForm);
  const [formError, setFormError] = useState("");
  const [actionError, setActionError] = useState("");

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useGetAllServices({});

  const createMutation = useCreateService();
  const updateMutation = useUpdateService();
  const deleteMutation = useDeleteService();

  const categories = useMemo(
    () => getCategories(data),
    [data],
  );

  const filteredCategories = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return categories.filter((category) => {
      return (
        category.name.toLowerCase().includes(keyword) ||
        (category.description ?? "")
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [categories, search]);

  const isSaving =
    createMutation.isPending || updateMutation.isPending;

  function openCreateForm() {
    setEditingCategory(null);
    setForm(emptyForm);
    setFormError("");
    setActionError("");
    setIsFormOpen(true);
  }

  function openEditForm(category: Category) {
    setEditingCategory(category);

    setForm({
      name: category.name,
      description: category.description ?? "",
    });

    setFormError("");
    setActionError("");
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
    setEditingCategory(null);
    setForm(emptyForm);
    setFormError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormError("");
    setActionError("");

    const name = form.name.trim();
    const description = form.description.trim();

    if (!name) {
      setFormError("Category name is required.");
      return;
    }

    try {
      if (editingCategory) {
        await updateMutation.mutateAsync({
          categoryId: editingCategory.id,
          payload: {
            name,
            description,
          },
        });
      } else {
        await createMutation.mutateAsync({
          name,
          description,
        });
      }

      closeForm();
    } catch (error) {
      setFormError(getErrorMessage(error));
    }
  }

  async function handleDelete(category: Category) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${category.name}"?`,
    );

    if (!confirmed) return;

    setActionError("");

    try {
      await deleteMutation.mutateAsync(category.id);
    } catch (error) {
      setActionError(getErrorMessage(error));
    }
  }

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Service Categories
          </h1>

          <p className="mt-1 text-muted-foreground">
            Manage service categories offered by your platform.
          </p>
        </div>

        <Button onClick={openCreateForm}>
          <Plus className="mr-2 size-4" />
          Add Category
        </Button>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2">
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
                {isLoading ? "—" : categories.length}
              </p>
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
                Matching Categories
              </p>

              <p className="text-2xl font-bold">
                {isLoading ? "—" : filteredCategories.length}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category list */}
      <Card>
        <CardHeader className="space-y-4">
          <div>
            <CardTitle>All Categories</CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Create, update or remove service categories.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                placeholder="Search categories..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="pl-9"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => refetch()}
              disabled={isFetching}
            >
              <RefreshCw
                className={`mr-2 size-4 ${
                  isFetching ? "animate-spin" : ""
                }`}
              />
              Refresh
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {actionError && (
            <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
              {actionError}
            </div>
          )}

          {/* Loading */}
          {isLoading ? (
            <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
              <LoaderCircle className="size-5 animate-spin" />
              Loading categories...
            </div>
          ) : isError ? (
            /* Error */
            <div className="py-12 text-center">
              <h3 className="font-semibold">
                Could not load categories
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {getErrorMessage(error)}
              </p>

              <Button
                variant="outline"
                className="mt-4"
                onClick={() => refetch()}
              >
                Try Again
              </Button>
            </div>
          ) : filteredCategories.length === 0 ? (
            /* Empty state */
            <div className="py-12 text-center">
              <Search className="mx-auto size-8 text-muted-foreground" />

              <h3 className="mt-3 font-semibold">
                {search
                  ? "No categories found"
                  : "No categories yet"}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {search
                  ? "Try searching with a different keyword."
                  : "Create your first service category to get started."}
              </p>

              {!search && (
                <Button className="mt-4" onClick={openCreateForm}>
                  <Plus className="mr-2 size-4" />
                  Add Category
                </Button>
              )}
            </div>
          ) : (
            <>
              {/* Desktop table */}
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
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <Wrench className="size-5 text-primary" />
                            </div>

                            <div className="min-w-0">
                              <p className="font-medium">
                                {category.name}
                              </p>

                              <p className="max-w-48 truncate text-xs text-muted-foreground">
                                ID: {category.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="max-w-sm px-3 py-4 text-muted-foreground">
                          {category.description || "No description"}
                        </td>

                        <td className="px-3 py-4">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openEditForm(category)}
                            >
                              <Edit className="mr-2 size-4" />
                              Edit
                            </Button>

                            <Button
                              variant="outline"
                              size="icon"
                              aria-label={`Delete ${category.name}`}
                              className="text-red-600 hover:text-red-600"
                              disabled={deleteMutation.isPending}
                              onClick={() => handleDelete(category)}
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

              {/* Mobile cards */}
              <div className="space-y-4 md:hidden">
                {filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className="rounded-xl border p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Wrench className="size-5 text-primary" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="wrap-break-word font-semibold">
                          {category.name}
                        </h3>

                        <p className="mt-1 break-all text-xs text-muted-foreground">
                          ID: {category.id}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {category.description || "No description provided."}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => openEditForm(category)}
                      >
                        <Edit className="mr-2 size-4" />
                        Edit
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        aria-label={`Delete ${category.name}`}
                        className="text-red-600 hover:text-red-600"
                        disabled={deleteMutation.isPending}
                        onClick={() => handleDelete(category)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Create / Edit form */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeForm();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="category-form-title"
            className="my-auto w-full max-w-lg rounded-2xl border bg-background p-6 shadow-xl"
          >
            <div className="mb-6">
              <h2
                id="category-form-title"
                className="text-xl font-semibold"
              >
                {editingCategory ? "Edit Category" : "Add Category"}
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {editingCategory
                  ? "Update the category details below."
                  : "Enter details for your new service category."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="category-name"
                  className="text-sm font-medium"
                >
                  Category Name
                </label>

                <Input
                  id="category-name"
                  placeholder="e.g. AC Repair"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="category-description"
                  className="text-sm font-medium"
                >
                  Description
                </label>

                <textarea
                  id="category-description"
                  placeholder="Describe the service category..."
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                  rows={4}
                  maxLength={1000}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              {formError && (
                <p className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                  {formError}
                </p>
              )}

              <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeForm}
                  disabled={isSaving}
                >
                  Cancel
                </Button>

                <Button type="submit" disabled={isSaving}>
                  {isSaving && (
                    <LoaderCircle className="mr-2 size-4 animate-spin" />
                  )}

                  {editingCategory
                    ? "Save Changes"
                    : "Create Category"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

