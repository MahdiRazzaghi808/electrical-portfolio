import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { postCreateBookingSchema as schema } from "./post-create-booking.schema";
import type {
  PostCreateBookingRequest,
  PostCreateBookingResponseTransformed,
} from "./post-create-booking.types";
import { AxiosRequestConfig } from "axios";

export const postCreateBookingURL = () => 
  path.join("/Booking/CreateBooking");

export const postCreateBooking = async (
  props?: PostCreateBookingRequest,
  option?: AxiosRequestConfig, 
): Promise<ApiResponse<PostCreateBookingResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postCreateBookingURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
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
