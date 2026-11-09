"use client";

import { useState } from "react";
import { RegisterErrors } from "../../../interfaces/validators";
import { registerSchema } from "@/schemas/register.schema"; 
import { RegFormErrosMsg } from "./regFormErrosMsg";
import { EyeIcon, EyeOffIcon } from "@/Icons/icon";

const Form = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handelSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !(fullName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim())
    ) {
      setErrors({ password: ["Invalid credentials all fields are required."] });
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setErrors({
        confirmPassword: "confirm password should be same as password.",
      });
      return;
    }
    setErrors({});
    console.log(fullName, email, password);
    const result = registerSchema.safeParse({ fullName, email, password });
    // console.log(result)
    if (result.success) {
      console.log("Your input has successfully been processed.");
      return;
    } else {
      setErrors(result.error.flatten().fieldErrors);
    }

    console.log(result.error?.flatten().fieldErrors);
  };

  const inputClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#5B4DF0] focus:ring-4 focus:ring-[#5B4DF0]/10";
  const labelClass = "mb-2 block text-sm font-medium text-slate-900";

  return (
    <form className="mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter fullname"
          title="Enter fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
        />
        {errors?.fullName?.map((err, idx) => (
          <RegFormErrosMsg errorMessage={err} key={idx} />
        ))}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          title="Enter email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />

        {/* Error state: remove this <p> when you don't need it */}
        {errors?.email?.map((err, idx) => (
          <RegFormErrosMsg errorMessage={err} key={idx} />
        ))}
      </div>

      <div>
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
        <div className="relative mt-2">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            title="Enter password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        {errors?.password?.map((err, idx) => (
          <RegFormErrosMsg errorMessage={err} key={idx} />
        ))}
      </div>

      <div>
        <label htmlFor="confirm" className={labelClass}>
          Confirm password
        </label>
        <div className="relative mt-2">
          <input
            id="confirm"
            title="Repeat password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-9.5 w-full rounded-xl border border-[#e4e4ee] px-3.5 pr-11 text-[15px] text-[#1b1b2f] outline-none transition focus:border-[#5b4df0] focus:ring-4 focus:ring-[#5b4df0]/10"
          />
          <button
            type="button"
            aria-label="Show password"
            title={showPassword ? "Hide Password" : "Show Password"}
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8aa3] hover:text-[#5b4df0] cursor-pointer"
          >
            {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors?.confirmPassword && (
          <RegFormErrosMsg errorMessage={errors.confirmPassword} key={errors.confirmPassword} />
        )}
      </div>
      {/* {errors?.confirmPassword ? (
        <RegFormErrosMsg errorMessage={errors?.confirmPassword} key={"error"} />
      ) : (
        ""
      )} */}

      <button
        type="submit"
        onClick={handelSubmit}
        className="h-12 w-full rounded-xl bg-[#5B4DF0] text-base font-semibold text-white shadow-[0_10px_24px_-10px_rgba(91,77,240,0.7)] transition hover:bg-[#4B3DE0] sm:col-span-2"
      >
        Create account
      </button>
    </form>
  );
};

export { Form };
