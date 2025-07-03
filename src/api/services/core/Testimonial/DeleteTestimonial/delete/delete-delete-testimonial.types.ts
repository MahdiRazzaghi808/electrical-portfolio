import { z } from "zod";
import { deleteDeleteTestimonialSchema } from "./delete-delete-testimonial.schema";

// Request
export type DeleteDeleteTestimonialRequest = z.input<typeof deleteDeleteTestimonialSchema.request>;

export type DeleteDeleteTestimonialRequestTransofrmed = z.infer<
  typeof deleteDeleteTestimonialSchema.request
>;

// Response
export type DeleteDeleteTestimonialResponse = z.input<typeof deleteDeleteTestimonialSchema.response>;

export type DeleteDeleteTestimonialResponseTransformed = z.infer<
  typeof deleteDeleteTestimonialSchema.response
>;
