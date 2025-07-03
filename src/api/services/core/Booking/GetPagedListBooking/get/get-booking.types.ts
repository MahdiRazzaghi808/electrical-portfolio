import { z } from "zod";
import { getBookingSchema } from "./get-booking.schema";

// Request
export type GetBookingRequest = z.input<typeof getBookingSchema.request>;

export type GetBookingRequestTransofrmed = z.infer<
  typeof getBookingSchema.request
>;

// Response
export type GetBookingResponse = z.input<typeof getBookingSchema.response>;

export type GetBookingResponseTransformed = z.infer<
  typeof getBookingSchema.response
>;
