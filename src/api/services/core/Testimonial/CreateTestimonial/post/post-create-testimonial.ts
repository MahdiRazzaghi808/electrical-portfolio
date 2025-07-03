import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { postCreateTestimonialSchema as schema } from "./post-create-testimonial.schema";
import type {
  PostCreateTestimonialRequest,
  PostCreateTestimonialResponseTransformed,
} from "./post-create-testimonial.types";
import { AxiosRequestConfig } from "axios";

export const postCreateTestimonialURL = () =>
  path.join("/Testimonial/CreateTestimonial");

export const postCreateTestimonial = async (
  props?: PostCreateTestimonialRequest,
  option?: AxiosRequestConfig,
): Promise<ApiResponse<PostCreateTestimonialResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postCreateTestimonialURL();

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
