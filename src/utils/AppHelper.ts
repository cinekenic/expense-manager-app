/** @format */

import type { AuthResponse } from "../model/AuthResponse";

class AppHelper {
  static getLoggedInUser() {
    const authObject = localStorage.getItem("user");
    if (authObject) {
      const { email } = JSON.parse(authObject) as AuthResponse;
      return email;
    }
    return "unknown@example.com";
  }
}

export default AppHelper;
