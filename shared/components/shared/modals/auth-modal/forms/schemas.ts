import { z } from "zod";

export const passwordSchema = z.string().min(4, "Too short password");

export const formLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, "Enter name and surname"),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  
export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;