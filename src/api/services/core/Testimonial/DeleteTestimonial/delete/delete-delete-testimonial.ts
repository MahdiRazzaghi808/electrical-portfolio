import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { deleteDeleteTestimonialSchema as schema } from "./delete-delete-testimonial.schema";
import type {
  DeleteDeleteTestimonialRequest,
  DeleteDeleteTestimonialResponseTransformed,
} from "./delete-delete-testimonial.types";
import { AxiosRequestConfig } from "axios";

export const deleteDeleteTestimonialURL = (id: DeleteDeleteTestimonialRequest['id']) => 
  path.join("/Testimonial/DeleteTestimonial", `${id}`);

export const deleteDeleteTestimonial = async (
  props?: DeleteDeleteTestimonialRequest,
  option?: AxiosRequestConfig, 
): Promise<ApiResponse<DeleteDeleteTestimonialResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteDeleteTestimonialURL(payloadParsed.id);

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
