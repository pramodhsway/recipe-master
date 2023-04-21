import { Link } from "react-router-dom";

const LikedItem = ({ like }) => {
  like = like['product']
  if(like!==null){
  return (
    <>
      <div className="col-md-6 my-2">
        <div class="card" style={{ width: "18rem", height: "100%" }}>
          <img src={like.imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <Link
              to={`/details_db/${like._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 class="card-title">{like.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );}
};
export default LikedItem;
