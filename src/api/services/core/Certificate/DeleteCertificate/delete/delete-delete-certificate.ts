import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { deleteDeleteCertificateSchema as schema } from "./delete-delete-certificate.schema";
import type {
  DeleteDeleteCertificateRequest,
  DeleteDeleteCertificateResponseTransformed,
} from "./delete-delete-certificate.types";
import { AxiosRequestConfig } from "axios";

export const deleteDeleteCertificateURL = (id: DeleteDeleteCertificateRequest['id']) => 
  path.join("/Certificate/DeleteCertificate", `${id}`);

export const deleteDeleteCertificate = async (
  props?: DeleteDeleteCertificateRequest,
  option?: AxiosRequestConfig, 
): Promise<ApiResponse<DeleteDeleteCertificateResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteDeleteCertificateURL(payloadParsed.id);

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
