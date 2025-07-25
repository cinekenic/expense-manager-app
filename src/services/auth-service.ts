/** @format */

// auth-service.ts

import apiClient from "../config/api-client";
import type { Profile } from "../model/Profile";

export const createProfile = (profile: Profile) => {
  return apiClient.post<Profile>("/register", profile);
};
