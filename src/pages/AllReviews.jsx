import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const loadedReview = useLoaderData();
  const [reviews, setReviews] = useState(loadedReview);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  // Extract unique genres
  const uniqueGenres = [...new Set(loadedReview.map((review) => review.genre))];

  // Sort Reviews
  const sortReviews = (option, filteredReviews) => {
    const sortedReviews = [...filteredReviews];
    if (option === "ratingAsc") {
      sortedReviews.sort((a, b) => a.rating - b.rating);
    } else if (option === "ratingDesc") {
      sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (option === "yearAsc") {
      sortedReviews.sort((a, b) => a.year - b.year);
    } else if (option === "yearDesc") {
      sortedReviews.sort((a, b) => b.year - a.year);
    }
    return sortedReviews;
  };

  // Filter Reviews
  const filterReviews = (genre) => {
    const filteredReviews = genre
      ? loadedReview.filter((review) => review.genre === genre)
      : loadedReview;
    return sortReviews(sortOption, filteredReviews); // Apply sorting to filtered reviews
  };

  // Handle Sort Change
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    const sortedFilteredReviews = sortReviews(option, reviews);
    setReviews(sortedFilteredReviews);
  };

  // Handle Filter Change
  const handleFilterChange = (e) => {
    const genre = e.target.value;
    setFilterOption(genre);
    const filteredSortedReviews = filterReviews(genre);
    setReviews(filteredSortedReviews);
  };

  // Update Reviews on Initial Load or Reset
  useEffect(() => {
    const filteredSortedReviews = filterReviews(filterOption);
    setReviews(filteredSortedReviews);
  }, [loadedReview, filterOption]);

  return (
    <div className="bg-[#FBFBFB] mb-16">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="flex justify-between items-center py-6">
          <h2 className="text-2xl font-bold text-center">All Reviews</h2>

          {/* Filter and Sort Dropdowns */}
          <div className="flex space-x-4">
            {/* Filter Dropdown */}
            <div>
              <label htmlFor="filter" className="font-semibold mr-2">
                Filter By Genre:
              </label>
              <select
                id="filter"
                className="px-4 py-2 border rounded-md focus:outline-none"
                value={filterOption}
                onChange={handleFilterChange}
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
                value={sortOption}
                onChange={handleSortChange}
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
