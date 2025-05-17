import React, { useState } from "react";
import "../styleCss/collectionPointDetails.css";
import LoginRequiredMessage from "./loginRequiredMessage";
import { useNavigate } from "react-router-dom";

type Review = {
  user: string;
  rating: number; // Rating out of 5
  comment: string;
  date: string; // Date of the review
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  latitude: number;
  longitude: number;
  images: string[];
  name: string;
  address: string;
  reviews: Review[];
  onAddReview: (review: Review) => void;
  isLoggedIn: boolean; // Add a prop to check if the user is logged in
  onLogin: () => void; // Function to handle login
  onSignUp: () => void; // Function to handle sign-up
};

const CollectionPointDetails: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  latitude,
  longitude,
  name,
  address,
  reviews,
  onAddReview,
  isLoggedIn,
  onLogin,
  onSignUp,
}) => {
  const [newReview, setNewReview] = useState({ user: "", rating: 0, comment: "" });

  if (!isOpen) return null;

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  // Calculate overall rating
  const overallRating =
    reviews.length > 0
      ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ).toFixed(1)
      : "No ratings yet";

  // Calculate rating breakdown
  const ratingBreakdown = {
    excellent: reviews.filter((review) => review.rating === 5).length,
    good: reviews.filter((review) => review.rating === 4).length,
    average: reviews.filter((review) => review.rating === 3).length,
    poor: reviews.filter((review) => review.rating <= 2).length,
  };

  const handleSubmitReview = () => {
    if (!isLoggedIn) {
      return; // Prevent submission if the user is not logged in
    }

    if (newReview.user && newReview.rating && newReview.comment) {
      const reviewWithDate = { ...newReview, date: new Date().toLocaleDateString() };
      onAddReview(reviewWithDate);
      setNewReview({ user: "", rating: 0, comment: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleSignUp = () => {
    navigate("/registration"); // Navigate to the registration page
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">{name}</h2>
        <p className="modal-address">
          <strong>Address:</strong> {address}
        </p>
        <div className="modal-map">
          <iframe
            src={googleMapsUrl}
            width="100%"
            height="300"
            style={{ border: "none", borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        {/* Reviews and Feedback Section */}
        <div className="reviews-feedback">
          <h3 className="reviews-title">Reviews and Feedback</h3>
          <div className="reviews-summary">
            <div className="summary-item">
              <h1>{reviews.length}</h1>
              <p>Total Reviews</p>
            </div>
            <div className="summary-item">
              <h1>{overallRating}</h1>
              <p>Average Rating</p>
              <div className="rating-stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`star ${index < Math.round(Number(overallRating)) ? "filled" : ""
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="rating-breakdown">
            <div className="rating-row">
              <span>Excellent</span>
              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{
                    width: `${(ratingBreakdown.excellent / reviews.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="rating-row">
              <span>Good</span>
              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{
                    width: `${(ratingBreakdown.good / reviews.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="rating-row">
              <span>Average</span>
              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{
                    width: `${(ratingBreakdown.average / reviews.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="rating-row">
              <span>Poor</span>
              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{
                    width: `${(ratingBreakdown.poor / reviews.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="user-reviews">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <span className="review-user">{review.user}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`star ${index < review.rating ? "filled" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
          <div className="add-review">
            <h3>Write a Review</h3>
            {/* Show LoginRequiredMessage if the user is not logged in */}
            {!isLoggedIn ? (
              <LoginRequiredMessage onLogin={handleLogin} onSignUp={handleSignUp} />
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newReview.user}
                  onChange={(e) =>
                    setNewReview({ ...newReview, user: e.target.value })
                  }
                  className="review-input"
                />
                <select
                  value={newReview.rating}
                  onChange={(e) =>
                    setNewReview({ ...newReview, rating: parseInt(e.target.value) })
                  }
                  className="review-select"
                >
                  <option value={0}>Select Rating</option>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} / 5
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Your Comment"
                  value={newReview.comment}
                  onChange={(e) =>
                    setNewReview({ ...newReview, comment: e.target.value })
                  }
                  className="review-textarea"
                />
                <button
                  onClick={handleSubmitReview}
                  className="submit-review-button"
                >
                  Submit Review
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPointDetails;
