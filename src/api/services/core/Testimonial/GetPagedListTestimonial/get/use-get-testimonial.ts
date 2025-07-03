import type {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@/api/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getTestimonial } from "./get-testimonial";
import type {
  GetTestimonialRequest,
  GetTestimonialResponseTransformed,
} from "./get-testimonial.types";

export type UseGetTestimonialProps = UseQueryProps<
  ApiResponse<GetTestimonialResponseTransformed>,
  WithParams<GetTestimonialRequest>
>;

export const getTestimonialQueryKey = (params?: GetTestimonialRequest) => ["getTestimonial", ...Object.values(params || {})];

export const useGetTestimonial = (props?: UseGetTestimonialProps) => {
  const { params, ...resProps } = props || {};

  const query = useQuery<ApiResponse<GetTestimonialResponseTransformed>, ApiError>({
  queryKey: getTestimonialQueryKey(params),
  queryFn: () => getTestimonial(params),
    ...resProps,
  });

  return query;
};
