import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putUpdateCertificate } from "./put-update-certificate";
import type {
  PutUpdateCertificateRequest,
  PutUpdateCertificateResponseTransformed,
} from "./put-update-certificate.types";

export type UsePutUpdateCertificateProps = UseMutationProps<
  ApiResponse<PutUpdateCertificateResponseTransformed>,
  ApiError,
  PutUpdateCertificateRequest
>;

export const putUpdateCertificateMutationKey = () => ["putUpdateCertificate"];

export const usePutUpdateCertificate = (props?: UsePutUpdateCertificateProps) => {
  const mutation = useMutation<
    ApiResponse<PutUpdateCertificateResponseTransformed>,
    ApiError,
    PutUpdateCertificateRequest
  >({
    mutationKey: putUpdateCertificateMutationKey(),
    mutationFn: (data) => putUpdateCertificate(data),
    ...props,
  });

  return mutation;
};
