const CommentSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="lg:container mx-auto  bg-white  dark:bg-[#181A1B] mt-8">
      <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
      <p className="text-gray-600 mb-6">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500">*</span>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Comment Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-red-500 focus:outline-none"
            rows="6"
            placeholder="Write your comment..."
            required
          ></textarea>
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Save Info Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-red-500 border-gray-300  focus:ring-red-500"
            id="save-info"
          />
          <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#F80136] text-white py-2 hover:bg-red-600 transition duration-200"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
