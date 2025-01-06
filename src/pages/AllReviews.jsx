import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { Fade } from "react-awesome-reveal";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    genre: "",
    sortBy: "",
  });

  const [uniqueGenres, setUniqueGenres] = useState([]);

  const handleSortChange = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, genre: e.target.value });
  };

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://chill-gamer-server-dusky.vercel.app/reviews"
        );
        const data = await response.json();
        setReviews(data);
        const genres = [...new Set(data.map((review) => review.genre))];
        setUniqueGenres(genres);
      } catch (error) {
        // console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchFilteredReviews = async () => {
      setLoading(true);
      const query = new URLSearchParams(filters).toString();
      try {
        const response = await fetch(
          `https://chill-gamer-server-dusky.vercel.app/reviews?${query}`
        );
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        // console.error("Error fetching filtered reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredReviews();
  }, [filters]);

  return (
    <div className="bg-[#F2F4F8] dark:bg-[#181A1B] pb-16 pt-10">
      <div className="lg:container mx-4 md:mx-6 lg:mx-auto">
        <div className="bg-white dark:bg-[#000000] px-2 rounded-md flex flex-col md:flex-row items-center justify-between py-2 mb-3">
          <h2 className="font-medium dark:">All Reviews</h2>
          <div className="space-x-1">
            <label htmlFor="sort" className="font-semibold whitespace-nowrap">
              Sort By:
            </label>
            <select
              id="filter"
              className="px-2 py-1 w-full sm:w-auto bg-[#F1F3F5] rounded-md focus:outline-[#F80136]  transition"
              onChange={handleFilterChange}
              value={filters.genre}
            >
              <option value="">All Genres</option>
              {uniqueGenres.map((genre) => (
                <option value={genre} key={genre}>
                  {genre}
                </option>
              ))}
            </select>
            <select
              id="sort"
              className="px-2 py-1 w-full sm:w-auto bg-[#F1F3F5] rounded-md focus:outline-[#F80136] transition"
              onChange={handleSortChange}
              value={filters.sortBy}
            >
              <option value="">Select Option</option>
              <optgroup label="Rating">
                <option value="ratingAsc">Low to High</option>
                <option value="ratingDesc">High to Low</option>
              </optgroup>
              <optgroup label="Year">
                <option value="yearAsc">Oldest to Newest</option>
                <option value="yearDesc">Newest to Oldest</option>
              </optgroup>
            </select>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="size-10 border-4 border-[#F80136] border-dotted rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <Fade damping={0.2}>
              {reviews.map((review) => (
                <ReviewCard review={review} key={review._id}></ReviewCard>
              ))}
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
