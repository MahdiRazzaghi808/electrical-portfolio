import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postAuthenticate } from "./post-authenticate";
import type {
  PostAuthenticateRequest,
  PostAuthenticateResponseTransformed,
} from "./post-authenticate.types";

export type UsePostAuthenticateProps = UseMutationProps<
  ApiResponse<PostAuthenticateResponseTransformed>,
  ApiError,
  PostAuthenticateRequest
>;

export const postAuthenticateMutationKey = () => ["postAuthenticate"];

export const usePostAuthenticate = (props?: UsePostAuthenticateProps) => {
  const mutation = useMutation<
    ApiResponse<PostAuthenticateResponseTransformed>,
    ApiError,
    PostAuthenticateRequest
  >({
    mutationKey: postAuthenticateMutationKey(),
    mutationFn: (data) => postAuthenticate(data),
    ...props,
  });

  return mutation;
};
