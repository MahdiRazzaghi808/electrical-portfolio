import { z } from "zod";
import { postCreateBookingSchema } from "./post-create-booking.schema";

// Request
export type PostCreateBookingRequest = z.input<typeof postCreateBookingSchema.request>;

export type PostCreateBookingRequestTransofrmed = z.infer<
  typeof postCreateBookingSchema.request
>;

// Response
export type PostCreateBookingResponse = z.input<typeof postCreateBookingSchema.response>;

export type PostCreateBookingResponseTransformed = z.infer<
  typeof postCreateBookingSchema.response
>;
