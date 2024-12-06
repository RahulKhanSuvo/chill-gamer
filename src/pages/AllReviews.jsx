import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const loadedReview = useLoaderData();

  return (
    <div className="bg-[#FBFBFB] mb-16 ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center pb-6 pt-10">
          All review
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loadedReview.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
