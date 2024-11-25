// Game.jsx
import { useLocation } from "react-router-dom";

export default function Game() {
    const location = useLocation();
    const game = location.state.game;
    return (
        <div>
            <h1>{game.name}</h1>
            <img src={game.imageUrl} alt={game.name} style={{ width: '200px', height: '200px' }} />
            <p>{game.description}</p>
            <div className="reviews">
                <h2>Reviews</h2>
                <ul>
                    {game.reviews.slice(0, 5).map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
