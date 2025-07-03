import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';

// Request
export const postCreateTestimonialRequestSchemaTransformed = z
  .object({
    fullName: z.string(),
    message: z.string()
  })
  .transform((data) => data);

// Response
export const postCreateTestimonialResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const postCreateTestimonialSchema = {
  request: postCreateTestimonialRequestSchemaTransformed,
  response: postCreateTestimonialResponseSchemaTransofrmed,
};