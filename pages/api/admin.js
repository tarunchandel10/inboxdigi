import { API, configuration } from "./bulkUpload.js";

export const getAllAdvertiser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("admin/all-advertiser-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during get All Advertiser:", error);
    throw error;
  }
};


export const createAdvertiser = async (body) => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.post("admin/create-advertiser-account", body, configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during create Advertiser:", error);
    throw error;
  }
}
export const getAllPanelUsersAdmin = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("admin/all-user-pannel-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during get All users:", error);
    throw error;
  }
};

export const createUser = async (body) => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.post("admin/create-user-pannel-account", body, configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during create Admin:", error);
    throw error;
  }
}

export const getTotalAccountCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("admin/advertiser-total-account-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during getting counts", error);
    throw error;
  }
};

export const getMonthltyBudgetCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("admin/monthly-total-budget-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during getting counts", error);
    throw error;
  }
}