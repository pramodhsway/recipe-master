import axios from "axios";

const API_URL = "https://recipe-master-backend.onrender.com/api";

const CREATE_REVIEW_URL = `${API_URL}/add-review`;
const DELETE_REVIEW_URL = `${API_URL}/remove-review`;

export const CreateReview = async (reviews) => {
    console.log("huuu");
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));

  const data = await axios.post(

    CREATE_REVIEW_URL,
    {
      id: loginInfo._id,
      pid: reviews.pid,
      review: reviews.review,
      rating: reviews.rating,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};

export const DeleteReview = async (id) => {
  const data = await axios.post(
    DELETE_REVIEW_URL,
    {
      id,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};
