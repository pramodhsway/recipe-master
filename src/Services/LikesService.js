
import axios from "axios";
const API_BASE = "http://localhost:4300/api";
const LIKES_API = `${API_BASE}/likes`;
export const LikesService = async () => {
  const response = await axios.get(LIKES_API);
  return response.data;
};

