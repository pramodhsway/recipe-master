import axios from "axios";

const API_URL = "https://recipe-master-backend.onrender.com/api";
let GET_USER_PUBLIC_DETAILS_URL = `${API_URL}/users/`;
export const GetUserPublicInformation = async (id) => {
  const data = await axios.get(`${GET_USER_PUBLIC_DETAILS_URL}${id}`);
  return data.data.user;
};
