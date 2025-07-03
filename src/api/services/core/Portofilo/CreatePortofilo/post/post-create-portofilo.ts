import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { postCreatePortofiloSchema as schema } from "./post-create-portofilo.schema";
import type {
  PostCreatePortofiloRequest,
  PostCreatePortofiloResponseTransformed,
} from "./post-create-portofilo.types";
import { AxiosRequestConfig } from "axios";

export const postCreatePortofiloURL = () =>
  path.join("/Portofilo/CreatePortofilo");

export const postCreatePortofilo = async (
  props?: PostCreatePortofiloRequest,
  option?: AxiosRequestConfig,
): Promise<ApiResponse<PostCreatePortofiloResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postCreatePortofiloURL();

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
