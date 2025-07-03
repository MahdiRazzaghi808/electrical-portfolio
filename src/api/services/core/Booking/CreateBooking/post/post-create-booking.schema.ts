import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import { z } from 'zod';

// Request
export const postCreateBookingRequestSchemaTransformed = z.object({
  fullName: z.string(),
  postCode: z.string(),
  serviceType: z.number(),
  phoneNumber: z.string(),
  message: z.string(),
}).transform((data) => data);

// Response
export const postCreateBookingResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const postCreateBookingSchema = {
  request: postCreateBookingRequestSchemaTransformed,
  response: postCreateBookingResponseSchemaTransofrmed,
};