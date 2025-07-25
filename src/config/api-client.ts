/** @format */

import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://expense-manager-restapi.onrender.com/api/v1",
});

export default apiClient;
