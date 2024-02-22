import { API, configuration } from "./bulkUpload.js";

export const getAllAdmins = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("super-admin/all-admin-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during getAllAdmins:", error);
    throw error;
  }
};

export const createAdmin = async (body) => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.post("super-admin/create-admin-account", body, configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during create Admin:", error);
    throw error;
  }
}

export const getAdminDetail = async (logged_in_user_id) => {
  
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("user-profile-detail", {
      ...configuration(token),
      params: {
        login_user_id: logged_in_user_id
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error during getAllAdmins:", error);
    throw error;
  }
};
export const updateeAdmin = async (body) => {//
  try {
    const token = localStorage.getItem('token');
    const response = await API.post("update-user-profile", body, configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during create Admin:", error);
    throw error;
  }
}

export const getAllPanelUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("super-admin/all-user-pannel-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during getAllPanelUsers:", error);
    throw error;
  }
};
export const createUser = async (body) => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.post("super-admin/create-user-pannel-account", body, configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during create Admin:", error);
    throw error;
  }
}
export const getTotalAccountCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("super-admin/admin-total-account-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during getting counts", error);
    throw error;
  }
};

export const getMonthltyBudgetCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await API.get("super-admin/monthly-total-budget-list", configuration(token));
    return response.data;
  } catch (error) {
    console.error("Error during getting counts", error);
    throw error;
  }
}

export const changeUserStaus = async (body) => {
  
  try {
    const token = localStorage.getItem("token");
    const response = await API.post("update-user-status",body,configuration(token));
    return response.data;
  } catch (error) {
    console.error("User Status Updated", error);
    throw error;
  }
};