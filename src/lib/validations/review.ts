import * as z from 'zod';

export const reviewCreateSchema = z.object({
  body: z.string().min(3).max(128).optional(),
  rating: z.number().optional()
});
