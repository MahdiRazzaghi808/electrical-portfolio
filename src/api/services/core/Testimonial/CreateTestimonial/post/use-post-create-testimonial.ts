import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postCreateTestimonial } from "./post-create-testimonial";
import type {
  PostCreateTestimonialRequest,
  PostCreateTestimonialResponseTransformed,
} from "./post-create-testimonial.types";

export type UsePostCreateTestimonialProps = UseMutationProps<
  ApiResponse<PostCreateTestimonialResponseTransformed>,
  ApiError,
  PostCreateTestimonialRequest
>;

export const postCreateTestimonialMutationKey = () => ["postCreateTestimonial"];

export const usePostCreateTestimonial = (props?: UsePostCreateTestimonialProps) => {
  const mutation = useMutation<
    ApiResponse<PostCreateTestimonialResponseTransformed>,
    ApiError,
    PostCreateTestimonialRequest
  >({
    mutationKey: postCreateTestimonialMutationKey(),
    mutationFn: (data) => postCreateTestimonial(data),
    ...props,
  });

  return mutation;
};
