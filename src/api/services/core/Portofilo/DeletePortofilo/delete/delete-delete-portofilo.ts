import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { deleteDeletePortofiloSchema as schema } from "./delete-delete-portofilo.schema";
import type {
  DeleteDeletePortofiloRequest,
  DeleteDeletePortofiloResponseTransformed,
} from "./delete-delete-portofilo.types";
import { AxiosRequestConfig } from "axios";

export const deleteDeletePortofiloURL = (id: DeleteDeletePortofiloRequest['id']) => 
  path.join(`/Portofilo/DeletePortofilo?Id=${id}`);

export const deleteDeletePortofilo = async (
  props?: DeleteDeletePortofiloRequest,
  option?: AxiosRequestConfig, 
): Promise<ApiResponse<DeleteDeletePortofiloResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteDeletePortofiloURL(payloadParsed.id);

  const response = await requestHandler(
    () => coreApi.delete(URL),
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
