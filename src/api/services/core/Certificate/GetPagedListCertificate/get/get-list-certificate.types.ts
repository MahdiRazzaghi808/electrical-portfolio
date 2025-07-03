import { z } from "zod";
import { getListCertificateSchema } from "./get-list-certificate.schema";

// Request
export type GetListCertificateRequest = z.input<typeof getListCertificateSchema.request>;

export type GetListCertificateRequestTransofrmed = z.infer<
  typeof getListCertificateSchema.request
>;

// Response
export type GetListCertificateResponse = z.input<typeof getListCertificateSchema.response>;

export type GetListCertificateResponseTransformed = z.infer<
  typeof getListCertificateSchema.response
>;
