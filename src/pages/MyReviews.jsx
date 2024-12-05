import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { users } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/myReviews?email=${users.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [users]);
  console.log(myReviews);
  const handelDelete = (id) => {
    fetch(`http://localhost:4000/myReviews/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = myReviews.filter((review) => review._id !== id);
          setMyReviews(remaining);
        }
      });
  };
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Game Name</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((myReview, index) => (
              <tr key={myReview._id}>
                <th>{index + 1}</th>
                <td>{myReview.title}</td>
                <td>{myReview.genre}</td>
                <td>{myReview.rating}/10</td>
                <td>{myReview.year}</td>
                <td>
                  <Link to={`/updateReview/${myReview._id}`}>
                    <button className="btn btn-info btn-sm mx-1">Update</button>
                  </Link>
                  <button
                    onClick={() => handelDelete(myReview._id)}
                    className="btn btn-error btn-sm mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
