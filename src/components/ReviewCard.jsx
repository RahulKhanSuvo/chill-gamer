import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const { _id, coverURL, title, rating, year, genre } = review;
  return (
    <div>
      <img src={coverURL} alt="" />
      <h3>{title}</h3>
      <p>{year}</p>
      <Link to={`/review/${_id}`} className="btn">
        Explore Details
      </Link>
    </div>
  );
};

export default ReviewCard;
