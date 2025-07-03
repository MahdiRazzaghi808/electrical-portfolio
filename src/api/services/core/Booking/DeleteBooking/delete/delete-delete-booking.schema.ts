import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import { z } from 'zod';

// Request
export const deleteDeleteBookingRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
  })
  .transform((data) => data);

// Response
export const deleteDeleteBookingResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const deleteDeleteBookingSchema = {
  request: deleteDeleteBookingRequestSchemaTransformed,
  response: deleteDeleteBookingResponseSchemaTransofrmed,
};