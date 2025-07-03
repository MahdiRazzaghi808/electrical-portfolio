import { z } from 'zod';
import {
  coreApiPaginatedRequestSchema,
  coreApiPaginatedResponseSchema,
} from '@/api/instance/core-api';

// Request
export const getListPortofiloRequestSchemaTransformed =
  coreApiPaginatedRequestSchema();

// Response
export const getListPortofiloResponseSchemaTransofrmed =
  coreApiPaginatedResponseSchema(
    z
      .object({
        id: z.number(),
        title: z.string(),
        shortDesc: z.string(),
        description: z.string(),
        imageName: z.string(),
      })
      .passthrough()
      .transform((data) => data),
  );

export const getListPortofiloSchema = {
  request: getListPortofiloRequestSchemaTransformed,
  response: getListPortofiloResponseSchemaTransofrmed,
};