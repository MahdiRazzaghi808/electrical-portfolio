import type {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/api/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "./get-booking";
import type {
  GetBookingRequest,
  GetBookingResponseTransformed,
} from "./get-booking.types";

export type UseGetBookingProps = UseQueryProps<
  ApiResponse<GetBookingResponseTransformed>,
  WithParams<GetBookingRequest>
>;

export const getBookingQueryKey = (params?: GetBookingRequest) => ["getBooking", ...Object.values(params || {})];

export const useGetBooking = (props?: UseGetBookingProps) => {
  const { params, ...resProps } = props || {};

  const query = useQuery<ApiResponse<GetBookingResponseTransformed>, ApiError>({
  queryKey: getBookingQueryKey(params),
  queryFn: () => getBooking(params),
    ...resProps,
  });

  return query;
};
