import axios from "axios";

const API_URL = "https://recipe-master-backend.onrender.com/api";

const LOGIN_URL = `${API_URL}/login`;

export const loginService = async (login) => {
  const loginInfo = await axios.post(LOGIN_URL, login);
  if (loginInfo.data.success) {
    localStorage.setItem("LoggedIn", JSON.stringify(loginInfo.data.userData));
    localStorage.setItem("LoginToken", `Bearer ${loginInfo.data.token}`);
  }
  return loginInfo.data;
};
export const isloggedinService = () => {
  if (localStorage.getItem("LoginToken") !== null) return true;
  else return false;
};

export const isDealerService = () => {
  if (JSON.parse(localStorage.getItem("LoggedIn")).type === "Dealer") {
    return true;
  }
  return false;
};

export const isAdminService = () => {
  if (JSON.parse(localStorage.getItem("LoggedIn")).type === "Admin") {
    return true;
  }
  return false;
};

export const logOutService = () => {
  localStorage.removeItem("LoggedIn");
  localStorage.removeItem("LoginToken");
};
