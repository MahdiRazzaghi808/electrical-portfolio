import type {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@/api/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteDeleteCertificate } from "./delete-delete-certificate";
import type {
  DeleteDeleteCertificateRequest,
  DeleteDeleteCertificateResponseTransformed,
} from "./delete-delete-certificate.types";

export type UseDeleteDeleteCertificateProps = UseMutationProps<
  ApiResponse<DeleteDeleteCertificateResponseTransformed>,
  ApiError,
  DeleteDeleteCertificateRequest
>;

export const deleteDeleteCertificateMutationKey = () => ["deleteDeleteCertificate"];

export const useDeleteDeleteCertificate = (props?: UseDeleteDeleteCertificateProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteDeleteCertificateResponseTransformed>,
    ApiError,
    DeleteDeleteCertificateRequest
  >({
    mutationKey: deleteDeleteCertificateMutationKey(),
    mutationFn: (data) => deleteDeleteCertificate(data),
    ...props,
  });

  return mutation;
};
