import * as z from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(4, "Name should have more than 3 alphabets").max(19, "Name should be less than 20"),
  email: z.string().email({message: "Invalid email address"}),
  password: z
    .string()
    .min(6, "Too small expects at least 6 characters")
    .max(20, "Password is too long")
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
})