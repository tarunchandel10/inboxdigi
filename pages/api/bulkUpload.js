import axios from "axios";
import { MainUrl } from "@/component/Baseurl";

export const API = axios.create({
  baseURL: MainUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const configuration = (token) => {
  return {
    baseURL: MainUrl,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  };
};

export const bulkUpload = async (body) => {
  const token = localStorage.getItem('token');
  try {
    const response = await API.post("create-multiple-creative", body, configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
