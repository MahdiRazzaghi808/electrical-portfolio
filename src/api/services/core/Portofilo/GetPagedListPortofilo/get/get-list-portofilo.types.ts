import { z } from "zod";
import { getListPortofiloSchema } from "./get-list-portofilo.schema";

// Request
export type GetListPortofiloRequest = z.input<typeof getListPortofiloSchema.request>;

export type GetListPortofiloRequestTransofrmed = z.infer<
  typeof getListPortofiloSchema.request
>;

// Response
export type GetListPortofiloResponse = z.input<typeof getListPortofiloSchema.response>;

export type GetListPortofiloResponseTransformed = z.infer<
  typeof getListPortofiloSchema.response
>;
