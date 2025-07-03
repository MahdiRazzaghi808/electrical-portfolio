import { z } from "zod";
import { postCreateTestimonialSchema } from "./post-create-testimonial.schema";

// Request
export type PostCreateTestimonialRequest = z.input<typeof postCreateTestimonialSchema.request>;

export type PostCreateTestimonialRequestTransofrmed = z.infer<
  typeof postCreateTestimonialSchema.request
>;

// Response
export type PostCreateTestimonialResponse = z.input<typeof postCreateTestimonialSchema.response>;

export type PostCreateTestimonialResponseTransformed = z.infer<
  typeof postCreateTestimonialSchema.response
>;
