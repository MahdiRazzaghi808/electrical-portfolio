import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const deleteDeleteTestimonialRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
  })
  .transform((data) => data);

// Response
export const deleteDeleteTestimonialResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const deleteDeleteTestimonialSchema = {
  request: deleteDeleteTestimonialRequestSchemaTransformed,
  response: deleteDeleteTestimonialResponseSchemaTransofrmed,
};