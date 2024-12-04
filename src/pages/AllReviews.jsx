import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const loadedReview = useLoaderData();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">All review</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loadedReview.map((review) => (
          <ReviewCard review={review} key={review._id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
