"use client";

import { BRAND } from "@/app/constants/logo";
import { EyeIcon, EyeOffIcon, GoogleIcon } from "@/Icons/icon";
import { useState } from "react";
import { RegFormErrosMsg } from "../register/regFormErrosMsg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setErrors] = useState<"" | "Invalid Credentials">("");
  console.log(error);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrors("");

    if (email.trim() && password.trim()) {
      console.log("Code has been executed successfully");
      console.log(email.trim(), password.trim());
      return;
    }

    setErrors("Invalid Credentials");
    return;
  };

  return (
    <form className="mt-9">
      <label
        htmlFor="email"
        className="block text-[14px] font-medium text-[#1b1b2f]"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        title="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        className="mt-2 h-9.5 w-full rounded-xl border border-[#e4e4ee] px-3.5 text-[15px] text-[#1b1b2f] outline-none transition focus:border-[#5b4df0] focus:ring-4 focus:ring-[#5b4df0]/10"
      />

      <label
        htmlFor="password"
        className="mt-5 block text-[14px] font-medium text-[#1b1b2f]"
      >
        Password
      </label>
      <div className="relative mt-2">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Password"
          placeholder="Enter password"
          className="h-9.5 w-full rounded-xl border border-[#e4e4ee] px-3.5 pr-11 text-[15px] text-[#1b1b2f] outline-none transition focus:border-[#5b4df0] focus:ring-4 focus:ring-[#5b4df0]/10"
        />
        <button
          type="button"
          aria-label="Show password"
          title={showPassword ? "Hide Password" : "Show Password"}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8aa3] hover:text-[#5b4df0] cursor-pointer"
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      {/* Invalid Credentials */}
      {error && <RegFormErrosMsg errorMessage="Invalid Credentials" />}

      {/* Buttons */}
      <button
        type="submit"
        title="Log in"
        onClick={handleSubmit}
        className="mt-5 h-10 w-full rounded-xl text-[15px] font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5b4df0]/30"
        style={{ backgroundColor: BRAND }}
      >
        Log in
      </button>

      <button
        type="button"
        title="Continue with Google"
        className="mt-3.5 flex h-10 w-full items-center justify-center gap-2.5 rounded-xl border border-[#e4e4ee] bg-white text-[15px] font-medium text-[#1b1b2f] transition hover:bg-[#f7f7fb]"
      >
        <GoogleIcon />
        Continue with Google
      </button>
    </form>
  );
};

export { LoginForm };
