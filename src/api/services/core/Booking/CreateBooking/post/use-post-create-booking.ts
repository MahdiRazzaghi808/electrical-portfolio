import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postCreateBooking } from "./post-create-booking";
import type {
  PostCreateBookingRequest,
  PostCreateBookingResponseTransformed,
} from "./post-create-booking.types";

export type UsePostCreateBookingProps = UseMutationProps<
  ApiResponse<PostCreateBookingResponseTransformed>,
  ApiError,
  PostCreateBookingRequest
>;

export const postCreateBookingMutationKey = () => ["postCreateBooking"];

export const usePostCreateBooking = (props?: UsePostCreateBookingProps) => {
  const mutation = useMutation<
    ApiResponse<PostCreateBookingResponseTransformed>,
    ApiError,
    PostCreateBookingRequest
  >({
    mutationKey: postCreateBookingMutationKey(),
    mutationFn: (data) => postCreateBooking(data),
    ...props,
  });

  return mutation;
};
