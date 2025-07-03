import type {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/api/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getListCertificate } from "./get-list-certificate";
import type {
  GetListCertificateRequest,
  GetListCertificateResponseTransformed,
} from "./get-list-certificate.types";

export type UseGetListCertificateProps = UseQueryProps<
  ApiResponse<GetListCertificateResponseTransformed>,
  WithParams<GetListCertificateRequest>
>;

export const getListCertificateQueryKey = (params?: GetListCertificateRequest) => ["getListCertificate", ...Object.values(params || {})];

export const useGetListCertificate = (props?: UseGetListCertificateProps) => {
  const { params, ...resProps } = props || {};

  const query = useQuery<ApiResponse<GetListCertificateResponseTransformed>, ApiError>({
  queryKey: getListCertificateQueryKey(params),
  queryFn: () => getListCertificate(params),
    ...resProps,
  });
  return query;
};
