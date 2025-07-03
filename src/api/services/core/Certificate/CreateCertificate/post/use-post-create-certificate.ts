import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postCreateCertificate } from "./post-create-certificate";
import type {
  PostCreateCertificateRequest,
  PostCreateCertificateResponseTransformed,
} from "./post-create-certificate.types";

export type UsePostCreateCertificateProps = UseMutationProps<
  ApiResponse<PostCreateCertificateResponseTransformed>,
  ApiError,
  PostCreateCertificateRequest
>;

export const postCreateCertificateMutationKey = () => ["postCreateCertificate"];

export const usePostCreateCertificate = (props?: UsePostCreateCertificateProps) => {
  const mutation = useMutation<
    ApiResponse<PostCreateCertificateResponseTransformed>,
    ApiError,
    PostCreateCertificateRequest
  >({
    mutationKey: postCreateCertificateMutationKey(),
    mutationFn: (data) => postCreateCertificate(data),
    ...props,
  });

  return mutation;
};
