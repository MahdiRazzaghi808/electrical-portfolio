import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api"; 
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { getListCertificateSchema as schema } from "./get-list-certificate.schema";
import type {
  GetListCertificateRequest,
  GetListCertificateResponse,
  GetListCertificateResponseTransformed,
} from "./get-list-certificate.types";
import { AxiosRequestConfig } from "axios";

const getListCertificateURL = () => path.join("/Certificate/GetPagedListCertificate");

export const getListCertificate = async (
  props?: GetListCertificateRequest,
  options?: AxiosRequestConfig, 
): Promise<ApiResponse<GetListCertificateResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getListCertificateURL();

  const response = await requestHandler(
    () => coreApi.get<GetListCertificateResponse>(URL, { params: payloadParsed , ...options}),
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
