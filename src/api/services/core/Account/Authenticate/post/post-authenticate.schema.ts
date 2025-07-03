import { coreApiMutationResponseSchema } from '@/api/instance/core-api';
import { z } from 'zod';

// Request
export const postAuthenticateRequestSchemaTransformed = z
  .object({
    userName: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
  })
  .transform((data) => data);

// Response
export const postAuthenticateResponseSchemaTransofrmed =
  z.object({
    data: z.object({
      email: z.string(),
      id: z.string(),
      isVerified: z.boolean(),
      jwToken: z.string(),
      roles: z.array(z.any()),
      userName: z.string()
    }).passthrough()

  }).transform((data) => data);

export const postAuthenticateSchema = {
  request: postAuthenticateRequestSchemaTransformed,
  response: postAuthenticateResponseSchemaTransofrmed,
};