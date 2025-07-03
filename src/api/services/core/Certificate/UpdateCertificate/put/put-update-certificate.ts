import path from "path";
import { toast } from 'sonner';
import t from '@/json/fa.json';
import { coreApi } from "@/api/instance/core-api";
import type { ApiResponse } from "@/api/types/api.types";
import { requestHandler } from "@/api/utils/request-handler";
import { putUpdateCertificateSchema as schema } from "./put-update-certificate.schema";
import type {
  PutUpdateCertificateRequest,
  PutUpdateCertificateResponseTransformed,
} from "./put-update-certificate.types";
import { AxiosRequestConfig } from "axios";

export const putUpdateCertificateURL = (id: PutUpdateCertificateRequest['id']) =>
  path.join("/CertificateUpdateCertificate", `${id}`);

export const putUpdateCertificate = async (
  props?: PutUpdateCertificateRequest,
  option?: AxiosRequestConfig,
): Promise<ApiResponse<PutUpdateCertificateResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putUpdateCertificateURL(payloadParsed.id);

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
