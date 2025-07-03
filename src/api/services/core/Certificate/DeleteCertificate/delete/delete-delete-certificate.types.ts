import { z } from "zod";
import { deleteDeleteCertificateSchema } from "./delete-delete-certificate.schema";

// Request
export type DeleteDeleteCertificateRequest = z.input<typeof deleteDeleteCertificateSchema.request>;

export type DeleteDeleteCertificateRequestTransofrmed = z.infer<
  typeof deleteDeleteCertificateSchema.request
>;

// Response
export type DeleteDeleteCertificateResponse = z.input<typeof deleteDeleteCertificateSchema.response>;

export type DeleteDeleteCertificateResponseTransformed = z.infer<
  typeof deleteDeleteCertificateSchema.response
>;
