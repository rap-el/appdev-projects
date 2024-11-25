import React, { useState } from 'react';

export default function Reviews() {
    const [review, setReview] = useState('');
    const [gameTitle, setGameTitle] = useState('');
    const [reviews, setReviews] = useState([]);
    const [date, setDate] = useState('');

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleGameTitleChange = (e) => {
        setGameTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const submitReview = () => {
        const newReview = {
            gameTitle,
            review,
            date: new Date(date).toLocaleDateString(),
        };
        setReviews([...reviews, newReview]);
        setReview('');
        setGameTitle('');
        setDate('');
    };

    return (
        <div className="review-container">
            <h1>Submit Your Game Review</h1>
            <label htmlFor="gameTitle">Game Title:</label>
            <input
                type="text"
                id="gameTitle"
                value={gameTitle}
                onChange={handleGameTitleChange}
            />
            <br />
            <label htmlFor="review">Review:</label>
            <textarea
                id="review"
                value={review}
                onChange={handleReviewChange}
            />
            <br />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={handleDateChange} />
            <br />
            <button type="button" onClick={submitReview}>
                Submit Review
            </button>

            <h2>Game Reviews:</h2>
            <div className="reviews-list">
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((r, index) => (
                        <div key={index} className="review-card">
                            <h3>{r.gameTitle}</h3>
                            <p>{r.review}</p>
                            <small>{r.date}</small>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
