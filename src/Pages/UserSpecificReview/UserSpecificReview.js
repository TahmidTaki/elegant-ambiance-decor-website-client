import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewInfo from "./ReviewInfo/ReviewInfo";

const UserSpecificReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this review?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted Successfully");
            const remaining = reviews.filter((rev) => rev._id !== _id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>My review: {reviews.length}</h2>
      {reviews.map((review) => (
        <ReviewInfo key={review._id} review={review} handleDelete={handleDelete}></ReviewInfo>
      ))}
    </div>
  );
};

export default UserSpecificReview;
