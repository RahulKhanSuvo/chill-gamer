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
        console.error("Error fetching reviews:", error);
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
        console.error("Error fetching filtered reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredReviews();
  }, [filters]);

  return (
    <div className="bg-[#FBFBFB] dark:bg-[#181A1B] pb-16">
      <div className="lg:container mx-4 md:mx-6 lg:mx-auto">
        <div className="py-6">
          <h2 className="text-2xl mt-2 mb-4 font-bold text-center">
            All Reviews
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4">
            {/* Filter By Genre */}
            <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
              <label
                htmlFor="filter"
                className="font-semibold whitespace-nowrap"
              >
                Filter By Genre:
              </label>
              <select
                id="filter"
                className="px-4 py-2 w-full sm:w-auto border rounded-md focus:outline-none  transition"
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
            </div>

            {/* Sort By */}
            <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
              <label htmlFor="sort" className="font-semibold whitespace-nowrap">
                Sort By:
              </label>
              <select
                id="sort"
                className="px-4 py-2 w-full sm:w-auto border rounded-md focus:outline-none transition"
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
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="size-10 border-4 border-[#F80136] border-dotted rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
