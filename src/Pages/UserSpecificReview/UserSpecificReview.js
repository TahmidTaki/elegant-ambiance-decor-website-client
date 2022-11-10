import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewInfo from "./ReviewInfo/ReviewInfo";
import Swal from "sweetalert2";

const UserSpecificReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://elegant-ambiance-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("elegantToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this review?");
    if (proceed) {
      fetch(`https://elegant-ambiance-server.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Successfully Deleted.",
              showConfirmButton: true,
            });
            const remaining = reviews.filter((rev) => rev._id !== _id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      {reviews.length === 0 ? (
        <h2 className="text-4xl font-bold mt-10">No Reviews were added by you</h2>
      ) : (
        <>
          <h2>My review: {reviews.length}</h2>
          {reviews.map((review) => (
            <ReviewInfo key={review._id} review={review} handleDelete={handleDelete}></ReviewInfo>
          ))}
        </>
      )}
    </div>
  );
};

export default UserSpecificReview;
