import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { postCreateCertificateSchema as schema } from "./post-create-certificate.schema";
import type {
  PostCreateCertificateRequest,
  PostCreateCertificateResponseTransformed,
} from "./post-create-certificate.types";
import { AxiosRequestConfig } from "axios";

export const postCreateCertificateURL = () =>
  path.join("/Certificate/CreateCertificate");

export const postCreateCertificate = async (
  props?: PostCreateCertificateRequest,
  option?: AxiosRequestConfig,
): Promise<ApiResponse<PostCreateCertificateResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postCreateCertificateURL();

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
