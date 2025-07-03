import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { putUpdatePortofiloSchema as schema } from "./put-update-portofilo.schema";
import type {
  PutUpdatePortofiloRequest,
  PutUpdatePortofiloResponseTransformed,
} from "./put-update-portofilo.types";
import { AxiosRequestConfig } from "axios";

export const putUpdatePortofiloURL = () =>
  path.join("/Portofilo/UpdatePortofilo");

export const putUpdatePortofilo = async (
  props?: PutUpdatePortofiloRequest,
  option?: AxiosRequestConfig,
): Promise<ApiResponse<PutUpdatePortofiloResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putUpdatePortofiloURL();

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
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
