import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import { z } from 'zod';

// Request
export const postCreatePortofiloRequestSchemaTransformed = z
  .object({
    title: z.string(),
    shortDesc: z.string(),
    description: z.string(),
    imageName: z.string(),
  })
  .transform((data) => data);

// Response
export const postCreatePortofiloResponseSchemaTransofrmed =
  coreApiMutationResponseSchema().transform((data) => data);

export const postCreatePortofiloSchema = {
  request: postCreatePortofiloRequestSchemaTransformed,
  response: postCreatePortofiloResponseSchemaTransofrmed,
};