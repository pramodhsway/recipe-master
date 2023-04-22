import axios from "axios";

const API_URL = "https://recipe-master-backend.onrender.com/api";

const FETCH_ALL_USERS = `${API_URL}/all-users/`;
const DELETE_USER = `${API_URL}/remove-users/`;

export const FetchAllUsersService = async () => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    FETCH_ALL_USERS,
    {
      id: loginInfo._id,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};

export const RemoveUserService = async (uid) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    DELETE_USER,
    {
      id: loginInfo._id,
      delId: uid,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};
