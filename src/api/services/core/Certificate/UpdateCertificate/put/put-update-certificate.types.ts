import { z } from "zod";
import { putUpdateCertificateSchema } from "./put-update-certificate.schema";

// Request
export type PutUpdateCertificateRequest = z.input<typeof putUpdateCertificateSchema.request>;

export type PutUpdateCertificateRequestTransofrmed = z.infer<
  typeof putUpdateCertificateSchema.request
>;

// Response
export type PutUpdateCertificateResponse = z.input<typeof putUpdateCertificateSchema.response>;

export type PutUpdateCertificateResponseTransformed = z.infer<
  typeof putUpdateCertificateSchema.response
>;
