import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const loadedReview = useLoaderData();
  const [reviews, setReviews] = useState(loadedReview);
  const [filters, setFilters] = useState({
    genre: "",
    sortBy: "",
  });

  const uniqueGenres = [...new Set(loadedReview.map((review) => review.genre))];

  const handleSortChange = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, genre: e.target.value });
  };

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();
    fetch(`https://chill-gamer-server-dusky.vercel.app/reviews?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [filters]);

  return (
    <div className="bg-[#FBFBFB] dark:bg-[#181A1B] pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center py-6">
          <h2 className="text-2xl font-bold text-center">All Reviews</h2>

          <div className="flex flex-wrap justify-between items-center space-x-4">
            {/* Filter Dropdown */}
            <div>
              <label htmlFor="filter" className="font-semibold mr-2">
                Filter By Genre:
              </label>
              <select
                id="filter"
                className="px-4 py-2 border rounded-md focus:outline-none"
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

            {/* Sort Dropdown */}
            <div>
              <label htmlFor="sort" className="font-semibold mr-2">
                Sort By:
              </label>
              <select
                id="sort"
                className="px-4 py-2 border rounded-md focus:outline-none"
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

        {/* Reviews Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
