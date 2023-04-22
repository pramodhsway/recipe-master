import axios from "axios";

const API_URL = "https://recipe-master-backend.onrender.com/api";

const GET_USER_DETAILS_URL = `${API_URL}/logged-user`;

export const GetUserDetails=async()=>{
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(
        GET_USER_DETAILS_URL,
        {
            id: loginInfo._id,
        },
        {
            headers: {
                authorization: localStorage.getItem("LoginToken"),
            },
        }
    );
    return data.data.user;
}
