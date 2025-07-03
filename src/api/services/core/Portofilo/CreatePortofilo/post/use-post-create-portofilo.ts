import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postCreatePortofilo } from "./post-create-portofilo";
import type {
  PostCreatePortofiloRequest,
  PostCreatePortofiloResponseTransformed,
} from "./post-create-portofilo.types";

export type UsePostCreatePortofiloProps = UseMutationProps<
  ApiResponse<PostCreatePortofiloResponseTransformed>,
  ApiError,
  PostCreatePortofiloRequest
>;

export const postCreatePortofiloMutationKey = () => ["postCreatePortofilo"];

export const usePostCreatePortofilo = (props?: UsePostCreatePortofiloProps) => {
  const mutation = useMutation<
    ApiResponse<PostCreatePortofiloResponseTransformed>,
    ApiError,
    PostCreatePortofiloRequest
  >({
    mutationKey: postCreatePortofiloMutationKey(),
    mutationFn: (data) => postCreatePortofilo(data),
    ...props,
  });

  return mutation;
};
