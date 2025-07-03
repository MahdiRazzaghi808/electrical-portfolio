import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteDeletePortofilo } from "./delete-delete-portofilo";
import type {
  DeleteDeletePortofiloRequest,
  DeleteDeletePortofiloResponseTransformed,
} from "./delete-delete-portofilo.types";

export type UseDeleteDeletePortofiloProps = UseMutationProps<
  ApiResponse<DeleteDeletePortofiloResponseTransformed>,
  ApiError,
  DeleteDeletePortofiloRequest
>;

export const deleteDeletePortofiloMutationKey = () => ["deleteDeletePortofilo"];

export const useDeleteDeletePortofilo = (props?: UseDeleteDeletePortofiloProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteDeletePortofiloResponseTransformed>,
    ApiError,
    DeleteDeletePortofiloRequest
  >({
    mutationKey: deleteDeletePortofiloMutationKey(),
    mutationFn: (data) => deleteDeletePortofilo(data),
    ...props,
  });

  return mutation;
};
