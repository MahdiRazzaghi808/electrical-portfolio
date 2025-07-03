import { z } from "zod";
import { deleteDeleteBookingSchema } from "./delete-delete-booking.schema";

// Request
export type DeleteDeleteBookingRequest = z.input<typeof deleteDeleteBookingSchema.request>;

export type DeleteDeleteBookingRequestTransofrmed = z.infer<
  typeof deleteDeleteBookingSchema.request
>;

// Response
export type DeleteDeleteBookingResponse = z.input<typeof deleteDeleteBookingSchema.response>;

export type DeleteDeleteBookingResponseTransformed = z.infer<
  typeof deleteDeleteBookingSchema.response
>;
