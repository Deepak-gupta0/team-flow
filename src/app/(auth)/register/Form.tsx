"use client";

import { useState } from "react";
import { RegisterErrors } from "../validators";
import { registerSchema } from "@/app/schemas/register.schema";
import { RegFormErrosMsg } from "./regFormErrosMsg";

const Form = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<RegisterErrors>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setErrors({
        confirmPassword: "confirm password should be same as password."
      })
      return;
    }
    setErrors({});
    console.log(fullName, email, password);
    const result = registerSchema.safeParse({ fullName, email, password });
    // console.log(result)
    if (result.success) {
      console.log("Your input has successfully been processed.");
      return
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full rounded-xl bg-white px-4 text-[15px] text-slate-900 outline-none"
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
        <input
          id="password"
          type="password"
          placeholder="Min. 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
        {errors?.password?.map((err, idx) => (
          <RegFormErrosMsg errorMessage={err} key={idx} />
        ))}
      </div>

      <div>
        <label htmlFor="confirm" className={labelClass}>
          Confirm password
        </label>
        <input
          id="confirm"
          type="password"
          placeholder="Repeat password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={inputClass}
        />
         {errors?.password?.map((err, idx) => (
          <RegFormErrosMsg errorMessage={err} key={idx}/>
        ))}
      </div>
      {errors?.confirmPassword ? <RegFormErrosMsg errorMessage={errors?.confirmPassword} key={"error"} /> : <></>}
        
      <button
        type="submit"
        onClick={(e: any) => submit(e)}
        className="h-12 w-full rounded-xl bg-[#5B4DF0] text-base font-semibold text-white shadow-[0_10px_24px_-10px_rgba(91,77,240,0.7)] transition hover:bg-[#4B3DE0] sm:col-span-2"
      >
        Create account
      </button>
    </form>
  );
};

export { Form };
