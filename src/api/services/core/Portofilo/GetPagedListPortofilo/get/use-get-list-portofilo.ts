import type {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/api/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getListPortofilo } from "./get-list-portofilo";
import type {
  GetListPortofiloRequest,
  GetListPortofiloResponseTransformed,
} from "./get-list-portofilo.types";

export type UseGetListPortofiloProps = UseQueryProps<
  ApiResponse<GetListPortofiloResponseTransformed>,
  WithParams<GetListPortofiloRequest>
>;

export const getListPortofiloQueryKey = (params?: GetListPortofiloRequest) => ["getListPortofilo", ...Object.values(params || {})];

export const useGetListPortofilo = (props?: UseGetListPortofiloProps) => {
  const { params, ...resProps } = props || {};

  const query = useQuery<ApiResponse<GetListPortofiloResponseTransformed>, ApiError>({
  queryKey: getListPortofiloQueryKey(params),
  queryFn: () => getListPortofilo(params),
    ...resProps,
  });

  return query;
};
