import { z } from 'zod';
import {
  coreApiPaginatedRequestSchema,
  coreApiPaginatedResponseSchema,
} from '@/api/instance/core-api';

// Request
export const getBookingRequestSchemaTransformed =
  coreApiPaginatedRequestSchema();

// Response
export const getBookingResponseSchemaTransofrmed =
  coreApiPaginatedResponseSchema(
    z
      .object(
        {
          id: z.number().int(),
          fullName: z.string(),
          postCode: z.string(),
          serviceType: z.number().int(),
          phoneNumber: z.string(),
          message: z.string()

        })
      .passthrough()
      .transform((data) => data),
  );

export const getBookingSchema = {
  request: getBookingRequestSchemaTransformed,
  response: getBookingResponseSchemaTransofrmed,
};