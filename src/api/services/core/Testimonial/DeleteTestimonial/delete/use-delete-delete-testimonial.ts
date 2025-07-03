import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteDeleteTestimonial } from "./delete-delete-testimonial";
import type {
  DeleteDeleteTestimonialRequest,
  DeleteDeleteTestimonialResponseTransformed,
} from "./delete-delete-testimonial.types";

export type UseDeleteDeleteTestimonialProps = UseMutationProps<
  ApiResponse<DeleteDeleteTestimonialResponseTransformed>,
  ApiError,
  DeleteDeleteTestimonialRequest
>;

export const deleteDeleteTestimonialMutationKey = () => ["deleteDeleteTestimonial"];

export const useDeleteDeleteTestimonial = (props?: UseDeleteDeleteTestimonialProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteDeleteTestimonialResponseTransformed>,
    ApiError,
    DeleteDeleteTestimonialRequest
  >({
    mutationKey: deleteDeleteTestimonialMutationKey(),
    mutationFn: (data) => deleteDeleteTestimonial(data),
    ...props,
  });

  return mutation;
};
