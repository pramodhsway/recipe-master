import { CreateReview } from "../../../Services/Review";

export const CREATE_REVIEW = "CREATE_REVIEW";

export const CreateReviewAction = async (reviews) => {
  console.log("Services");
  console.log(reviews);
  const createReview = await CreateReview(reviews);
  return createReview;
};
