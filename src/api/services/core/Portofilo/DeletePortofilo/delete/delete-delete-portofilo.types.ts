import { z } from "zod";
import { deleteDeletePortofiloSchema } from "./delete-delete-portofilo.schema";

// Request
export type DeleteDeletePortofiloRequest = z.input<typeof deleteDeletePortofiloSchema.request>;

export type DeleteDeletePortofiloRequestTransofrmed = z.infer<
  typeof deleteDeletePortofiloSchema.request
>;

// Response
export type DeleteDeletePortofiloResponse = z.input<typeof deleteDeletePortofiloSchema.response>;

export type DeleteDeletePortofiloResponseTransformed = z.infer<
  typeof deleteDeletePortofiloSchema.response
>;
