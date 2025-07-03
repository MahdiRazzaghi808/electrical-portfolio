import { z } from "zod";
import { putUpdatePortofiloSchema } from "./put-update-portofilo.schema";

// Request
export type PutUpdatePortofiloRequest = z.input<typeof putUpdatePortofiloSchema.request>;

export type PutUpdatePortofiloRequestTransofrmed = z.infer<
  typeof putUpdatePortofiloSchema.request
>;

// Response
export type PutUpdatePortofiloResponse = z.input<typeof putUpdatePortofiloSchema.response>;

export type PutUpdatePortofiloResponseTransformed = z.infer<
  typeof putUpdatePortofiloSchema.response
>;
