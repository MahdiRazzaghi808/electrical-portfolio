import { z } from "zod";
import { postAuthenticateSchema } from "./post-authenticate.schema";

// Request
export type PostAuthenticateRequest = z.input<typeof postAuthenticateSchema.request>;

export type PostAuthenticateRequestTransofrmed = z.infer<
  typeof postAuthenticateSchema.request
>;

// Response
export type PostAuthenticateResponse = z.input<typeof postAuthenticateSchema.response>;

export type PostAuthenticateResponseTransformed = z.infer<
  typeof postAuthenticateSchema.response
>;
