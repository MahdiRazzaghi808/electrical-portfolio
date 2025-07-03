import { z } from "zod";
import { getTestimonialSchema } from "./get-testimonial.schema";

// Request
export type GetTestimonialRequest = z.input<typeof getTestimonialSchema.request>;

export type GetTestimonialRequestTransofrmed = z.infer<
  typeof getTestimonialSchema.request
>;

// Response
export type GetTestimonialResponse = z.input<typeof getTestimonialSchema.response>;

export type GetTestimonialResponseTransformed = z.infer<
  typeof getTestimonialSchema.response
>;
