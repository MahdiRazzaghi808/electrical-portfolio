import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteDeleteBooking } from "./delete-delete-booking";
import type {
  DeleteDeleteBookingRequest,
  DeleteDeleteBookingResponseTransformed,
} from "./delete-delete-booking.types";

export type UseDeleteDeleteBookingProps = UseMutationProps<
  ApiResponse<DeleteDeleteBookingResponseTransformed>,
  ApiError,
  DeleteDeleteBookingRequest
>;

export const deleteDeleteBookingMutationKey = () => ["deleteDeleteBooking"];

export const useDeleteDeleteBooking = (props?: UseDeleteDeleteBookingProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteDeleteBookingResponseTransformed>,
    ApiError,
    DeleteDeleteBookingRequest
  >({
    mutationKey: deleteDeleteBookingMutationKey(),
    mutationFn: (data) => deleteDeleteBooking(data),
    ...props,
  });

  return mutation;
};
