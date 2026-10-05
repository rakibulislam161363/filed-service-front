"use client";

import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { loginSchema } from "@/src/validation";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "../ui/toast";
import { Spinner } from "../ui/spinner";
import Link from "next/link";
import GoogleLoginComponent from "../modules/google-login/GoogleLogin";
import { useLogin } from "@/src/hooks";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { mutate: login, isPending: loginPending } = useLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };

      login(loginData, {
        onSuccess: (res) => {
          toast.add({
            title: "Login Success",
            description: "Welcome back",
            type: "success",
          });
          router.push("/");
        },
        onError: (err) => {
          toast.add({
            title: "Authorization failure",
            description:
              err.message || "Something went wrong. Please try again",
            type: "error",
          });
        },
      });
    },
  });

  // Dynamic vabe Email and Password set korar handler
  const handleDemoFill = (role: "admin" | "user" | "tech") => {
    if (role === "admin") {
      form.setFieldValue("email", "webdeveloper.rakibulislam@gmail.com");
      form.setFieldValue("password", "Rakib@@@1613639100");
    } else if (role === "user") {
      form.setFieldValue("email", "rakibulislam161363@gmail.com");
      form.setFieldValue("password", "Rakib@@@1613639100");
    } else if (role === "tech") {
      form.setFieldValue("email", "16starlab16@gmail.com");
      form.setFieldValue("password", "Rakib@@@1613639100");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Login to your account
        </h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    value={field.state.value}
                    autoComplete="off"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <div className="relative">
                    <Input
                      id={field.name}
                      name={field.name}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      value={field.state.value}
                      autoComplete="off"
                      aria-invalid={isInvalid}
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <EyeClosed className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>

          <Button disabled={loginPending} type="submit">
            {loginPending ? (
              <>
                <Spinner /> submitting
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </FieldGroup>
      </form>

      {/* --- QUICK DEMO LOGIN BUTTONS --- */}
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-center">
          <span className="w-full border-t border-slate-200" />
          <span className="absolute bg-white px-2 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
            Quick Demo Fill
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1">
          <button
            type="button"
            onClick={() => handleDemoFill("admin")}
            className="rounded-lg bg-slate-50 border border-slate-200 px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            🛠️ Admin
          </button>
          <button
            type="button"
            onClick={() => handleDemoFill("user")}
            className="rounded-lg bg-slate-50 border border-slate-200 px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            👤 User
          </button>
          <button
            type="button"
            onClick={() => handleDemoFill("tech")}
            className="rounded-lg bg-slate-50 border border-slate-200 px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            🔧 Tech
          </button>
        </div>
      </div>

      <FieldSeparator>Or continue with</FieldSeparator>

      <GoogleLoginComponent />

      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium underline underline-offset-4 hover:text-primary"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
