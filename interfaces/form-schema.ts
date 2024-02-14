import * as z from "zod";

export const createFormSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Form name should atleast contain 4 characters" }),
  description: z.string().optional(),
});

export type createFormSchemaType = z.infer<typeof createFormSchema>;
