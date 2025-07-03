import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { deleteDeleteBookingSchema as schema } from "./delete-delete-booking.schema";
import type {
  DeleteDeleteBookingRequest,
  DeleteDeleteBookingResponseTransformed,
} from "./delete-delete-booking.types";
import { AxiosRequestConfig } from "axios";

export const deleteDeleteBookingURL = () => 
  path.join("/Booking/DeleteBooking");

export const deleteDeleteBooking = async (
  props?: DeleteDeleteBookingRequest,
  option?: AxiosRequestConfig, 
): Promise<ApiResponse<DeleteDeleteBookingResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteDeleteBookingURL();

  const response = await requestHandler(
    () => coreApi.delete(URL, payloadParsed),
    schema.response._def.schema,
    {
      isMock: false,
    },
  );

  try {
    response.data = schema.response.parse(response.data);
  } catch {
    toast.error(t.toast.error.parseResponse);
  }

  return response;
};
