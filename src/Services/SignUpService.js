import axios from "axios";

const API_URL = "http://localhost:4300/api";

const SIGNUP_URL = `${API_URL}/users`;

export const SignUpService = async (signup) => {
  const info = await axios.post(SIGNUP_URL, signup);
  return info.data;
};
