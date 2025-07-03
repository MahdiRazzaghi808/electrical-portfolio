import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { getTestimonialSchema as schema } from "./get-testimonial.schema";
import type {
  GetTestimonialRequest,
  GetTestimonialResponse,
  GetTestimonialResponseTransformed,
} from "./get-testimonial.types";
import { AxiosRequestConfig } from "axios";

const getTestimonialURL = () => path.join("/Testimonial/GetPagedListTestimonial");

export const getTestimonial = async (
  props?: GetTestimonialRequest,
  options?: AxiosRequestConfig,
): Promise<ApiResponse<GetTestimonialResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getTestimonialURL();

  const response = await requestHandler(
    () => coreApi.get<GetTestimonialResponse>(URL, { params: payloadParsed, ...options }),
    schema.response._def.schema,
    {
      isMock: false,
    },
  );

  try {
    console.log("response.data", response.data);
    
    response.data = schema.response.parse(response.data);
  } catch {
    toast.error(t.toast.error.parseResponse);
  }

  return response;
};
