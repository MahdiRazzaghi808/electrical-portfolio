import { z } from 'zod';
import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import t from '@/json/fa.json';

// Request
export const putUpdatePortofiloRequestSchemaTransformed = z
  .object({
    id: z.number().int(),
    title: z.string(),
    shortDesc: z.string(),
    description: z.string(),
    imageName: z.string(),
  })
  .transform((data) => data);

// Response
export const putUpdatePortofiloResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const putUpdatePortofiloSchema = {
  request: putUpdatePortofiloRequestSchemaTransformed,
  response: putUpdatePortofiloResponseSchemaTransofrmed,
};