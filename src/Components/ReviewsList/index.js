import ReviewsListItem from "./ReviewListItem";

const ReviewsList = ({ Reviews }) => {
    if(Reviews!==null) {
        console.log("Reviews");
        console.log(Reviews);
        return (
            <>
                <div className="list-group">
                    {Reviews.filter((x)=>{
                        if(Reviews[x]==null){
                            return false;
                        }
                        return true;
                    }).map((x) => {
                        return (
                            <ReviewsListItem
                                pid={x.product._id}
                                pname={x.product.name}
                                review={x.review}
                                rating={x.rating}
                            ></ReviewsListItem>
                        );
                    })}
                </div>
            </>
        );
    }
};
export default ReviewsList;
