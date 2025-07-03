import { z } from "zod";
import { postCreateCertificateSchema } from "./post-create-certificate.schema";

// Request
export type PostCreateCertificateRequest = z.input<typeof postCreateCertificateSchema.request>;

export type PostCreateCertificateRequestTransofrmed = z.infer<
  typeof postCreateCertificateSchema.request
>;

// Response
export type PostCreateCertificateResponse = z.input<typeof postCreateCertificateSchema.response>;

export type PostCreateCertificateResponseTransformed = z.infer<
  typeof postCreateCertificateSchema.response
>;
