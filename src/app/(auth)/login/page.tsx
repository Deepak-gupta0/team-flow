// LoginPage.jsx — sirf UI (no logic). Next.js + Tailwind ke liye.
// Functionality add karne ke liye: inputs pe value/onChange, form pe onSubmit lagana,
// aur password eye button pe toggle (type="password" <-> "text") lagana.
// Font: Inter (next/font/google se layout.jsx me load kar lena).

import { LOGO } from "@/app/constants/logo";
import { LoginForm } from "./Form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f4f9] p-4 font-sans">
      <div className="grid w-full max-w-275 grid-cols-1 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(91,77,240,0.25)] lg:min-h-137.25 lg:grid-cols-[57fr_43fr]">
        {/* ---------- Left: form ---------- */}
        <section className="px-8 py-10 sm:px-11">
          {/* Logo */}
          <LOGO />

          {/* Heading */}
          <h1 className="mt-14 text-[28px] font-bold leading-tight text-[#1b1b2f]">
            Welcome back
          </h1>
          <p className="mt-1.5 text-[15px] text-[#8a8aa3]">
            Log in to pick up where you left off.
          </p>

          {/* Form */}
          <LoginForm />

          <p className="mt-7 text-center text-[15px] text-[#8a8aa3]">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#5b4df0] hover:underline"
              title="create account"
            >
              Create Account
            </Link>
          </p>
        </section>

        {/* ---------- Right: testimonial panel ---------- */}
        <aside className="relative hidden overflow-hidden bg-linear-to-br from-[#5b4ef0] via-[#8b5cf6] to-[#d0719a] lg:block">
          {/* Decorative circles */}
          <div className="absolute -top-18.75 -right-15 h-85 w-85 rounded-full bg-white/10" />
          <div className="absolute right-[18%] top-35 h-21.5 w-21.5 rounded-full bg-white/10" />

          {/* Quote card */}
          <div className="absolute inset-x-9 bottom-15.5 rounded-[22px] bg-white/20 p-5 backdrop-blur-[2px]">
            <p className="pt-12 text-[18px] leading-[1.55] text-white">
              &quot;TeamFlow cut our standups in half. The board is so calm my
              team actually uses it.&quot;
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
