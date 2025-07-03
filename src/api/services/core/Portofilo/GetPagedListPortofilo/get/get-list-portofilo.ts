import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { getListPortofiloSchema as schema } from "./get-list-portofilo.schema";
import type {
  GetListPortofiloRequest,
  GetListPortofiloResponse,
  GetListPortofiloResponseTransformed,
} from "./get-list-portofilo.types";
import { AxiosRequestConfig } from "axios";

const getListPortofiloURL = () => path.join("/Portofilo/GetPagedListPortofilo");

export const getListPortofilo = async (
  props?: GetListPortofiloRequest,
  options?: AxiosRequestConfig, 
): Promise<ApiResponse<GetListPortofiloResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getListPortofiloURL();

  const response = await requestHandler(
    () => coreApi.get<GetListPortofiloResponse>(URL, { params: payloadParsed , ...options}),
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
