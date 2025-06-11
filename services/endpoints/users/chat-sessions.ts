import { EnrolleesRegistrationManagementResponse } from "@/types/enrollees-reg-mgt";
import { environmentType } from "./birthdays";
import { get } from "@/services/axios";

export const fetchEnrolleesRegistrationManagement =
  (): Promise<EnrolleesRegistrationManagementResponse> => {
    const response = get<EnrolleesRegistrationManagementResponse>('/chat/sessions');
    return response;
  };
