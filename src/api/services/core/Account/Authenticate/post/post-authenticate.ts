import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { postAuthenticateSchema as schema } from "./post-authenticate.schema";
import type {
  PostAuthenticateRequest,
  PostAuthenticateResponseTransformed,
} from "./post-authenticate.types";
import { AxiosRequestConfig } from "axios";

export const postAuthenticateURL = () =>
  path.join("/Account/Authenticate");

export const postAuthenticate = async (
  props?: PostAuthenticateRequest,
  option?: AxiosRequestConfig,
): Promise<ApiResponse<PostAuthenticateResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postAuthenticateURL();

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
