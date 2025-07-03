import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const deleteDeletePortofiloRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
  })
  .transform((data) => data);

// Response
export const deleteDeletePortofiloResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const deleteDeletePortofiloSchema = {
  request: deleteDeletePortofiloRequestSchemaTransformed,
  response: deleteDeletePortofiloResponseSchemaTransofrmed,
};