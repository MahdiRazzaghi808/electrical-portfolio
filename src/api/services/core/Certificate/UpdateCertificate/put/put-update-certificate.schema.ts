import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const putUpdateCertificateRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
    imageName: z.string(),
    description: z.string(),
  })
  .transform((data) => data);

// Response
export const putUpdateCertificateResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const putUpdateCertificateSchema = {
  request: putUpdateCertificateRequestSchemaTransformed,
  response: putUpdateCertificateResponseSchemaTransofrmed,
};