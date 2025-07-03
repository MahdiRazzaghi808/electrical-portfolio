import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import { z } from 'zod';

// Request
export const deleteDeleteCertificateRequestSchemaTransformed = z
  .object({
    id: z.number().int(),

  })
  .transform((data) => data);

// Response
export const deleteDeleteCertificateResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const deleteDeleteCertificateSchema = {
  request: deleteDeleteCertificateRequestSchemaTransformed,
  response: deleteDeleteCertificateResponseSchemaTransofrmed,
};