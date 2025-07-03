import { z } from 'zod';
import {
  coreApiPaginatedRequestSchema,
  coreApiPaginatedResponseSchema,
} from '@/api/instance/core-api';

// Request
export const getTestimonialRequestSchemaTransformed =
  coreApiPaginatedRequestSchema();

// Response
export const getTestimonialResponseSchemaTransofrmed =
  coreApiPaginatedResponseSchema(
    z
      .object({
        id: z.number().int(),
        fullName: z.string(),
        message: z.string(),
      })
      .passthrough()
      .transform((data) => data),
  );

export const getTestimonialSchema = {
  request: getTestimonialRequestSchemaTransformed,
  response: getTestimonialResponseSchemaTransofrmed,
};