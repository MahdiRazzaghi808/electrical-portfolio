import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putUpdatePortofilo } from "./put-update-portofilo";
import type {
  PutUpdatePortofiloRequest,
  PutUpdatePortofiloResponseTransformed,
} from "./put-update-portofilo.types";

export type UsePutUpdatePortofiloProps = UseMutationProps<
  ApiResponse<PutUpdatePortofiloResponseTransformed>,
  ApiError,
  PutUpdatePortofiloRequest
>;

export const putUpdatePortofiloMutationKey = () => ["putUpdatePortofilo"];

export const usePutUpdatePortofilo = (props?: UsePutUpdatePortofiloProps) => {
  const mutation = useMutation<
    ApiResponse<PutUpdatePortofiloResponseTransformed>,
    ApiError,
    PutUpdatePortofiloRequest
  >({
    mutationKey: putUpdatePortofiloMutationKey(),
    mutationFn: (data) => putUpdatePortofilo(data),
    ...props,
  });

  return mutation;
};
