import { z } from "zod";
import { postCreatePortofiloSchema } from "./post-create-portofilo.schema";

// Request
export type PostCreatePortofiloRequest = z.input<typeof postCreatePortofiloSchema.request>;

export type PostCreatePortofiloRequestTransofrmed = z.infer<
  typeof postCreatePortofiloSchema.request
>;

// Response
export type PostCreatePortofiloResponse = z.input<typeof postCreatePortofiloSchema.response>;

export type PostCreatePortofiloResponseTransformed = z.infer<
  typeof postCreatePortofiloSchema.response
>;
