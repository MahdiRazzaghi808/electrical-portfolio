import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const postCreateCertificateRequestSchemaTransformed = z
  .object({
    imageName: z.string(),
    description: z.string()
  })
  .transform((data) => data);

// Response
export const postCreateCertificateResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const postCreateCertificateSchema = {
  request: postCreateCertificateRequestSchemaTransformed,
  response: postCreateCertificateResponseSchemaTransofrmed,
};