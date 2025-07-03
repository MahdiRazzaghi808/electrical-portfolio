import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { getBookingSchema as schema } from "./get-booking.schema";
import type {
  GetBookingRequest,
  GetBookingResponse,
  GetBookingResponseTransformed,
} from "./get-booking.types";
import { AxiosRequestConfig } from "axios";

const getBookingURL = () => path.join("/Booking/GetPagedListBooking");

export const getBooking = async (
  props?: GetBookingRequest,
  options?: AxiosRequestConfig, 
): Promise<ApiResponse<GetBookingResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getBookingURL();

  const response = await requestHandler(
    () => coreApi.get<GetBookingResponse>(URL, { params: payloadParsed , ...options}),
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
