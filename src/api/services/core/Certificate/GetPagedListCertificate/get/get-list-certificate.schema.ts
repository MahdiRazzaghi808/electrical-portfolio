import { z } from 'zod';
import {
  coreApiPaginatedRequestSchema,
  coreApiPaginatedResponseSchema,
} from '@/api/instance/core-api';

// Request
export const getListCertificateRequestSchemaTransformed =
  coreApiPaginatedRequestSchema();

// Response
export const getListCertificateResponseSchemaTransofrmed =
  coreApiPaginatedResponseSchema(
    z
      .object({
        id: z.number().int(),
        imageName: z.string(),
        description: z.string(),
      })
      .passthrough()
      .transform((data) => data),
  );

export const getListCertificateSchema = {
  request: getListCertificateRequestSchemaTransformed,
  response: getListCertificateResponseSchemaTransofrmed,
};